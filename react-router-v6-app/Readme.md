React Router v6 
 - Official website : reactrouter.com
 - A fully featured Client & server side routing package/library for React  
 - It makes creating intuitive and clean routes so much easier.
 - A package more smaller and powerful than React Router v5, Reach Router (A sister project)
 - React Router is compatible with React >= 16.8
 - React Router runs anywhere React runs - on the web, on the server with node.js, on React Native  
 
Installation
 npm install react-router-dom@6    
   Note: For React Native - npm i react-router-native
 yarn add react-router-dom@6   
 pnpm add react-router-dom@6 

API
 1. Components
     i. BrowserRouter(A context), Routes, Route, Navigate, Outlet
 2. Hooks 
     i. const { category } = useParams();   //Access segment from URL {category}
        const { category, id } = useParams();   // localhost:3000/post/laptop/1
    ii. const [searchParams, setSearchParams] = useSearchParams();   // localhost:3000/post/laptop/1?price=10000&sort=asc
        console.log(searchParams.get('price'));
   iii. let location = useLocation();  //To access data passed in from parent as {location.state.fname}
    iv. let navigate = useNavigate();  //Returns a function that takes two arguments (second arg is optional that is used to dispatch data)
     v. useRoutes()