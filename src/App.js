import React, { lazy } from 'react';
import { Link, Route, Switch } from "react-router-dom";

const Todo = lazy( () => import( "./pages/Todo" ) )
const Posts = lazy( () => import( "./pages/Posts" ) )
const Comments = lazy( () => import( "./pages/Comments" ) )

function App () {
  return (
    <>
      <Link to="/"> home </Link>
      <Link to="/posts" > posts </Link>
      <Link to="/comments" > comments </Link>
      <Switch>
        <Route path="/" exact render={ ( props ) => <Todo { ...props } /> } />
        <Route path="/posts" render={ ( props ) => <Posts { ...props } /> } />
        <Route path="/comments" render={ ( props ) => <Comments { ...props } /> } />
      </Switch>
    </>
  );
}

export default App;
