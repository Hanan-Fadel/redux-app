import express from "express";
import cors from 'cors';
import { createClient } from 'redis';

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Create a Redis client
const redisClient = createClient();

// Connect to Redis
redisClient.connect()
   .then(() => console.log("Connected to Redis"))
   .catch(err => console.error("Could not connect to Redis", err));

// Sample user data
const userProfile = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// Endpoint to get user profile
app.get("/api/user/profile", async (req, res) => {
    try {
        // Check if the profile exists in Redis cache
        const cachedProfile = await redisClient.get('userProfile');

        if (cachedProfile) {
            console.log('Serving from Redis cache');
            return res.json(JSON.parse(cachedProfile));
        }

        // If not cached, fetch the profile and store it in Redis
        console.log('Serving from original data');
        await redisClient.setEx('userProfile', 3600, JSON.stringify(userProfile)); // Cache for 1 hour (3600 seconds)

        res.json(userProfile);
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
