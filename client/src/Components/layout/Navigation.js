import './Navigation.css'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navigation = () => {

    return (

        <>
            <Navbar expand="sm" className="justify-items-around">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" style={{ width: '200px' }} />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/app">App</Navbar.Brand>
                
            </Navbar>

        </>
    )
}
export default Navigation