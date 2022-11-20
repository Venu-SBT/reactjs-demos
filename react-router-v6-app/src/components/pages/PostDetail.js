import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { category } = useParams();
  return (
    <>
      <h1>Post details : {category}</h1>
      <p>This is about the post related to the category {category}</p>      
    </>  
  );
};

export default PostDetail;