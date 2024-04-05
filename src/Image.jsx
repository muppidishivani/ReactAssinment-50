import React from 'react';
import backgroundImage from './home.jpg.png'; // Import the image

const MyComponent = () => {
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`, // Apply the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '40vh',
      Width: '40vh',
      backgroundPosition:'center',
      // Set the height to whatever you need
    }
  };

  return (
    <center>
    <div style={styles.container}>
      {/* Your content goes here */}
    </div>
    </center>
  );
};

export default MyComponent;
