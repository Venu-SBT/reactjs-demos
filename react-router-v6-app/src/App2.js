import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './components/Layout';
//import Posts from './components/pages/Posts';
import PageNotFound from './components/pages/PageNotFound';
import PostLayout from './components/pages/PostLayout';
import PostDetail from './components/pages/PostDetail';
import BasicPost from './components/pages/BasicPost';

function App2() {
  return (
    <>
      <Router>        
        <Routes>
            {/* Nested Routes */}
           <Route path="/" element={<Layout />}>
               {/* <Route path="/" element={<Home />} /> */}
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="contact" element={<Contact />} />
               {/* Deeply nested Routes */}
               <Route path="posts" element={<PostLayout />}>
                   <Route index element={<BasicPost />} />
                   <Route path=":category" element={<PostDetail />} />
               </Route>
           </Route>   
           <Route path='*' element={<PageNotFound />} />        
        </Routes>
      </Router>      
    </>       
  );
}

export default App2;

