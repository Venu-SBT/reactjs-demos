import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Logout Page</h1>
      <h2>{location.state.name} is logged out!!</h2>
    </>    
  );
};

export default Logout;