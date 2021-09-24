import React, { lazy } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Posts2 from './pages/Posts2';

const Todo = lazy( () => import( "./pages/Todo" ) )
const Posts = lazy( () => import( "./pages/Posts" ) )
const Comments = lazy( () => import( "./pages/Comments" ) )

function App () {
  return (
    <>
      <Link to="/"> home </Link>
      <Link to="/posts" > posts </Link>
      <Link to="/posts2" > post2 </Link>
      <Link to="/comments" > comments </Link>
      <Switch>
        <Route path="/" exact render={ ( props ) => <Todo { ...props } /> } />
        <Route path="/posts" render={ ( props ) => <Posts { ...props } /> } />
        <Route path="/posts2" render={ ( props ) => <Posts2 { ...props } /> } />
        <Route path="/comments" render={ ( props ) => <Comments { ...props } /> } />
      </Switch>
    </>
  );
}

export default App;
