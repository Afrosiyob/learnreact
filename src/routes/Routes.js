import React, { Fragment, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

const HomeLazy = lazy(() => import("../pages/Home"))
const PostsLazy = lazy(() => import("../pages/Posts"))
const TodosLazy = lazy(() => import("../pages/Todos"))
const ElementLazy = lazy(() => import("../pages/Element"))



const Routes = () => {
    return (
        <Fragment>

            <Link to="/home" > home </Link>
            <Link to="/posts" > Posts </Link>
            <Link to="/todos" > todos </Link>

            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={HomeLazy} />
                <Route exact path="/posts" component={PostsLazy} />
                <Route path="/posts/:id" component={ElementLazy} />
                <Route exact path="/todos" component={TodosLazy} />
                <Route path="/todos/:id" component={ElementLazy} />
                <Route path="/*" render={(props) => <div> page not found </div>} />
            </Switch>
        </Fragment>
    )
}

export default Routes
