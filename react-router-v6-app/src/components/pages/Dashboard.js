import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate(); //Returns a function that takes two arguments (second arg is optional that is used to dispatch data)
  let data = { name: "Venu" };  //

  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={() => { navigate('/logout', { state: data }) }}>Logout</button>
    </>    
  );
};

export default Dashboard;