import {
    Container,
    Image,
    Button,
    Row,
    Col,
    Stack,
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverFunjetHoneymoons from '../../../assets/images/vacation_images/cover_funjet-honeymoons.jpg';
import FunjetLogo from '../../../assets/logo/FunjetLogo.png';

import FunjetHoneymoons1 from '../../../assets/images/vacation_images/funjet_honeymoons1.jpg';
import FunjetHoneymoons2 from '../../../assets/images/vacation_images/funjet_honeymoons2.jpg';
import FunjetHoneymoons3 from '../../../assets/images/vacation_images/funjet_honeymoons3.jpg';

export default function VacationFunjetHoneymoons() {
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
                <Image src={CoverFunjetHoneymoons} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>UNFORGETTABLE HONEYMOONS</h1>
                    <p>TRAVEL AGENTS, HONEYMOON, FUNJET</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2021/01/01 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: HM - FUNJET</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <h2>AN UNFORGETTABLE HONEYMOON EXPERIENCE FROM BEGINNING TO END</h2>
                <p>
                Funjet Vacations can take you anywhere — luxurious all-inclusive resorts in Mexico and the Caribbean, Hawaiian hotels with stunning surroundings, popular U.S. destinations and charming European locations. They offer nonstop flights from several major cities to the most popular destinations in Mexico and the Caribbean. 
                </p>
                <h2>WHY FUNJET VACATIONS HONEYMOONS?</h2>
                <p>
                Funjet Vacations has been around since 1974, so they know more than a little about what makes a great honeymoon. Want to know the secret? The best honeymoons are more than just the combination of a flight and hotel — they’re about who you’re with and what you experience together, whether your definition of “fun” means swimming with sharks or spa treatments every day.
                </p>
                <p className='fw-bold'>
                Plus they offer these great features:
                </p>
                <ul>
                    <li>No brand cancel or change fees on land-only FIT bookings</li>
                    <li>Travel Protection Plus — cancel for ANY reason</li>
                    <li>Amazing honeymoon exclusives: free bottles of wine, mini desserts, reduced rates, candlelight dinners and so much more!</li>
                </ul>
            </Container>

            <Container className='my-3'>
                <Row className='text-center'>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={FunjetHoneymoons1}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={FunjetHoneymoons2}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={FunjetHoneymoons3}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={FunjetLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='scroll-to-top'>
                {showButton && (
                    <Button
                        variant='light'
                        onClick={scrollToTop}
                        size='sm'
                        className='position-fixed bottom-0 end-0 opacity-75'
                    >
                        <ArrowUp />
                    </Button>
                )}
            </Container>
        </>
    );
}
