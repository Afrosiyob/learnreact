import React, { Fragment, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

const HomeLazy = lazy(() => import("../pages/Home"))
const PostsLazy = lazy(() => import("../pages/Posts"))
const TodosLazy = lazy(() => import("../pages/Todos"))



const Routes = () => {
    return (
        <Fragment>

            <Link to="/home" > home </Link>
            <Link to="/posts" > Posts </Link>
            <Link to="/todos" > todos </Link>

            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={HomeLazy} />
                <Route path="/posts" component={PostsLazy} />
                <Route path="/todos" component={TodosLazy} />
                <Route path="/*" render={(props) => <div> page not found </div>} />
            </Switch>
        </Fragment>
    )
}

export default Routes
