import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> */}

        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}

        <li><NavLink to="/" style={({isActive}) => { return { backgroundColor: isActive ? 'red' : ''}}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive}) => { return { backgroundColor: isActive ? 'red' : ''}}}>About</NavLink></li>
        <li><NavLink to="/contact" style={({isActive}) => { return { backgroundColor: isActive ? 'red' : ''}}}>Contact</NavLink></li>
        <li><NavLink to="/posts/mobile" style={({isActive}) => { return { backgroundColor: isActive ? 'red' : ''}}}>Posts</NavLink></li>
        <li><NavLink to="/posts/mobile/1" style={({isActive}) => { return { backgroundColor: isActive ? 'red' : ''}}}>Post with Id</NavLink></li>
      </ul>
    </>
  );
};
export default Navbar;