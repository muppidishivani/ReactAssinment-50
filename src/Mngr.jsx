import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationLinks = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    navigate(`/${role}`);
  };

  return (
    <div>
      <h2>Navigation Links</h2>
      <ul>
        <li>
          <button onClick={() => handleNavigation('manager')}>Manager</button>
        </li>
       
       
      </ul>
    </div>
  );
};

export default NavigationLinks;
