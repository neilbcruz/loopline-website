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
import { HashLink } from 'react-router-hash-link';

import CoverAllInclusive from '../../../assets/images/cover_allinclusive.jpg';
import CoverAllInclusiveResort from '../../../assets/images/cover_allinclusive-resort.jpg';
import CoverAllInclusiveWhy from '../../../assets/images/cover_allinclusive-why.jpg';
import CoverAllInclusiveDestinations from '../../../assets/images/cover_allinclusive-destinations.jpg';

import AllInclusiveTravelKids from '../../../assets/images/allinclusive_travelwithkids.jpg';
import AllInclusiveBestFamilyVacay from '../../../assets/images/allinclusive_bestfamilyvacation.jpg';
import AllInclusiveAdultsOnly from '../../../assets/images/allinclusive_adultsonlyvacay.jpg';


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
                    src={CoverAllInclusive}
                    className='custom-fluid-hero'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>ALL-INCLUSIVE VACATIONS</h1>
                    <p>TRAVEL AGENTS - ALL-INCLUSIVE VACATION PACKAGES</p>
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
                <p>There are so many options to choose from when traveling today and all-inclusive resorts have become a popular choice. We have compiled some of advice from our experts in regards to which resorts we recommend, what amenities all-inclusive resorts offer and the beautiful destinations you can find them. We also have included some information on traveling with kids, as well as options for couples looking to getaway and reconnect. Read on to discover why an all-inclusive resort vacation can be the best vacation choice for you!</p>
            </Container>

            <Container className='my-3'>
                <Row className='text-center'>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={CoverAllInclusiveResort}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>ALL-INCLUSIVE RESORTS</h3>
                        <p>From family friendly to luxury adults-only properties, there is an all-inclusive resort that is right for you.</p>
                        <HashLink to='resorts#top' >
                            <Button variant='outline-danger'>
                                LEARN MORE
                            </Button>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={CoverAllInclusiveWhy}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>WHY ALL-INCLUSIVE?</h3>
                        <p>All-inclusive resorts offer a variety of amenities that can satisfy every traveler. From swim-up suites to 5-star dining, they have all your needs covered for the perfect vacation.</p>
                        <HashLink to='why#top' >
                            <Button variant='outline-danger'>
                                LEARN MORE
                            </Button>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={CoverAllInclusiveDestinations}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>ALL-INCLUSIVE DESTINATIONS</h3>
                        <p>All-inclusive resorts are located in some of the most beautiful destinations in the world. You can immerse yourself in the local culture or spend the day relaxing on a beautiful beach.</p>
                        <HashLink to='destinations#top' >
                            <Button variant='outline-danger'>
                                LEARN MORE
                            </Button>
                        </HashLink>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
                        <Image
                            src={AllInclusiveTravelKids}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>TRAVELING WITH KIDS</h2>
                        <p>The best family vacations start with a well-devised plan. From our experience, we know there’s a lot to consider when planning a vacation with kids. Should you choose a cruise or an all-inclusive resort? Which destinations are both entertaining and educational? What’s the best way to prevent a travel meltdown? We have tips for all these topics and more.  Our agency can help you narrow down your planning process so you can focus on the more important items, like which waterslide to tackle first.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <Image
                            src={AllInclusiveBestFamilyVacay}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <h2>BEST FAMILY VACATION DESTINATIONS</h2>
                        <p>Now more than ever is a great time to take the opportunity to unwind and disconnect from their hectic schedules and get away from it all. Everyone’s family gets caught up in it. The daily grind of work, school, activities and too much screen time. A vacation allows you time to just be together and create new memories, lifetime memories. There is nothing better than creating those moments on a vacation that your family will carry with them for a lifetime. Being able to remember and re-connect on those experiences even when you are back home, will build a stronger future family bond.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
                        <Image
                            src={AllInclusiveAdultsOnly}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>ADULTS-ONLY IS THE ONLY WAY</h2>
                        <p>Sometimes even adults like to live it up, in the form of a weekend getaway with friends or a tropical escape for one. Or an all-adult experience that includes vibrant nightlife, trendy restaurants, music, resort amenities and sophisticated guests, it’ll give Vegas a run for its money.</p>
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