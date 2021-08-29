import { Component } from 'react'
import { Col, Row, Card, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import FoodDetails from './FoodDetails'



class RecentSearches extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: undefined,
            result: undefined,
            showModal: false
        }
    }


    showFood = () => {

        axios
            .get(`https://us.openfoodfacts.org/api/v0/product/${this.state.search}`)
            .then(response => this.setState({ result: response.data.product }))
            .catch(err => console.log('Este es el error:', err))
    }


    render() {

        return (
            <>
                {
                    this.props.recentSearches.length === 0
                        ?
                        <>
                        </>
                        :
                        <>
                            <h2 style={{ margin: '50px 0 25px 0' }}>Últimas búsquedas:</h2>
                            {
                                this.props.recentSearches.map(elm =>
                                    <Card className='shadow'>
                                        <Row className='justify-content-start d-flex align-items-center'>
                                            <Col sm={2} >
                                                <img src={elm.product.image_url} alt={elm.product.abbreviated_product_name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                            </Col>

                                            <Col sm={7}>
                                                <Card.Title>Producto: {!elm.product.generic_name_es ? elm.product.generic_name : elm.product.generic_name_es}</Card.Title>
                                                <Card.Text>
                                                    <p>Código de barras: {elm.code}</p>
                                                </Card.Text>
                                                <Modal size='xl' show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                                                    <FoodDetails props={this.state.result} closeModal={() => this.setState({ showModal: false })} />
                                                </Modal>
                                            </Col>
                                            <Col sm={2}>
                                                <Button variant="outline-dark" className="btn-sm mainButton roundBox"
                                                    onClick={
                                                        async () => {

                                                            await this.setState({ search: elm.code, showModal: true })

                                                            await this.showFood()

                                                        }}>Ver</Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                        </>
                }
            </>
        )
    }
}

export default RecentSearches