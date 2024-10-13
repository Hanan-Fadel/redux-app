// UserProfile.js (Updated React Component)
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../actions'; // Import action

const UserProfile = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const { profile, loading, error } = useSelector((state) => state); // Get state from Redux store

  const handleFetchProfile = () => {
    dispatch(fetchUserProfile()); // Dispatch action to fetch user profile
  };

  return (
    <div>
      <button onClick={handleFetchProfile}>Fetch User Profile</button> {/* Button to fetch data */}
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>Error: {error}</p>} {/* Show error if exists */}
      {profile && ( // Display profile data if it exists
        <div>
          <h2>User Profile</h2>
          <p>ID: {profile.id}</p>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
