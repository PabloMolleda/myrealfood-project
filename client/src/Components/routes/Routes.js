import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import FoodDetails from '../pages/Foods/FoodDetails'

const Routes = ({ handleAlert }) => {

    return (
        <Switch>

            <Route path="/" exact render={props => <Home history={props.history}/>} />
            <Route path="/detalles/:barcode" render={props => <FoodDetails {...props}/>} />

        </Switch>
    )
}

export default Routes