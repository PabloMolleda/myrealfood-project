import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from '../../shared/Spinner'
import axios from 'axios'
import FoodInfo from './FoodInfo'


class FoodDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: undefined
        }
    }


    componentDidMount() {

        const { barcode } = this.props.match.params

        axios
            .get(`https://us.openfoodfacts.org/api/v0/product/${barcode}`)
            .then(response => this.setState({ result: response.data.product })            )
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            {
                                !this.state.result
                                    ?
                                    <Spinner />
                                    :
                                    <>
                                        <Link to="/">Volver a la página principal</Link>
                                        <FoodInfo result={this.state.result} />
                                    </>
                            }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default FoodDetails