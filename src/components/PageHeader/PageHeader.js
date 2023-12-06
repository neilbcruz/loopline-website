import './PageHeader.scss';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import LLTIcon from '../../assets/images/LLT_full-open.jpg';

export default function PageHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Navbar key='md' expand='lg' className='d-flex bd-highlight align-items-center'>
                    <NavLink to='/'>
                        <img className='header__top-logo' src={LLTIcon} alt='Loopline Logo with plane and text of company name' />
                    </NavLink>
                    <Navbar.Toggle
                        onClick={handleShow}
                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                    />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-md'
                        placement='end'
                        scroll
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbar-expand-md'>
                                <img className='header__top-logo' src={LLTIcon} alt='Loopline Logo with plane and text of company name' />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='header__nav justify-content-end flex-grow-1 text-center'>
                                <LinkContainer to='/' onClick={handleClose}>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/about' onClick={handleClose}>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/inspiration' onClick={handleClose}>
                                    <Nav.Link>Travel<br></br>Inspiration</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/specials' onClick={handleClose}>
                                    <Nav.Link>Travel<br></br>Specials</Nav.Link>
                                </LinkContainer>
                                <Link
                                    to='https://www.igoinsured.com/Direct/ManulifeGlobal.aspx?ag=NEXILON&lang=E'
                                    target='_blank'
                                >
                                    <NavItem className='nav-link'>Travel<br></br>Insurance</NavItem>
                                </Link>
                                <LinkContainer to='/contact' onClick={handleClose}>
                                    <Nav.Link>
                                        <Button variant='success'>Contact Us</Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </Container>
        </>
    )
}