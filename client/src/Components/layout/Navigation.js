import './Navigation.css'
import AuthService from '../../services/auth.service'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        const authService = new AuthService()
        authService
            .logout()
            .then(() => {

                storeUser(undefined)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <Navbar expand="lg" className="fullNavBar navbar justify-items-center">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" style={{ width: '50px' }} />
                </Navbar.Brand>
            </Navbar>

        </>
    )
}
export default Navigation