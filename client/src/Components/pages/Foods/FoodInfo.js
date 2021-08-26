import { Container, Row, Col } from 'react-bootstrap'

const FoodInfo = ({ result }) => {

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <img src={result.image_url} alt='hi' style={{ width: '100%' }} />
                </Col>
                <Col md={8}>
                    <h1>{result.abbreviated_product_name}</h1>
                    <hr />
                    <p> Este producto es producido por la/s siguiente/s marcas: {result.brands_tags[0]}.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Ingredientes:</h2>
                    <p>{result.ingredients_text_es}</p>
                </Col>
                <Col md={4}>
                <img src={result.selected_images.ingredients.display.es} alt={result.abbreviated_product_name} style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                    <h2>Información Nutricional:</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default FoodInfo