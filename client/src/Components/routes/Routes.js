import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SearchPage from '../pages/SearchPage/SearchPage'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={props => <Home history={props.history} />} />
            <Route path="/app" exact render={props => <SearchPage history={props.history} />} />
        </Switch>
    )
}

export default Routes