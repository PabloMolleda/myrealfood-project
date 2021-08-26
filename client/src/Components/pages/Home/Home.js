import { Component } from 'react'
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap'
import axios from 'axios'


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            result: '',
            alert: {
                show: false,
                text: ' '
            }
        }
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    searchFood = e => {
        e.preventDefault()

        axios
            .get(`https://us.openfoodfacts.org/api/v0/product/${this.state.search}`)
            .then(response => {
                if (response.data.status_verbose === 'product not found') {
                    this.setState({ alert: { show: true, text: 'El código de barras no corresponde con ningún producto.' } })
                } else if (response.data.status_verbose === 'no code or invalid code') {
                    this.setState({ alert: { show: true, text: 'Por favor, inserta un código de barras válido.' } })
                } else {
                    this.props.history.push(`/detalles/${this.state.search}`)
                }
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.searchFood}>

                                <Form.Group controlId="searchBar">
                                    <Form.Control className="roundBox" type="text" placeholder="Introduce el código de barras..." value={this.state.search} onChange={e => this.handleInputChange(e)} name="search" />
                                </Form.Group>

                                <Button className="roundBox mainButton" variant="outline-dark" type="submit">Buscar</Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>


            </>
        )
    }
}

export default Home


