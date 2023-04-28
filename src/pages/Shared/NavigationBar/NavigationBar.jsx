import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
            // navigate('/login');
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">The Drogan News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={'/category/0'}>Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#careers">Careers</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '35px' }} />}
                            {user ?
                                <Button onClick={handleLogOut} variant="dark">LogOut</Button> :
                                <Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;