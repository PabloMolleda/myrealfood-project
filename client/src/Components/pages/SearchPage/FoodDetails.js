import { Container, Col, Row } from 'react-bootstrap'
import Spinner from '../../shared/Spinner'
import FoodInfo from './FoodInfo'
import closeButton from '../../Assets/letra-x.png'


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
                                    <button className='goBackBtn' onClick={() => closeModal()}>
                                        <img src={closeButton} alt='Go back button'></img>
                                    </button>
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