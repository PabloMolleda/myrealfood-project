import { Component } from 'react'
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap'
import axios from 'axios'
import RecentSearches from './RecentSearches'
import FoodDetails from './FoodDetails'


class SearchPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            recentSearches: [],
            result: undefined,
            alert: {
                show: false,
                text: ' '
            },
            showModal: false
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
                    this.setState({
                        result: response.data.product,
                        showModal: true,
                        // recentSearches: [...this.state.recentSearches, {code: response.data.code, photo: response.data.product.image_url, name: response.data.product.abbreviated_product_name}]
                        recentSearches: [...this.state.recentSearches, { code: response.data.code, product: response.data.product }]
                    })
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
                                    <Form.Control className="roundBox shadow" type="text" placeholder="Introduce el código de barras..." value={this.state.search} onChange={e => this.handleInputChange(e)} name="search" />
                                </Form.Group>
                                <Button className="roundBox mainButton shadow" variant="outline-dark" type="submit">Buscar</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <RecentSearches recentSearches={this.state.recentSearches} />
                        </Col>
                    </Row>
                </Container>

                <Modal size='xl' show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                    <FoodDetails props={this.state.result} closeModal={() => this.setState({ showModal: false })} />
                </Modal>


            </>
        )
    }
}

export default SearchPage


