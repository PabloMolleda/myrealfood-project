import { Container, Col, Row, Button} from 'react-bootstrap'
import Spinner from '../../shared/Spinner'
import FoodInfo from './FoodInfo'


const FoodDetails = ({ props, closeModal }) => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {
                            !props
                                ?
                                <Spinner />
                                :
                                <>
                                    <Button onClick={() => closeModal()}>Volver</Button>
                                    <FoodInfo result={props} />
                                </>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default FoodDetails