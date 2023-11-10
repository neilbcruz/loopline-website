import {
    Container,
    Image,
    Button,
    Stack,
    Row,
    Col
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import AllInclusivePH from '../../../assets/images/allinclusive_placeholder.jpg';

export default function IdeaAllInclusive() {
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
                    src={AllInclusivePH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>WHY ALL-INCLUSIVE?</h1>
                    <p>ALL-INCLUSIVE VACATION PACKAGE TRAVEL AGENTS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>BOOKING PERIOD: 2021/01/01 - 2023/12/31</p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>TRAVEL PERIOD: TODAY - 12/31/2024</p>
                        <div className='vr' />
                        <p className='m-0' >VACATION CODE: ALL-INCLUSIVE</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <h1 className='mb-0 text-center'><strong>WHY ALL-INCLUSIVE VACATIONS?</strong></h1>
                <hr className='mt-0 border-2'></hr>
                <p>Catering to couples and families alike, all-inclusive resorts provide almost everything you could possibly desire included in the price: luxurious accommodations, a wide range of cuisines and top-shelf drinks, onsite activities, nightly entertainment and instant access to the rejuvenating ocean waters. We’ve visited resorts across the Caribbean and Mexico to provide personal recommendations that ensure you find the right all-inclusive getaway to fit your lifestyle, your budget and your dreams.</p>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>One up-front price</h2>
                        <p>At all-inclusive resorts there are no hidden fees; everything really is included. Your vacation includes all your food, drinks, entertainment, fitness classes, kids clubs, non-motorized water sports and more! All this along with taxes and gratuities are included for one price.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <h2>Stunning settings</h2>
                        <p>Whether you desire the nightlife in Cancun's hotel zone, long walks along the beautiful beaches in Punta Cana, or Costa Rica with its lush rainforests, most all-inclusive resorts will provide you with the backdrop for all those perfect photo opps.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Endless dining options</h2>
                        <p>All-inclusive resorts today can accommodate even the pickiest of eaters. From foodies to the youngest of children, all-inclusive resorts have something for everyone. Be it a morning wake-up with your favorite latte', a freshly caught fish grilled poolside, and a 5-star dinner perfectly paired with a specially selected bottle of wine, you have the making of an unforgettable vacation.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <h2>Fun</h2>
                        <p>You'll never run out of things to do at an all-inclusive resort. From epic water slides to lazy rivers, to bumper cars and outdoor movies on the beach, all-inclusive resorts are able to cater to each individual's idea of fun! Feel free to hang with your friends and family and experience everything your resort offers together, or have each person find their perfect activity and then re-group and share later.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Amenities</h2>
                        <p>All-inclusive resorts offer amenities that have you covered both in your room as well as around the resort. You will find your favorite drinks and snacks refreshed daily in your room, to signature bath products and robes to refresh you after a day at the pool. All-inclusive resorts also offer kids clubs for all ages so the adults can get in a round of golf or some quiet time at the spa.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <Image
                            src={AllInclusivePH}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <h2>Choices</h2>
                        <p>All-inclusive properties are designed to cater to all travelers depending upon who is traveling. If you are culturally minded and want to be immersed in a destination's history, to those looking for a more active-adventure trip, there are resorts that can accommodate many of your hobbies and interests, as well as your wallet. From private suites with a butler to a family-friendly resort with a water park, the perfect resort is awaiting your arrival.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CHECK IN, PUT YOUR WALLET AWAY, AND ENJOY YOUR STAY IN PARADISE! YOUR ALL-INCLUSIVE ESCAPE AWAITS AND WE’RE HERE TO HELP.</h2>
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