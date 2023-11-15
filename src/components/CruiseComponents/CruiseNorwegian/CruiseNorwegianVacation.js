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

import NorwegianPH from '../../../assets/images/norwegian_placeholder.jpg';
import NorwegianLogo from '../../../assets/logo/NorweigianCLLogo.png';

import SantoriniPH from '../../../assets/images/cruise_images/santorini_placeholder.jpg';
import BarcelonaPH from '../../../assets/images/cruise_images/barcelona_placeholder.jpg';
import LisbonPH from '../../../assets/images/cruise_images/lisbon_placeholder.jpg';
import LondonPH from '../../../assets/images/cruise_images/london_placeholder.jpg';
import MykonosPH from '../../../assets/images/cruise_images/mykonos_placeholder.jpg';
import IstanbulPH from '../../../assets/images/cruise_images/istanbul_placeholder.jpg';

export default function CruiseNorwegianVacation() {
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
                <Image src={NorwegianPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>YOUR PERFECT VACATION<br></br>STARTS HERE</h1>
                    <p>TRAVEL AGENTS -<br></br>CRUISE, VACATION PACKAGE/TOUR,<br></br>NORWEGIAN CRUISE LINE</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/03 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: SELECT SAILING THROUGH 2025
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2667</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Our travel agency can plan the perfect cruise vacation with Norwegian Cruise Line®. With their freestyle cruising, your vacation will be just the way you want it: no set schedule to follow but your own, no dress code except what you love to wear and the freedom to eat where you want. And we’ll make it even better by covering all the travel details.
                </p>
                <p className='fw-bold'>
                    Book now and you’ll enjoy 50% off all cruises and Norwegian’s Free at Sea all-inclusive offers, including Free Unlimited Open Bar, Free Specialty Dining, Free Excursions, Free Wi-Fi and Free 3rd & 4th Guests! Plus, receive up to US$300 Onboard Credit on select sailings, only when you book through our travel agency.
                </p>
                <p className='fw-bold text-center'>We can help you plan your cruise vacation. Contact our travel agency today.</p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SantoriniPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Santorini, Greece</div>
                        </div>
                        <h3>10 Nights – Greek Isles & Italy</h3>
                        <p>
                            <em>Norwegian Epic</em>
                            <br></br>
                            Departs April through August 2024
                        </p>
                        <p>Rome (Civitavecchia), Italy; Santorini, Greece; Athens (Piraeus), Greece; Corfu, Greece; Valletta, Malta; Messina (Sicily), Italy; Naples, Italy; Florence/Pisa (Livorno), Italy; Nice/Monaco (Villefranche), France; Rome (Civitavecchia), Italy</p>
                        <p className='fw-bold'>Balcony Stateroom from $2,668 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BarcelonaPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Barcelona, Spain</div>
                        </div>
                        <h3>10 Nights – Western Mediterranean</h3>
                        <p>
                            <em>Norwegian Escape</em>
                            <br></br>
                            Departs June and July 2024
                        </p>
                        <p>Barcelona, Spain; Cannes, France; Florence/Pisa (Livorno), Italy; Rome (Civitavecchia), Italy; Naples, Italy; Messina (Sicily), Italy; Valletta, Malta; Cagliari, Sardinia; Palma (Majorca), Spain; Barcelona, Spain</p>
                        <p className='fw-bold'>Balcony Stateroom from $3,323 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={LisbonPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Lisbon, Portugal</div>
                        </div>
                        <h3>10 Nights – Western Mediterranean</h3>
                        <p>
                            <em>Norwegian Getaway</em>
                            <br></br>
                            Departs June 6, 2024, aboard
                        </p>
                        <p>London (Southampton), United Kingdom; Paris (Le Havre), France; Oporto, Portugal; Lisbon, Portugal; Gibraltar, United Kingdom; Seville (Cadiz), Spain; Granada (Malaga), Spain; Ibiza, Spain; Palma (Majorca), Spain; Barcelona, Spain</p>
                        <p className='fw-bold'>Balcony Stateroom from $3,039 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={LondonPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>London, United Kingdom</div>
                        </div>
                        <h3>11 Nights – Northern Europe</h3>
                        <p>
                            <em>Norwegian Prima</em>
                            <br></br>
                            Departs June and August 2024
                        </p>
                        <p>London (Southampton), United Kingdom; Brussels/Bruges (Zeebrugge), Belgium; Amsterdam, Netherlands; Bergen, Norway; Geiranger, Norway; Alesund, Norway; Akureyri, Iceland; Isafjordur, Iceland; Reykjavik, Iceland</p>
                        <p className='fw-bold'>Balcony Stateroom from $4,501 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MykonosPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Mykonos, Greece</div>
                        </div>
                        <h3>9 Nights – Greek Isles & Eastern Mediterranean</h3>
                        <p>
                            <em>Norwegian Pearl</em>
                            <br></br>
                            Departs June and July 2024
                        </p>
                        <p>Athens (Piraeus), Greece; Santorini, Greece; Mykonos, Greece; Zakynthos, Greece; Corfu, Greece; Kotor,
                            Montenegro; Dubrovnik, Croatia; Split, Croatia; Venice, Italy; Venice (Trieste), Italy</p>
                        <p className='fw-bold'>Balcony Stateroom from $3,969 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={IstanbulPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Istanbul, Turkey</div>
                        </div>
                        <h3>7 Nights – Greek Isles & Eastern Mediterranean</h3>
                        <p>
                            <em>Norwegian Getaway</em>
                            <br></br>
                            Departs July and August 2024
                        </p>
                        <p>Athens (Piraeus), Greece; Kusadasi, Turkey; Istanbul, Turkey; Mykonos, Greece; Rhodes, Greece; Heraklion (Crete), Greece; Santorini, Greece; Athens (Piraeus), Greece</p>
                        <p className='fw-bold'>Balcony Stateroom from $2,307 per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={NorwegianLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Terms & Conditions: 50% off all cruises offer is applicable for ALL Categories including Sailaway Category MX (Club Balcony Suite); BX (Balcony); OX (Oceanview) and IX (Inside) on new bookings made from 11/02/23 through 12/04/2023 on select sailings through 2025. Discount applies to all Guests in the stateroom. Rates are in US Dollars. Singles paying 200% of voyage fare qualify. Government taxes, port expenses, and fees, general excise tax (GET) and discretionary onboard service charges/ gratuities are additional. Offer is capacity controlled. Offer and combinability with other promotional offers are subject to change at any time per Norwegian Cruise Line’s discretion. Other restrictions may apply. Buy an air ticket and the 2nd guest flies for free. *Free At Sea choice(s) must be selected at least 24 hours prior to sailing and cannot be changed on board. Offer is capacity controlled, subject to change, and can be canceled and withdrawn at any time. Components included in this offer have no monetary value and are non-refundable and non-transferable. 20% Gratuities Apply on: Free Unlimited Open Bar; Free Specialty Dining. Free 3rd & 4th Guests on select cruises. Restrictions apply. Prices shown are per person and reflect discount, based on double occupancy in an inside stateroom, in U.S. dollars, available on select sailings and subject to change. Ports of call are subject to change and may vary by ship. Some exclusions and other restrictions may apply.
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
