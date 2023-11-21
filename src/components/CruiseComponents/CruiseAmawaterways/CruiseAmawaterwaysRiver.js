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

import AmaWaterwaysPH from '../../../assets/images/amawayerways_placeholder.jpg';
import AmaWaterwaysLogo from '../../../assets/logo/AmaWaterwaysLogo.png';

import AmaKristinaPH from '../../../assets/images/cruise_images/amakristina_placeholder.jpg';
import MarketViennaPH from '../../../assets/images/cruise_images/marketvienna_placeholder.jpg';
import AmsterdamPH from '../../../assets/images/cruise_images/amsterdam_placeholder.jpg';
import HanoiPH from '../../../assets/images/cruise_images/hanoi_placeholder.jpg';
import RudesheimPH from '../../../assets/images/cruise_images/rudesheim_placeholder.jpg';
import AmalyraPH from '../../../assets/images/cruise_images/amalyra_placeholder.jpg';
import BudapestPH from '../../../assets/images/cruise_images/budapest_placeholder.jpg';

export default function CruiseAmawaterwaysRiver() {
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
                <Image src={AmaWaterwaysPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>HEART OF THE RIVER</h1>
                    <p>TRAVEL AGENTS -<br></br>RIVER CRUISES, AMAWATERWAYS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/10/03 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: PRESENT - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2642</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Step aboard a world of unparalleled experiences on an AmaWaterways journey through Europe and Asia. Walk along cobblestone streets filled with delights. Pedal through historic town squares. Tour famous vineyards. Hike up to hilltop monasteries and castles. Discover the essence of the countries you explore. Experience these wonders and more while sailing on intimate, contemporary ships with AmaWaterways, the Heart of the River™.
                </p>
                <div>
                    <iframe
                        width='100%'
                        height='400'
                        src='https://www.youtube.com/embed/j8rrDUjMrWw'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='my-3'
                    ></iframe>
                </div>
                <h5>Innovative Ships</h5>
                <p>The stunning ships of AmaWaterways create the ultimate guest experience. They are the “Highest-Rated River Cruise Ships,” according to popular guidebooks, after outranking the competition in the categories of accommodations, facilities, cuisine, hospitality and more.</p>
                <h5>Book now to take advantage of this limited-time offer:</h5>
                <ul>
                    <li>Save 20% on select 2023 & 2024 Europe and Mekong River cruises</li>
                    <li>Lock in trans-Atlantic flights at fixed rates on select 2023 & 2024 Europe sailings: Economy Air at $1,099; Premium Economy Air at $2,999; Business Class Air at $4,999</li>
                    <li>Exclusive from our agency: Receive US$300 in onboard credit per stateroom on select sailings</li>
                </ul>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AmaKristinaPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>AmaKristina Lobby at Christmas</div>
                        </div>
                        <h3>7-Night Colors of Provence Christmas</h3>
                        <p>
                            <em>AmaKristina</em>
                            <br></br>
                            November - December 2023 and 2024
                        </p>
                        <p>Arles, France (overnight) • Avignon, France • Viviers, France • Tournon, France • Vienne, France • Lyon, France (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,970 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MarketViennaPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Christmas Market, Vienna, Austria</div>
                        </div>
                        <h3>5-Night Majestic Capitals of the Danube: A Taste of Christmas Markets</h3>
                        <p>
                            <em>AmaLea, AmaMagna, AmaViola or AmaSonata</em>
                            <br></br>
                            December 2023 and 2024
                        </p>
                        <p>Budapest, Hungary (overnight) • Bratislava, Slovakia (overnight) • Vienna, Austria (overnight)</p>
                        <p className='fw-bold'>Riverview from $2,595 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AmsterdamPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Amsterdam, The Netherlands</div>
                        </div>
                        <h3>7-Night Rhine Castles & Swiss Alps</h3>
                        <p>
                            <em>AmaSerena or AmaMora</em>
                            <br></br>
                            May - December 2024
                        </p>
                        <p>Amsterdam, the Netherlands (overnight) • Cologne, Germany • Rhine Gorge – Rudesheim, Germany • Ludwigshafen, Germany • Strasbourg, France • Basel, Switzerland (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,842 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={HanoiPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Hanoi, Vietnam</div>
                        </div>
                        <h3>7-Night Charms of the Mekong</h3>
                        <p>
                            <em>AmaDara</em>
                            <br></br>
                            January - December 2024
                        </p>
                        <p>Ho Chi Minh City – My Tho, Vietnam • Cai Be – Sa Dec, Vietnam • Tan Chau, Vietnam – Border Crossing, Cambodia • Phnom Penh, Cambodia • Oudong – Kampong Tralach – Phnom Penh, Cambodia • Oknhatey – Angkor Ban, Cambodia • Kampong Cham – Siem Reap, Cambodia</p>
                        <p className='fw-bold'>Riverview from $2,369 per personon</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RudesheimPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Rüdesheim, Germany</div>
                        </div>
                        <h3>7-Night Treasures of the Main & Rhine</h3>
                        <p>
                            <em>AmaCerto or AmaPrima</em>
                            <br></br>
                            May - November 2024
                        </p>
                        <p>Nuremberg, Germany • Bamberg, Germany • Würzburg, Germany • Wertheim, Germany • Rüdesheim – Lahnstein, Germany • Cologne, Germany • Amsterdam, the Netherlands (overnight)</p>
                        <p className='fw-bold'>Riverview from $4,147 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AmalyraPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>AmaLyra, Rouen, France</div>
                        </div>
                        <h3>7-Night Paris & Normandy</h3>
                        <p>
                            <em>AmaDante or AmaLyra</em>
                            <br></br>
                            March - December 2024
                        </p>
                        <p>Paris, France • Les Andelys, France • Le Havre, France • Caudebec-En-Caux, France – Normandy Beaches • Rouen, France • Vernon-La Roche-Guyon, France • Conflans, France • Paris, France</p>
                        <p className='fw-bold'>Riverview from $3,944 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BudapestPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Budapest, Hungary</div>
                        </div>
                        <h3>7-Night Gems of Southeast Europe</h3>
                        <p>
                            <em>AmaBella, AmaMagna or AmaVerde</em>
                            <br></br>
                            March - December 2024
                        </p>
                        <p>Budapest, Hungary • Mohács – Pécs, Hungary • Vukovar, Croatia – Novi Sad, Serbia • Belgrade, Serbia • scenic cruising through the Iron Gates • Vidin, Bulgaria • Rousse, Bulgaria – Giurgiu, Romania (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,334 per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={AmaWaterwaysLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    All rates are per person in CAD for cruise and port charges, based on double occupancy in a base category stateroom.
                </p>
                <p>
                    <strong>20% Off | Terms & Conditions:</strong> Pricing referenced is inclusive of this offer. 20% cruise savings is applicable select 2023 and 2024 Europe and Mekong sailings reserved from today – December 31, 2023. 20% cruise savings is also valid for new 2024 group contracts only, for new group bookings reserved today – December 31, 2023. Savings applies to total cruise fare, based on category purchased. Offer is applicable to all categories for double occupancy. Single Supplement of 20% is available for solo travelers only; excludes A+, AA+, SA, SB and suites. Port charges, upgrades, transfers, land packages, gratuities and airfare are additional. Offers are combinable with Loyalty Benefits, Future Cruise Benefit Program, and AirPlus promotions (if applicable on selected date). Offer is limited to availability, capacity controlled and subject to change without notice. AmaWaterways reserves the right to correct any errors or omissions at any time. Other restrictions apply. CST#2065452-20.
                </p>
                <p>
                    <strong>AirPlus Offer | Terms & Conditions:</strong> AirPlus rates are round-trip, trans-Atlantic airfare departing from all gateways (based on availability). AirPlus is applicable to new reservations made between today – December 31, 2023. Economy Class Air is offered at $1,099 per person. Premium Economy is offered at $2,999 per person and Business Class Air will be offered at $4,999 per person; if purchased, are guaranteed for long-haul flights, but not U.S. Domestic or intra-Europe flights. For this promotion, deposit for Economy and Premium Economy air is $950 per person, of which $750 is immediately non-refundable, with the full $950 per person becoming non-refundable at 120 days prior to travel commencement date; and deposit for Business Class Air is $1,250 per person, of which $1,000 is non-refundable immediately, with the full $1,250 becoming non-refundable at 120 days prior to travel commencement date. Full passport information will be required at time of booking. Offer includes base economy ticket price, fuel surcharges, taxes and roundtrip airport transfers between the airport and ship and/or hotel for services purchased through AmaWaterways for published itineraries only. Certain long-distance transfers not included. Once your airline tickets have been issued, any changes will be subject to penalty and any additional fare collection if not cancelled within 24 hours of ticketing. Should the name on your airline reservation not match your passport exactly, your airline reservation will have to be cancelled and full penalties will be assessed. Your reservation will have to be recreated subject to market pricing at the time of the new reservation. Custom itineraries, itinerary requests and schedule deviations are not accepted on this promotion. AmaWaterways air schedule for promotional air will be provided no later than 30 days before the travel start date. No recourse available for those who wish to change or cancel their selected flight schedules and air schedule is at the discretion of AmaWaterways under this special air promotion. Failure to notify AmaWaterways within the allotted time frame indicated on the receipt of your air schedule will result in tickets being issued and aforementioned fees becoming applicable in the event of cancellation. Additional luggage, seat selection, and other ancillary charges imposed by the carrier will apply. Stateroom upgrades, optional land packages, visas, and gratuities are additional. Offer is only applicable to select 2023 and 2024 sailings. Offer is combinable with “Dollars Off” Savings, 20% Cruise Savings, Referral Savings, Combination Cruise Savings, Loyalty Benefits, Future Cruise Benefit Program and Military Service Member Savings. Offer is limited to availability, capacity controlled and subject to modifications, changes, reductions or termination without notice. AmaWaterways reserves the right to correct any errors or omissions at any time.<br></br>
                    Other restrictions apply.CST#2065452-20.
                </p>
                <p>
                    <strong>Exclusive Amenities | Terms & Conditions:</strong> US$300 onboard credit per stateroom (US$150 per person), based on double occupancy (solo travelers receive half. Sailing dates and exclusive amenities are current at time of printing and are subject to change without notice. Amenities apply to 1st and 2nd passenger only. Offers are subject to availability at the time of booking, and may be altered or withdrawn at any time without notice. Pricing and amenities will be confirmed at the time of booking. Cancellations, refunds, and penalties are imposed by the cruise line. Amenities are specific to this cruise line and must be booked by one of our travel advisors. If space has been recalled or cancelled by the cruise line amenities cannot be applied. Contact our agency for additional information.
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
