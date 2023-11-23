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

import CoverCaribbean from '../../../assets/images/cruise_images/cover_caribbean.jpg';
import RoyalCaribbeanLogo from '../../../assets/logo/RoyalCarribeanLogo.png';

import PerfectDay1 from '../../../assets/images/cruise_images/royalcaribbean_perfectday1.jpg';
import PerfectDay2 from '../../../assets/images/cruise_images/royalcaribbean_perfectday2.jpg';
import IconOfTheSeas from '../../../assets/images/cruise_images/royalcaribbean_iconseas.jpg';
import Rome from '../../../assets/images/cruise_images/royalcaribbean_rome.jpg';

export default function CruiseCaribbeanSale() {
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
                <Image src={CoverCaribbean} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>BIGGEST SALE OF THE YEAR</h1>
                    <p>TRAVEL AGENTS - CRUISE, CRUISING, ROYAL CARIBBEAN INTERNATIONAL, RCI</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/24 - 2023/12/04
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: DEPARTING ON OR AFTER 12/23/23
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2686</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Royal Caribbean®’s biggest sale of the year is here! Black Friday deals are now unlocked, with bold offers of <strong>up to US$750 off and 30% off</strong> for your whole travel crew. <strong>Plus, kids sail free on select cruises!</strong> From Caribbean getaways to longer journeys into Alaska, the Mediterranean, Asia and beyond, this is your chance to lock in your next cruise adventure on the most innovative ships at sea.
                </p>
                <p>
                    Wherever you venture to with Royal Caribbean, the moments you have on board will rival those on shore. Spend your days catching waves on the FlowRider® surf simulator, speeding down the boldest slides at sea, racing around in bumper cars, solving puzzle rooms and dining on inspiring cuisine that takes you from Tuscany to Japan to Wonderland and everywhere in between. You’ll find more exclusive experiences on their newest ship, Icon of the Seas℠, where you can have a blast at Category 6, the largest waterpark at sea, and raise a glass at Swim & Tonic, the first swim-up bar at sea.
                </p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={PerfectDay1}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Perfect Day at CocoCay</div>
                        </div>
                        <h3>3- or 4-Night Short Caribbean</h3>
                        <p>
                            <em>Allure®/Utopia of the Seas℠</em>
                            <br></br>
                            December 2023 - April 2025
                        </p>
                        <p>Departing from Port Canaveral, Florida (Orlando area)</p>
                        <p className='fw-bold'>Interior from $640 per person</p>
                        <small>Based on the 9/23/23 Allure of the Seas sailing</small>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={PerfectDay2}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Perfect Day at CocoCay</div>
                        </div>
                        <h3>7-Night Caribbean & Perfect Day</h3>
                        <p>
                            <em>Harmony of the Seas®</em>
                            <br></br>
                            December 2023 - April 2025
                        </p>
                        <p>Departing from Galveston, Texas</p>
                        <p className='fw-bold'>Interior from $1,019 per person</p>
                        <small>Based on the 1/26/25 sailing</small>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={IconOfTheSeas}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Icon of the Seas℠</div>
                        </div>
                        <h3>7-Night Caribbean & Perfect Day</h3>
                        <p>
                            <em>Icon of the Seas℠</em>
                            <br></br>
                            January 2024 - April 2026
                        </p>
                        <p>Departing from Miami, Florida</p>
                        <p className='fw-bold'>Interior from $2,428 per person</p>
                        <small>Based on the 9/6/25 sailing</small>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Rome}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Rome, Italy</div>
                        </div>
                        <h3>7-Night Western Mediterranean Cruise</h3>
                        <p>
                            <em>Oasis of the Seas®</em>
                            <br></br>
                            May 2024 - September 2024
                        </p>
                        <p>Departing from Rome (Civitavecchia), Italy</p>
                        <p className='fw-bold'>Interior from $1,441 per person</p>
                        <small>Based on the 5/19/24 sailing</small>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={RoyalCaribbeanLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    * Price is per person, in CAD, includes cruise fare, taxes, fees and other port expenses, applies to select sailings, interior stateroom, based on double-occupancy, and reflects any promotional savings.
                </p>
                <p>
                    30% Off Every Guest applies to new bookings made between 11/1 – 12/4/23 (“Offer Period”) on sailings departing on or after 12/1/23 and provides 30% savings off the cruise fare for all guests in the stateroom. Savings will be applied to cruise fare at checkout.
                </p>
                <p>
                    Kids Sail Free applies to new bookings made between 11/1 – 12/4/23 (“Offer Period”) on sailings departing between 12/1/23 – 4/25/26 (“Offer Cruise”), providing free cruise fare for third guests and higher who are 12 years old and younger as of Offer Cruise departure date on sailings 3 nights or longer booked in the same stateroom as the first two qualifying guests in a triple or quad occupancy stateroom. Kids Sail Free excludes Thanksgiving Sailings 11/17/23 – 11/24/23; 11/22/24 – 11/29/24; 11/20/25 – 11/28/25, Holiday sailings departing 12/16/23 – 1/5/24; 12/20/24 – 1/3/25; 12/18/25 – 1/6/26, Spring break sailings departing 3/8/24 – 3/22/24; 3/7/25 – 3/28/25; 3/6/26 – 4/9/26, Holy Week/Easter sailings departing 3/22/24 – 4/4/24; 4/12/25 – 4/24/25 and Summer sailings departing 5/22/24 – 8/30/24; 5/22/25 – 8/29/25. Taxes, fees, and port expenses are additional and apply to all guests.
                </p>
                <p>
                    Black Friday Sale applies to new bookings made between 11/23 – 12/4/23 (“Offer Period”) on sailings departing on or after 12/23/23 and provides instant savings of up to $750 USD per stateroom. Savings amount varies by stateroom category booked and sailing length as follows: 5 nights or less, $75 USD savings for Interior and Ocean View, $150 USD for Balconies, and $250 USD for Suites; 6 nights or longer, $150 USD savings for Interior and Ocean View, $225 USD for Balconies, and $750 USD for Suites.  Instant savings applied as instant rebate to the price of cruise fare at checkout. Instant savings do not apply to China departures.
                </p>
                <p>
                    Nonrefundable Deposit Bookings (“NRDB”): All deposit payments for NRDB bookings made after 5/31/22 are non-refundable from the time of booking.
                </p>
                <p>
                    Offer applies to new, individual, and named group bookings confirmed at prevailing rates. Offer open to residents of US, Canada, Puerto Rico and select countries in the Caribbean. Changes to the booking may result in removal of the offer. Prices and offers are subject to availability and change without notice, capacity controlled, and may be withdrawn at any time. Contact our agency for complete terms and conditions. Royal Caribbean International reserves the right to correct any errors, inaccuracies, or omissions and to change or update fares, fees, and surcharges at any time without prior notice. ©2023 Royal Caribbean Cruises Ltd. Ships’ registry: Bahamas.
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
