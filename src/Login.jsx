import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StaffComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For demonstration purposes, let's assume login is successful
    setIsLoggedIn(true);
  };

  const handleEdit = () => {
    if (!isLoggedIn) {
      // Redirect to login page or display a message indicating login is required
      useNavigate("/SignUp")
    } else {
      // Proceed with edit logic
      // For demonstration purposes, let's log a message
      console.log('Editing staff component...');
    }
  };

  return (
    <div>
      <h2>Staff Component</h2>
      <button onClick={handleEdit}>Edit</button>
      {!isLoggedIn && <p>Please login to edit the staff component.</p>}
    </div>
  );
};

export default StaffComponent;
