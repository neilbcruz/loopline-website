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

import CoverWestjetUpgrade from '../../../assets/images/vacation_images/cover_westjet-upgrade.jpg';
import WestjetLogo from '../../../assets/logo/WestjetLogo.png';

import SecretsMaroma from '../../../assets/images/vacation_images/westjet_secretsmaroma.jpg';
import DreamsLosCabos from '../../../assets/images/vacation_images/westjet_dreamsloscabos.jpg';


export default function VacationWestjetUpgrade() {
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
                <Image src={CoverWestjetUpgrade} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>UPGRADE YOUR VACATION INCLUSIONS</h1>
                    <p>TRAVEL AGENTS - VACATION PACKAGE / TOUR - WESTJET VACATIONS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/09/26 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2734</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Our travel agency can make your vacation truly remarkable with these great offers. Whether you’re looking for an all-inclusive vacation or a quick three-to-five-day getaway, WestJet Vacations provides the flexibility you need to love where you’re going. Choose from a variety of affordable, bespoke vacations to more than 60 destinations across the Caribbean, Central America, Mexico and the United States. Best of all, your vacation comes with all the services of our travel agency, which will be here to help you plan all the details from airfare to transfers, insurance and more.
                </p>
                <p>
                    Choose from over 800 carefully curated properties, like the Inclusive Collection, part of Hyatt Hotels & Resorts. These all-inclusive resorts offer everything you need for a truly unforgettable experience, from stunning beachfront locations to world-class dining and top-notch amenities. Book a minimum 5-night package to select Zoëtry Wellness & Spa Resorts, Secrets, Breathless, Dreams, Now or Sunscape Resorts & Spas and upgrade to the Indulgence Package for just $79 per person with this great offer.
                </p>
                <p className='fw-bold'>
                    Only available to WestJet Vacations guests, the Indulgence Package includes:
                </p>
                <ul>
                    <li>Advanced seat selection¹</li>
                    <li>Guaranteed access to room or suite by 3 p.m. on arrival day²</li>
                    <li>One local bottle of spirits in-room upon arrival</li>
                    <li>Special turndown amenity first night</li>
                    <li>Daily access to marine water circuits (Jacuzzi, sauna, steam room) where spa facilities are available³</li>
                    <li>Late checkout²</li>
                    <li>10% discount per guest on a future WestJet roundtrip flight⁴</li>
                    <li>Unlimited-Luxury® for couples and couples with children</li>
                </ul>
                <p className='fw-bold'>
                    Plus receive two discounted excursions during your stay, such as⁵:
                </p>
                <ul>
                    <li>Cancun: Chichen Itza and Snorkelling Adventure</li>
                    <li>Los Cabos: The Magic of Todo Santos</li>
                </ul>
            </Container>

            <Container>
                <h2>FEATURED PROPERTIES:</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsMaroma}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Secrets Maroma Beach Riviera Cancun</div>
                        </div>
                        <h3>Secrets Maroma Beach Riviera Cancun</h3>
                        <p className='fw-bold'>5 Stars – Adults Only</p>
                        <p className='mb-0'>Indulgence Package available when booking a Preferred Club room type.This beautiful resort on Mexico’s eastern coast has everything to ensure a first-class vacation. The natural beauty of the region is second to none. Just 50km south of Cancun’s downtown core, the Secrets resort is home to some of the most elegant coral reefs in the world. The private white-sand beach stretches as far as the eye can see. All patrons are treated to luxurious suites, some of which have direct access to the colossal pool.</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={DreamsLosCabos}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Dreams Los Cabos Suites Golf Resort & Spa</div>
                        </div>
                        <h3>Dreams Los Cabos Suites Golf Resort & Spa</h3>
                        <p className='fw-bold'>4.5 Stars – Family-Friendly</p>
                        <p className='mb-0'>Indulgence Package available when booking a Preferred Club room type. Located on the sparkling Sea of Cortez, Dreams Los Cabos Suites Golf Resort & Spa embraces the elegance of traditional colonial Mexican design and truly reflects the beauty of Los Cabos. This Unlimited-Luxury® seaside resort offers an infinity pool, a main pool featuring a kids’ section, an adults-only pool, two swim-up bars, championship golf courses, a full-service spa, fitness center, Explorer’s Club for kids and multiple gourmet à la carte restaurants.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={WestjetLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Blackout dates may apply. Advance booking required. Non-refundable and non-transferable. Offer limited and subject to availability. Offer subject to change and expire without notice. New bookings only. Valid on group bookings. Other restrictions may apply. The Indulgence Package is $79 per person including children. This offer is only available at select Zoëtry, Secrets, Breathless, Dreams, Now or Sunscape Resorts when a Preferred Club, Exhale Club or Sun Club Room category or higher is booked. A minimum 5-night stay is required. Transfers to/from the hotel are included. Blackout dates may apply. Everyone sharing the same room must book the Indulgence Package.
                </p>
                <p>
                    1. Advance seat selection does not apply to emergency exit seats, preferred seats and Premium seats (unless booking a Premium package).
                </p>
                <p>
                    2. Based on availability.
                </p>
                <p>
                    3. Age restrictions may apply. Fees normally apply to the use of the marine water circuits.
                </p>
                <p>
                    4. Guests will receive a travel promo code and coupon code via email 21 days prior to travel date to use on westjet.com. This 10% discount is applicable per guest limited to a one-time use. Percentage discount is applied to base fare. Taxes, fees and charges are extra. No cash value. Non-refundable. Discount cannot be used towards the purchase of a WestJet Vacations package. For more information on standard restrictions contact your travel advisor today.

                </p>
                <p>
                    5. Tours and excursions subject to change without notice. Quebec licensee. Ontario travel agents are covered by TICO. Mailing address: 6085 Midfield Road, Toronto ON L5P 1A2. TICO registration number: 50018683.
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
