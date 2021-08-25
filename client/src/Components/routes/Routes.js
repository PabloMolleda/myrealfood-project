import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import FoodList from '../pages/Foods/FoodList'

const Routes = ({ handleAlert }) => {

    return (
        <Switch>

            <Route path="/" exact render={() => <Home />} />
            <Route path="/comidas" render={() => <FoodList />} />

            {/* <Route exact path="/" render={props => <CredentialsCard loggedUser={loggedUser} {...props} storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route path="/complete-registration" render={props => loggedUser ? <CompleteRegistration loggedUser={loggedUser} history={props.history} handleAlert={handleAlert} /> : <Redirect to="/" />} /> */}
        </Switch>
    )
}

export default Routes