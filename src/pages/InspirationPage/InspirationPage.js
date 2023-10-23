import './InspirationPage.scss';

import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Placeholder from '../../assets/images/image_placeholder.jpg';

export default function InspirationPage() {
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
            <Container className='text-center mb-5'>
                <h1>Travel Inspiration</h1>
            </Container>
            <Container className='text-center'>
                <h2>DESTINATION INSPIRATION</h2>
                <p>Find your dream vacation. You can share your trip with your friends or contact an agent to make it happen!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            <Container className='text-center'>
                <h2>VACATION IDEAS</h2>
                <p>The best deals happening now. Act fast, they won't last long!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='pe-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={6} className='ps-0'>
                        <NavLink to='/inspiration'>
                            <Image
                                src={Placeholder}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                        </NavLink>
                    </Col>
                </Row>
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