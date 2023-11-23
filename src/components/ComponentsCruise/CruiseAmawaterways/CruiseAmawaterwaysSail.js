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

import CoverAmaWaterways from '../../../assets/images/cruise_images/cover_amawayerways.jpg';
import AmaWaterwaysLogo from '../../../assets/logo/AmaWaterwaysLogo.png';

import Cologne from '../../../assets/images/cruise_images/amawaterways_cologne.jpg';
import Hanoi from '../../../assets/images/cruise_images/amawaterways_hanoi.jpg';
import Amsterdam from '../../../assets/images/cruise_images/amawaterways_amsterdam.jpg';
import Porto from '../../../assets/images/cruise_images/amawaterways_porto.jpg';
import AmaMagna from '../../../assets/images/cruise_images/amawaterways_amamagna.jpg';
import Paris from '../../../assets/images/cruise_images/amawaterways_paris.jpg';
import Castlenaud from '../../../assets/images/cruise_images/amawaterways_castlenaud.jpg';
import RhineRiver from '../../../assets/images/cruise_images/amawaterways_rhineriver.jpg';

export default function CruiseAmawaterwaysSail() {
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
                <Image src={CoverAmaWaterways} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>SAIL THROUGH THE HEART OF THE DESTINATION</h1>
                    <p>TRAVEL AGENTS - RIVER CRUISES, EUROPE, AMA WATERWAYS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/10/18 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: PRESENT - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2678</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Step aboard a world of unparalleled experiences on an AmaWaterways journey through the hearts of Europe and Asia. With an award-winning fleet, critically acclaimed dining and a variety of authentic included excursions, AmaWaterways — the Heart of the River™ — will turn every mile of your journey into a cherished memory.
                </p>
                <p>
                    The stunning ships of AmaWaterways create the ultimate guest experience. They have been labeled the “Highest Rated River Cruise Ships” after outranking the competition in the categories of accommodations, facilities, cuisine, hospitality and more.
                </p>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-2'>
                        <Image
                            src={Cologne}
                            alt='placeholder image'
                            width='100%'
                            className='all-inclusive__image my-2'
                        />
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <h2>Book now to take advantage of these limited-time offers:</h2>
                        <ul>
                            <li><strong>Save 20%</strong> on select 2023 & 2024 Europe and Mekong river cruises</li>
                            <li><strong>Lock in trans-Atlantic flights at fixed rates</strong> on select 2023 and 2024 Europe sailings: Economy Air at $1,099; Premium Economy Air at $2,999; Business Class Air at $4,999</li>
                            <li><strong>Exclusive from our agency: Receive up to US$300 in onboard credit</strong> per stateroom on select sailings</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Hanoi}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Hanoi, Vietnam</div>
                        </div>
                        <h3>7-Night Charms of The Mekong</h3>
                        <p>
                            <em>AmaDara</em>
                            <br></br>
                            January - December 2024
                        </p>
                        <p>Ho Chi Minh City – My Tho, Vietnam • Cai Be – Sa Dec, Vietnam • Tan Chau, Vietnam – Border crossing, Cambodia • Phnom Penh, Cambodia • Oudong – Kampong Tralach – Phnom Penh • Oknhatey – Angkor Ban, Cambodia • Kampong Cham – Siem Reap</p>
                        <p className='fw-bold'>Riverview from $2,369 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Amsterdam}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Amsterdam, the Netherlands</div>
                        </div>
                        <h3>7-Night Captivating Rhine</h3>
                        <p>
                            <em>AmaKristina</em>
                            <br></br>
                            February - November 2024
                        </p>
                        <p>Amsterdam, the Netherlands (overnight) • Düsseldorf, Germany • Rhine Gorge – Rüdesheim, Germany • Ludwigshafen, Germany • Strasbourg, France • Lyon, France (overnight)</p>
                        <p className='fw-bold'>Riverview from $2,724 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Porto}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Porto, Portugal</div>
                        </div>
                        <h3>7-Night Enticing Douro</h3>
                        <p>
                            <em>AmaDouro</em>
                            <br></br>
                            March - December 2024
                        </p>
                        <p>Porto, Portugal • Entre-Os-Rios, Portugal • Regua – Pinhao, Portugal • Vega De Terron, Spain – Salamanca, Spain • Barca D’Alva, Portugal • Regua, Portugal • Porto, Portugal (overnight)</p>
                        <p className='fw-bold'>Riverview from $4,147 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AmaMagna}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>AmaMagna</div>
                        </div>
                        <h3>7-Night Gems of Southeast Europe</h3>
                        <p>
                            <em>AmaMagna</em>
                            <br></br>
                            March - December 2024
                        </p>
                        <p>Budapest, Hungary • Mohács – Pécs, Hungary • Vukovar, Croatia – Novi Sad, Serbia • Belgrade, Serbia • Scenic cruising through the Iron Gates • Vidin, Bulgaria • Rousse, Bulgaria – Giurgiu, Romania (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,537 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Paris}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Paris, France</div>
                        </div>
                        <h3>7-Night Paris & Normandy</h3>
                        <p>
                            <em>AmaDante</em>
                            <br></br>
                            March - December 2024
                        </p>
                        <p>Paris, France (overnight) • Les Andelys, France • Le Havre, France (overnight) • Normandy Beaches – Caudebec En Caux, France • Rouen, France • Vernon, France (overnight) • Paris, France (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,944 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Castlenaud}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Castelnaud la Chapelle, France</div>
                        </div>
                        <h3>7-Night Taste of Bordeaux</h3>
                        <p>
                            <em>AmaDolce</em>
                            <br></br>
                            March - November 2024
                        </p>
                        <p>Bordeaux, France • Libourne, France (overnight) • Blaye – Bourg, France • Cussac – Fort Medoc, France • Cadillac, France • Bordeaux, France (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,912 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RhineRiver}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Rhine River, Germany</div>
                        </div>
                        <h3>7-Night Rhine Castles & Swiss Alps</h3>
                        <p>
                            <em>AmaSerena</em>
                            <br></br>
                            May - December 2024
                        </p>
                        <p>Amsterdam, the Netherlands (overnight) • Cologne, Germany • Rhine Gorge – Rudesheim, Germany • Ludwigshafen, Germany • Strasbourg, France • Basel, Switzerland (overnight)</p>
                        <p className='fw-bold'>Riverview from $3,842 per person</p>
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
