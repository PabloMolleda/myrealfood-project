import { Modal, Container, Row, Col, Table } from 'react-bootstrap'
import './FoodInfo.css'

const FoodInfo = ({ result }) => {

    return (

        <Modal.Body>
            <Container id='productInfo'>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={4}>
                        <img src={result.image_url} alt={result.abbreviated_product_name} />
                    </Col>
                    <Col lg={6}>
                        <Modal.Title>
                            <h1>{!result.abbreviated_product_name ? result.generic_name : result.abbreviated_product_name}</h1>
                        </Modal.Title>
                        <hr />
                        <p> Este producto es producido por la/s siguiente/s marcas: </p>
                        {
                            result.brands_tags.map(elm =>
                                <p>- {elm.toUpperCase()}.</p>)
                        }
                    </Col>
                </Row>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6}>
                        <h2>Ingredientes:</h2>
                        <p>{!result.ingredients_text_es ? result.ingredients_text : result.ingredients_text_es.toLowerCase()}</p>
                    </Col>
                    <Col lg={4}>
                        <img src={result.selected_images.ingredients.display.es} alt={result.abbreviated_product_name} style={{ width: '100%' }} />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg={10}>
                        <h2>Información Nutricional:</h2>
                        <Table id='nutritionTable' responsive="sm" striped bordered hover size="sm" className='text-center'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Por cada 100g/100ml</th>
                                    <th>Por porción de producto({result.serving_size})</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Energía(kJ)</td>
                                    <td>{result.nutriments['energy-kj_100g']}</td>
                                    <td>{result.nutriments['energy-kj_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Energía(kcal)</td>
                                    <td>{result.nutriments['energy-kcal_100g']}</td>
                                    <td>{result.nutriments['energy-kcal_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Grasas</td>
                                    <td>{result.nutriments['fat_100g']}</td>
                                    <td>{result.nutriments['fat_serving']}</td>
                                </tr>
                                <tr>
                                    <td>de las cuales saturadas:</td>
                                    <td>{result.nutriments['saturated-fat_100g']}</td>
                                    <td>{result.nutriments['saturated-fat_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Carbohidratos</td>
                                    <td>{result.nutriments['carbohydrates_100g']}</td>
                                    <td>{result.nutriments['carbohydrates_serving']}</td>
                                </tr>
                                <tr>
                                    <td>de los cuales son azúcares:</td>
                                    <td>{result.nutriments['sugars_100g']}</td>
                                    <td>{result.nutriments['sugars_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Proteínas</td>
                                    <td>{result.nutriments['proteins_100g']}</td>
                                    <td>{result.nutriments['proteins_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Sal</td>
                                    <td>{result.nutriments['salt_100g']}</td>
                                    <td>{result.nutriments['salt_serving']}</td>
                                </tr>
                                <tr>
                                    <td>Sodium</td>
                                    <td>{result.nutriments['sodium_100g']}</td>
                                    <td>{result.nutriments['sodium_serving']}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>

    )
}

export default FoodInfo