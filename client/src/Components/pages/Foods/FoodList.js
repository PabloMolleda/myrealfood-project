import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from '../../shared/Spinner'
import axios from 'axios'


class FoodList extends Component {
    constructor() {
        super()
        this.state = {
            food: undefined,
            search: ""
        }
    }

    handleInputChange(e) {
        e.preventDefault()
        console.log(e.target)
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.searchFood()
    }

    // componentDidMount() {
    //     axios.get('https://ih-beers-api2.herokuapp.com/beers')
    //         .then(response => this.setState({ beers: response.data }))
    //         .catch(err => console.log(err))
    // }

    searchFood() {
        axios
            .get(`https://us.openfoodfacts.org/api/v0/product/${this.state.search}`)
            .then(response => this.setState({ food: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Form.Group controlId="search">
                    <Form.Control type="text" value={this.state.search} onChange={e => this.handleInputChange(e)} name="search" />
                </Form.Group>

                {
                    !this.state.food
                        ?
                        <Spinner/>
                        :
                        <h1>hifehbehewhefw</h1>
                }
            </>
        )
    }

}

export default FoodList