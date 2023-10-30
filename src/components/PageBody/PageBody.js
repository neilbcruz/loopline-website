import {
    Container,
    Button,
    Row,
    Col,
    Image,
    Card,
    Carousel
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { ArrowUp } from 'react-bootstrap-icons';

import { useEffect, useState } from 'react';

import Expertise from '../../assets/icons/operator.png';
import PService from '../../assets/icons/handshake.png';
import Value from '../../assets/icons/handmoney.png';
import Rowena from '../../assets/images/rowena.jpeg';

import DropdownInspiration from '../DropdownInspiration/DropdownInspiration';
import DropdownSpecial from '../DropdownSpecial/DropdownSpecial';

export default function PageBody() {
    // Scroll-to-Top functions //
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Container className='text-center my-5'>
                <h1>YOUR EXTRAORDINARY VACATION BEGINS HERE</h1>
                <p>No matter where in the world you want to go, we can help get you there. Our experienced agents will take the time to answer your questions and listen to your ideas, before making expert recommendations that fit your budget. We believe extraordinary vacations begin with careful planning, that's why we are devoted to ensuring our clients always have the best possible experience—both before they leave and while they're away.</p>
                <NavLink to='/contact'>
                    <Button variant='success'>Contact Us</Button>
                </NavLink>
            </Container>

            <Container className='text-center bg-secondary bg-opacity-25 py-3 mb-5' fluid>
                <Container>
                    <Row className='mb-2'>
                        <h1>WHAT MAKES US SPECIAL?</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Image
                                src={Expertise}
                                alt='operator with headset'
                                width='40%'
                                fluid
                            />
                            <h2>EXPERTISE</h2>
                            <p>We have the knowledge and experience to make your vacation dreams a reality.</p>
                        </Col>
                        <Col>
                            <Image
                                src={PService}
                                alt='hand only shake'
                                width='40%'
                                fluid
                            />
                            <h2>PERSONAL SERVICE</h2>
                            <p>We go above and beyond to ensure your vacation exceeds all your expectations.</p>
                        </Col>
                        <Col>
                            <Image
                                src={Value}
                                alt='hand and money on top of palm'
                                width='40%'
                                fluid
                            />
                            <h2>VALUE</h2>
                            <p>We save you time and money by cutting through the clutter to find the best value.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='text-center mb-5'>
                <h1>Meet Rowena</h1>
                <Card style={{ color: 'black' }}>
                    <Container>
                        <Image
                            src={Rowena}
                            alt='Rowena image'
                            width='40%'
                            className='mt-3'
                        />
                    </Container>
                    <Card.Body>
                        <Card.Title>
                            Rowena Cruz
                        </Card.Title>
                        <Card.Text>
                            CERTIFIED TRAVEL COUNSELLOR
                        </Card.Text>
                        <HashLink to='/about#about'>
                            <Button variant='outline-success'>Learn more</Button>
                        </HashLink>
                    </Card.Body>
                </Card>
            </Container>

            <Container className='text-center bg-secondary bg-opacity-25 py-3 mb-5' fluid>
                <h1>TRAVEL INSPIRATIONS</h1>
                <p>To provide you with the best possible service, our agents specialize in the following areas.</p>
                <Carousel className='mb-3'>
                    <Carousel.Item itemId={1}>
                        <Image
                            src={PService}
                            width='40%'
                            text='First slide'
                            style={{ maxHeigh: '100vh' }}
                        // className='d-block w-100'
                        />
                        <Carousel.Caption className='text-success'>
                            <h5>First slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item itemId={1}>
                        <Image
                            src={Expertise}
                            width='40%'
                            text='Second slide'
                        // style={{maxHeigh:'100vh'}}
                        // className='d-block w-100'
                        />
                        <Carousel.Caption className='text-success'>
                            <h5>Second slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <DropdownInspiration />
                <NavLink to='/inspiration' >
                    <Button className='mt-3' variant='outline-success'>
                        SEE ALL TRAVEL INSPIRATIONS
                    </Button>
                </NavLink>
            </Container>

            <Container className='text-center bg-secondary bg-opacity-25 py-3 mb-5' fluid>
                <h1>TRAVEL SPECIALS</h1>
                <p>The best deals happening now. Act fast, they won't last long!</p>
                <Carousel className='mb-3'>
                    <Carousel.Item itemId={1}>
                        <Image
                            src={PService}
                            width='40%'
                            text='First slide'
                            style={{ maxHeigh: '100vh' }}
                        // className='d-block w-100'
                        />
                        <Carousel.Caption className='text-success'>
                            <h5>First slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item itemId={1}>
                        <Image
                            src={Expertise}
                            width='40%'
                            text='Second slide'
                        // style={{maxHeigh:'100vh'}}
                        // className='d-block w-100'
                        />
                        <Carousel.Caption className='text-success'>
                            <h5>Second slide label</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <DropdownSpecial />
                <NavLink to='/specials'>
                    <Button className='mt-3' variant='outline-success'>
                        SEE ALL TRAVEL SPECIALS
                    </Button>
                </NavLink>
            </Container>

            <Container className="scroll-to-top">
                {showButton && (
                    <Button variant='light' onClick={scrollToTop} size='sm' className='position-fixed bottom-0 end-0 opacity-75'>
                        <ArrowUp />
                    </Button>
                )}
            </Container>
        </>
    )
}