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
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import AllInclusivePH from '../../../assets/images/allinclusive_placeholder.jpg';

import AllInclusive1Dreams from '../../../assets/logo/all-inclusive_logos/allinclusive_1_dreams.jpg';
import AllInclusive2Ibero from '../../../assets/logo/all-inclusive_logos/allinclusive_2_ibero.jpg';
import AllInclusive3Majestic from '../../../assets/logo/all-inclusive_logos/allinclusive_3_majestic.jpg';
import AllInclusive4Palace from '../../../assets/logo/all-inclusive_logos/allinclusive_4_palace.jpg';
import AllInclusive5Sandals from '../../../assets/logo/all-inclusive_logos/allinclusive_5_sandals.jpg';
import AllInclusive6Beaches from '../../../assets/logo/all-inclusive_logos/allinclusive_6_beaches.jpg';
import AllInclusive7Sandos from '../../../assets/logo/all-inclusive_logos/allinclusive_7_sandos.jpg';
import AllInclusive8Riu from '../../../assets/logo/all-inclusive_logos/allinclusive_8_riu.jpg';

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
                    <h1>ALL-INCLUSIVE RESORTS</h1>
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
                <h1 className='mb-0 text-center'><strong>FIND ENDLESS OPTIONS AT ALL-INCLUSIVE RESORTS</strong></h1>
                <hr className='mt-0 border-2'></hr>
                <p>There are so many options to choose from when traveling today and all-inclusive resorts have become a popular choice. We have compiled some of advice from our experts in regards to which resorts we recommend, what amenities all-inclusive resorts offer and the beautiful destinations you can find them. We also have included some information on traveling with kids, as well as options for couples looking to getaway and reconnect. Read on to discover why an all-inclusive resort vacation can be the best vacation choice for you!</p>
            </Container>

            <Container className='text-center mb-5'>
                <Row className='mb-3'>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink
                            to='https://www.hyattinclusivecollection.com/en/resorts-hotels/dreams/'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={AllInclusive1Dreams}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink 
                        to='https://viewer.joomag.com/all-inclusive-digital-experience-guide-2022/0944792001645736353/p5?short&' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={AllInclusive2Ibero}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink
                            to='https://www.iberostar.com/en-ca/'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={AllInclusive3Majestic}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row className='mb-3 d-flex align-items-center'>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink 
                        to='https://www.palaceresorts.com/' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={AllInclusive4Palace}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <h3>WE CAN HELP MAKE ALL-INCLUSIVE VACATIONS PERFECT</h3>
                        <p>At Travel Leaders, we have the expertise to assist in every detail of your special vacation, so you can relax and enjoy.</p>
                        <HashLink to='/about#top'>
                            <Button variant='outline-danger'>
                                BOOK NOW
                            </Button>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink 
                        to='https://www.sandals.com/' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={AllInclusive5Sandals}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink 
                        to='https://www.beaches.com/' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={AllInclusive6Beaches}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink
                            to='https://www.sandos.com/'
                            target='_blank'
                            className='image-container'>
                            <Image
                                src={AllInclusive7Sandos}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <NavLink 
                        to='https://www.riu.com/en/home.jsp' 
                        target='_blank'
                        className='image-container'>
                            <Image
                                src={AllInclusive8Riu}
                                alt='placeholder image'
                                width='100%'
                                className='image_allinclusive border border-4 border-dark'
                            />
                        </NavLink>
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