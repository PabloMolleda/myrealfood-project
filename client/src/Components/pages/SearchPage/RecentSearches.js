import { Component } from 'react'
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap'
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
            .then(response => {
                this.setState({
                    result: response.data.product
                })
                console.log('esto es lo que se guarda en el result', response.data.product)
                console.log('esto es lo que busca', this.state.search)
            })
            .catch(err => console.log('Este es el error', err))
    }

    


    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        {
                            this.props.recentSearches.length === 0
                                ?
                                <>
                                </>
                                :
                                <>
                                    <h2>Últimas búsquedas:</h2>
                                    {
                                        this.props.recentSearches.map(elm =>
                                            <Card>
                                                <Row className='justify-content-center text-center'>
                                                    <Col md={2}>
                                                        <Card.Img variant="top" src={elm.photo} />
                                                    </Col>

                                                    <Col md={8}>
                                                        <Card.Title>Producto: {elm.name}</Card.Title>
                                                        <Card.Text>
                                                            <p>Código de barras: {elm.code}</p>
                                                        </Card.Text>
                                                        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                                                            <FoodDetails props={this.state.result} closeModal={() => this.setState({ showModal: false })} />
                                                        </Modal>
                                                    </Col>
                                                    <Col md={2}>
                                                        <Button variant="outline-dark" className="mainButton roundBox"
                                                            onClick={() => {
                                                                this.setState({ search: elm.code, showModal: true })
                                                                
                                                                this.showFood()
                                                                
                                                            }}>Ver producto</Button>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        )}
                                </>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RecentSearches