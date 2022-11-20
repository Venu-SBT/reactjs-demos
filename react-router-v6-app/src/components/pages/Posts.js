import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Posts = () => {
  const { category, id } = useParams();   // localhost:3000/post/laptop/1
  const [searchParams, setSearchParams] = useSearchParams();   // localhost:3000/post/laptop/1?price=10000&sort=asc
  console.log(searchParams.get('price'));

  return (
    <>
      <h1>Posts Page : { category }</h1>
      <h1>Posts Page : { id }</h1>
    </>
  )
}

export default Posts;