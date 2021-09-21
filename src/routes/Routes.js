import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router'

const HomeLazy = lazy(() => import("../pages/Home"))

const Routes = () => {
    return (
        <Switch>
            <Redirect from="/" to="/home" />
            <Route exact path="/home" render={(props) => <HomeLazy {...props} />} />
        </Switch>
    )
}

export default Routes
