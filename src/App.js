import React, { lazy } from 'react';
import { Route, Switch } from "react-router-dom";

const Todo = lazy( () => import( "./pages/Todo" ) )


function App () {
  return (
    <Switch>
      <Route path="/" exact render={ ( props ) => <Todo { ...props } /> } />
    </Switch>
  );
}

export default App;
