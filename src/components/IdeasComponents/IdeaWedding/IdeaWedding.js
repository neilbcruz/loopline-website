import {
    Container,
    Image,
    Button,
    Row,
    Stack,
    Col
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import WeddingPH from '../../../assets/images/wedding_placeholder.jpg';
import Topics1 from '../../../assets/images/wedding_topics-1.png';
import Topics2 from '../../../assets/images/wedding_topics-2.png';
import Topics3 from '../../../assets/images/wedding_topics-3.png';
import Topics4 from '../../../assets/images/wedding_topics-4.png';
import Topics5 from '../../../assets/images/wedding_topics-5.png';
import Topics6 from '../../../assets/images/wedding_topics-6.png';

export default function IdeaWedding() {
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
            <Container id='top' className='text-center my-3 p-0 hero-container' fluid>
                <Image
                    src={WeddingPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1 className='text-black'>PLANNING YOUR<br></br> WEDDING & HONEYMOON</h1>
                    <p className='text-black'>TRAVEL AGENTS - <br></br>DESTINATIONS WEDDINGS AND HONEYMOONS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>BOOKING PERIOD: 2020/01/01 - 2023/12/31</p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>TRAVEL PERIOD: TODAY - 12/31/2023</p>
                        <div className='vr' />
                        <p className='m-0' >VACATION CODE: HMDW</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink
                            to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p96?short&'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={Topics1}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink 
                        to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p68?short&' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={Topics2}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink
                            to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p44?short&'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={Topics3}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink 
                        to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p78?short&' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={Topics4}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink
                            to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p90?short&'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={Topics5}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <NavLink 
                        to='https://viewer.joomag.com/destination-bliss-volume-3/0350537001510069653/p50?short&' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={Topics6}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover border border-4 border-dark'
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