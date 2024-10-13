import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Define an async function inside useEffect to fetch profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/profile");
        console.log("response===>", response);
        setProfileData(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching profile data", error);
      } finally {
        setLoading(false); // Stop loading after the request finishes
      }
    };

    fetchProfile(); // Call the async function
  }, []); // Empty dependency array to run useEffect only once after component mounts

  // Show loading message or spinner while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render UserProfile component only when profileData is available
  return (
    <>
      {profileData ? <UserProfile profile={profileData} /> : <div>No profile data found.</div>}
    </>
  );
}
