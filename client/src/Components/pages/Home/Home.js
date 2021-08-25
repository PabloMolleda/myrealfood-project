import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <Container>
            <Row>
                <Col md={10}>
                    <Link to={'/comidas'} >Descubre más </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home