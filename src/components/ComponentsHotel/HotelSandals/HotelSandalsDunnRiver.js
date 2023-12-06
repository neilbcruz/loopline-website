import {
    Container,
    Image,
    Button,
    Row,
    Col,
    Stack
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverSandalsDunnRiver from '../../../assets/images/hotel_images/cover_sandals-dunnriver.jpg';
import SandalsLogo from '../../../assets/logo/SandalsLogo.png';

import SandalsMap from '../../../assets/images/hotel_images/sandals_dunnriver-map.jpg';
import SandalsZuka from '../../../assets/images/hotel_images/sandals_zuka.jpg';
import SandalsScuba from '../../../assets/images/hotel_images/sandals_scuba.jpg';
import SandalsButler from '../../../assets/images/hotel_images/sandals_butlerservice.jpg';

export default function HotelSandalsDunnRiver() {
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
                <Image src={CoverSandalsDunnRiver} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>SANDALS DUNN'S RIVER IS BACK</h1>
                    <p>TRAVEL AGENTS - RESORTS - SANDALS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/08/01 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2023/10/01 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2643</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    The most iconic resort in Jamaica has made its return to the Sandals family. Sandals Dunn’s River is back — open now for adults to enjoy and celebrate special occasions in the heart of Ocho Rios. This brand-new resort features 12 unique restaurant concepts, including a specialty rum bar. You’ll enjoy an authentic Jamaica experience with the island’s native flora — from majestic banyan to leafy banana trees — offering shade and beauty throughout the resort. Relax in the first SkyPool suites in Jamaica and the first open-air terrace Rondovals, each with plush furnishings and modern styles. From the resort and beyond, Sandals Dunn’s River has been reimagined to be a spectacular natural wonder.
                </p>
                <p className='text-center'>
                    <strong>SPECIAL OFFER: Save up to 55% and receive up to US$605 in instant savings when you book a stay of 4+ nights at Sandals Dunn's River Resort through our agency.</strong>
                </p>
            </Container>

            <Container className='my-3'>
                <h2 className='text-center'>
                    SEE THE NEW SANDALS DUNN’S RIVER FOR YOURSELF!
                </h2>
                <p className='text-center'>
                    <small>Click on the map or <a href='https://www.sandals.com/dunns-river/maps/' target='_blank' rel='noreferrer'>here</a> to explore this stunning resort from multiple vantage points.</small>
                </p>
                <a href='https://www.sandals.com/dunns-river/maps/' target='_blank' rel='noreferrer'>
                    <Image
                        src={SandalsMap}
                        alt='placeholder image'
                        width='100%'
                        className='all-inclusive__image my-2'
                    />
                </a>
            </Container>

            <Container>
                <h2>WHAT'S INCLUDED:</h2>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SandalsZuka}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Zuka Restaurant</div>
                        </div>
                        <h3>EAT + DRINK</h3>
                        <ul>
                            <li>Unlimited fine dining at 12 restaurants</li>
                            <li>Breakfast, lunch, dinner and anytime snacks</li>
                            <li>Unlimited premium liquors</li>
                            <li>9 bars, including a swim-up bar</li>
                            <li>Stocked bar in every room</li>
                            <li>Unlimited Robert Mondavi Twin Oaks® Wines</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SandalsScuba}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Scuba Diving</div>
                        </div>
                        <h3>PLAY</h3>
                        <ul>
                            <li>PADI-certified scuba diving and equipment</li>
                            <li>Unlimited water sports</li>
                            <li>Snorkeling and equipment</li>
                            <li>Professional instruction for water sports</li>
                            <li>Unlimited land sports</li>
                            <li>State-of-the-art fitness center</li>
                            <li>Day and night entertainment and live shows</li>
                            <li>5 impressive pools</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SandalsButler}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sandals Butler Service</div>
                        </div>
                        <h3>NO WORRIES (all included!)</h3>
                        <ul>
                            <li>All tips, taxes and gratuities</li>
                            <li>Roundtrip airport transfers</li>
                            <li>Wi-Fi in room and all common areas</li>
                            <li>Free wedding for stays of 3 nights or longer</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={SandalsLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <h6>Terms and Conditions</h6>
                <p>
                    Save up to 55% off rack rates when you book a minimum of 3+ nights at Sandals Dunn’s River. For travel now – Until further notice. Contact our agency for applicable room categories. Maximum 2 person limit for offer. Offer is based on double occupancy, minimum 3-PAID nights stay. Promotion is combinable with certain Sandals savings promotions. Other percent-off savings depend on room category and time of travel. Blackout dates may apply. Group bookings may be subject to space availability and blackout dates. Offer may be changed or withdrawn at any time. Not responsible for errors or omissions.
                </p>
                <p>
                    Sandals Dunn’s River Opening Offer: Get up to $605 Instant Credit when you Book any qualifying Sandals Dunn’s River Resort vacation of 4 nights or longer. For travel May 24, 2023 – Dec. 31, 2025. Offer: $605 Instant Credit on 7-paid nights or longer; $505 Instant Credit on 6-paid nights; $405 Instant Credit 5-paid nights; $305 Instant Credit on 4-paid nights. Offer is valid for new bookings only. $605, $505, $405 & $305 Instant Credits are in USD, applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable. Offer is combinable with other Sandals consumer saving promotions. Credit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable. Offers are combinable with Sandals Select Rewards Point promotions. Sandals Select Program Members are able to redeem up to 50% of their total booking price minus all the discounts. Offers are subject to availability throughout promotional period. Other restrictions and limitations may apply. The offer has no cash value and cannot be sold, exchanged, or transferred to another booking. This offer is not applicable to bookings with industry rates. Promotion exceptions will only be made on a case-by-case basis. Offer is subject to change or withdrawn at any time. Unique Vacations and Sandals Resorts are not responsible for errors and omissions.
                </p>
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
