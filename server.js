//nodejs express api
import express from "express";
import cors from 'cors';

const app = express();

const PORT = 5000;

app.use(cors()); //enable CORS for all routes

//sample user data 

const userProfile = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
}

//Endpoint to get user profile 
app.get("/api/user/profile", (req, res)=> {
  res.json(userProfile) //Send user profile data as JSON
});

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})