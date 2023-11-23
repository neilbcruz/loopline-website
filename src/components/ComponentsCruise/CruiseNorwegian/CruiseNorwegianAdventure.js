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

import CoverNorwegian from '../../../assets/images/cruise_images/cover_norwegian.jpg';
import NorwegianLogo from '../../../assets/logo/NorweigianCLLogo.png';

import StThomas from '../../../assets/images/cruise_images/norwegian_stthomas.jpg';
import Rome from '../../../assets/images/cruise_images/norwegian_rome.jpg';
import Lisbon from '../../../assets/images/cruise_images/norwegian_lisbon.jpg';
import Santorini from '../../../assets/images/cruise_images/norwegian_santorini.jpg';
import Florence from '../../../assets/images/cruise_images/norwegian_florence.jpg';
import Prima from '../../../assets/images/cruise_images/norwegian_norwegianprima.jpg';
import PrimaVivaBanner from '../../../assets/images/cruise_images/norwegian_primaviva.jpg';

export default function CruiseNorwegianAdventure() {
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
                <Image src={CoverNorwegian} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>CHOOSE YOUR<br></br>OWN ADVENTURE</h1>
                    <p>TRAVEL AGENTS -<br></br>CRUISE, NORWEGIAN CRUISE LINE</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/10 - 2023/11/15
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: SELECT SAILING THROUGH 2025
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2673</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Set sail on a cruise vacation designed around you — with no schedule to follow but your own — with Norwegian Cruise Line. Explore the exotic islands of the Caribbean, where you can go behind the wall of Brimstone Hill Fortress and enjoy lunch at a sugar plantation on Barbados, hike up and around the might Pitons of St. Lucia or just take a ride through the charming countryside to Admiral Horatio Nelson’s House in Antigua.
                </p>
                <p>
                    In Europe, visit a wide variety of ports — from glorious Rome to glamorous Santorini — all while enjoying the freedom and flexibility Norwegian offers. Feast on authentic pasta in Italy and tapas in Spain. Relax on sun-drenched beaches and admire the blue-domed buildings across Greece. Head north to cruise through the marvelous fjords of Norway and see the stunning natural wonders of Iceland.
                </p>
                <p className='text-center'>Book your cruise now to take advantage of this great offer:</p>
                <p className='fw-bold text-center'>50% Off All Cruises + US$300 Onboard Credit + Free At Sea Bonus Amenities:</p>
                <p className='fw-bold text-center'>
                    Free Open Bar • Free Specialty Dining • Free Shore Excursions<br></br>
                    Free Wi-Fi • Free 3rd & 4th Guests • Free Airfare for 2nd Guest
                </p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={StThomas}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>St. Thomas</div>
                        </div>
                        <h3>7-Day Caribbean: Barbados, Antigua & St. Lucia</h3>
                        <p>
                            <em>Norwegian Viva</em>
                            <br></br>
                            January 14, 2024
                        </p>
                        <p>San Juan, Puerto Rico; Tortola, British Virgin Islands; St. John's, Antigua; Bridgetown, Barbados; Castries, St. Lucia; Philipsburg, St. Maarten; St. Thomas, US Virgin Islands; San Juan, Puerto Rico</p>
                        <p className='fw-bold'>Balcony from $2,379 per person</p>
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
                        <h3>10-Day Mediterranean: Italy, France, Spain & Gibraltar</h3>
                        <p>
                            <em>Norwegian Viva</em>
                            <br></br>
                            September 10, 2024
                        </p>
                        <p>Rome (Civitavecchia), Italy; Florence/Pisa (Livorno), Italy; Nice/Monaco (Villefranche), France; Provence, (Marseille), France; Barcelona, Spain; Palma (Majorca), Spain; Ibiza, Spain; Motril, Spain; Seville (Cadiz), Spain; Gibraltar, United Kingdom; Lisbon, Portugal</p>
                        <p className='fw-bold'>Balcony from $4,079 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Lisbon}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Lisbon, Portugal</div>
                        </div>
                        <h3>10-Day Mediterranean: Italy, France, & Spain</h3>
                        <p>
                            <em>Norwegian Viva</em>
                            <br></br>
                            April 26, 2024
                        </p>
                        <p>Lisbon, Portugal; Gibraltar, United Kingdom; Seville (Cadiz), Spain; Motril, Spain; Ibiza, Spain; Palma; (Majorca), Spain; Barcelona, Spain; Provence (Marseille), France; Nice/Monaco (Villefranche), France; Florence/Pisa (Livorno), Italy; Rome (Civitavecchia), Italy</p>
                        <p className='fw-bold'>Balcony from $3,820 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Santorini}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Santorini, Greece</div>
                        </div>
                        <h3>10-Day Greek Isles: Santorini, Athens, & Florence</h3>
                        <p>
                            <em>Norwegian Prima</em>
                            <br></br>
                            October 28, 2024
                        </p>
                        <p>Rome (Civitavecchia), Italy; Santorini, Greece; Athens (Piraeus), Greece; Mykonos, Greece; Corfu, Greece; Valletta, Malta; Messina (Sicily), Italy; Naples, Italy; Florence/Pisa (Livorno), Italy; Rome; (Civitavecchia), Italy</p>
                        <p className='fw-bold'>Balcony from $3,389 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Florence}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Florence, Italy</div>
                        </div>
                        <h3>12-Day Europe: Italy, France, Spain & Portugal</h3>
                        <p>
                            <em>Norwegian Viva</em>
                            <br></br>
                            October 6, 2024
                        </p>
                        <p>London (Southampton), United Kingdom; Bordeaux (Le Verdon), France; Bilbao, Spain; La Coruña, Spain; Oporto, Portugal; Lisbon, Portugal; Seville (Cadiz), Spain; Cartagena, Spain; Barcelona, Spain; Cannes, France; Florence/Pisa (Livorno), Italy; Rome (Civitavecchia), Italy</p>
                        <p className='fw-bold'>Balcony from $4,356 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Prima}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Norwegian Prima</div>
                        </div>
                        <h3>10-Day Northern Europe: Iceland, Norway & Belgium</h3>
                        <p>
                            <em>Norwegian Prima</em>
                            <br></br>
                            August, 14, 2025
                        </p>
                        <p>Reykjavik, Iceland; Isafjordur, Iceland; Akureyri, Iceland; Alesund, Norway; Maloy, Norway; Geiranger, Norway; Amsterdam, Netherlands; Brussels / Bruges (Zeebrugge), Belgium; London (Southampton), United Kingdom</p>
                        <p className='fw-bold'>Balcony from $4,249 per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <h2>NORWEGIAN CRUISE LINE'S NEWEST SHIPS</h2>
                <div className='image-container'>
                    <Image
                        src={PrimaVivaBanner}
                        width='100%'
                        className='custom-fluid-image'
                    />
                    <div className='text-on-image'>Norwegian Prima and Viva</div>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <h3><em>Norwegian Prima</em></h3>
                        <p>Norwegian Cruise Line welcomes Norwegian Prima, the first in a new class of ships designed to elevate every expectation. The Prima has the most open deck space of any on the sea with a 360-degree deck that will make you feel like you’re walking on the open waters. Experience the first ever three-level racetrack or step into the healing waters of the new Mandara Spa — whatever way you choose to spend your time, it will be full of new experiences on Prima</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3><em>Norwegian Viva</em></h3>
                        <p>Set sail on the brand-new Norwegian Viva that’s designed for you to live to the fullest. Stretch out, way out, in Norwegian’s most spacious accommodations to date. And look forward to first-rate service so you can live it up every second. Whether you're taking a seaside stroll on Ocean Boulevard, swimming up to the horizon on Infinity Beach or delighting in culinary excellence at Indulge Food Hall, nothing comes between you and the sea.</p>
                    </Col>
                </Row>
                <Image
                    src={NorwegianLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Terms & Conditions: <strong>50% off all cruises + Free at Sea Amenities + US$300 onboard credit</strong> is applicable for ALL Categories including Sailaway Category MX (Club Balcony Suite); BX (Balcony); OX (Oceanview) and IX (Inside) on new bookings made from 11/9/2023 through 11/15/2023. Discount applies to all Guests in the stateroom. Rates are in US Dollars. Singles paying 200% of voyage fare qualify. Government taxes, port expenses, and fees, general excise tax (GET) and discretionary onboard service charges/ gratuities are additional. Offer is capacity controlled. Offer and combinability with other promotional offers are subject to change at any time per Norwegian Cruise Line’s discretion.  Other restrictions may apply. Buy an air ticket and the 2nd guest flies for free. *Free At Sea choice(s) must be selected at least 24 hours prior to sailing and cannot be changed on board. Offer is capacity controlled, subject to change, and can be canceled and withdrawn at any time. Components included in this offer have no monetary value and are non-refundable and non-transferable. 20% Gratuities Apply on: Free Unlimited Open Bar; Free Specialty Dining. Free 3rd & 4th Guests on select cruises. Restrictions apply. Prices shown are per person and reflect discount, based on double occupancy in an inside stateroom, in U.S. dollars, available on select sailings and subject to change. Ports of call are subject to change and may vary by ship.  Some exclusions and other restrictions may apply.
                </p>
                <p>
                    Onboard credit offer is per stateroom, in U.S. Dollars and will be applied to 1st and 2nd guest on the reservation. Singles paying 200% are entitled to full onboard credit value. Offer is for new individual FIT reservations. Qualifying new individual FIT reservations can be moved into an existing Traditional or FS group and count towards tour conductor credits. This is a cruise only offer. This promotion is not applicable on the land portion of cruise tours. Components included in this offer have no monetary value, are non-refundable and non-transferable. Guests cannot substitute or customize this offer. Anything consumed above the promotional benefit will be the responsibility of the guest at prevailing rates. Government taxes, port expenses & fees, discretionary onboard service charges and/or gratuities are additional. Onboard Credit may be used for all purchases except towards onboard service charges, pre-purchased activities, and foreign exchange transactions. Promotion cannot be held as a new or existing Traditional or FS group block. Promotion cannot be held in Traditional Block Groups/Type: Affinity, Nettour, NettourC, CHARTERS, CMI OP EVENT, CMI OP LG EVENT, INCREG & INCLARGE. Offer is not combinable with Charters or Inaugural sailings. Applicable to NCL MIAMI, NCL INTL, AUSTRALIA, NCL BRAZIL, and NCL ASIA. Not applicable to CE and UK offices. Cancellation Fees also apply based on the booking/sailing date; therefore, Norwegian Cruise Line strongly recommends the purchase of travel protection on all bookings. Offer and combinability with other promotional offers is subject to change at any time per Norwegian Cruise Line’s discretion. Other restrictions may apply.
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
