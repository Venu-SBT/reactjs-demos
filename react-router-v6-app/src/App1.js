import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Posts from './components/pages/Posts';
import PageNotFound from './components/pages/PageNotFound';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

function App1() {
  let isLoggedIn = true;
  let data = { st : 'User not logged in' };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<h1>Hello React Router</h1>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/posts/:category' element={<Posts />} />    {/* Using segments for categories for dynamic url - useParams() hook */}
          <Route path='/posts/:category/:id' element={<Posts />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' replace state={data} />} />   {/* Conditional Routes */}          
          <Route path='*' element={<PageNotFound />} />            
        </Routes>
      </Router>      
    </>       
  );
}

export default App1;

