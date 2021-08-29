import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'
import AppStoreIcon from '../../Assets/ic_app_store.png'
import GooglePlayIcon from '../../Assets/ic_google_play.png'
import AppPlus from '../../Assets/bg_app_plus.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <main id='mainContent'>
                <Container>
                    <Row className='justify-content-around align-items-center'>
                        <Col md={5}>
                            <h1>La app para mejorar tu estilo de vida</h1>
                            <p>¡Bienvenidx a la revolución MyRealFood!</p>
                            <a href='https://apps.apple.com/es/app/myrealfood/id1458031749'>
                                <img src={AppStoreIcon} alt='Icono App Store' className='storeIcon'/>
                            </a>
                            <a href='https://play.google.com/store/apps/details?id=es.myrealfood.myrealfood'>
                                <img src={GooglePlayIcon} alt='Icono App Store' className='storeIcon'/>
                            </a>
                        </Col>
                        <Col md={3}>
                            <img src={AppPlus} alt='App Plus Demo' className='deviceIcon'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link className='btn homeButton roundBox shadow' to='/app'>Versión web</Link>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Home