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

import SeabournPH from '../../../assets/images/seabourn_placeholder.jpg';
import SeabournLogo from '../../../assets/logo/SeabournLogo.png';

import EasterIsland from '../../../assets/images/cruise_images/seabourn_easterisland.jpg';
import FireDance from '../../../assets/images/cruise_images/seabourn_firedance.jpg';
import SnorkelPacific from '../../../assets/images/cruise_images/seabourn_snorkelpacific.jpg';
import MitchellFalls from '../../../assets/images/cruise_images/seabourn_mitchellfalls.jpg';

export default function CruiseSeabournDestinations() {
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
                <Image src={SeabournPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>EXCITING NEW DESTINATIONS AWAIT</h1>
                    <p>TRAVEL AGENTS - CRUISE, SEABOURN</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/10/30 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2024 DEPARTURES
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2644</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Be part of the celebration as Seabourn Pursuit’s inaugural season continues in the South Pacific and the Kimberley. Join Seabourn on board their newest ultra-luxury expedition ship to experience lesser-known islands and atolls in the world of the South Pacific. Or, head to the northwestern corner of Australia; the Kimberley is one the world’s last wild frontiers, containing everything from rugged sandstone peaks and gushing waterfalls to sunken mangrove forests and everything in between.
                </p>
                <p className='fw-bold mb-1'>The Seabourn All-Inclusive Expedition Difference</p>
                <ul>
                    <li>Purpose-built expedition ship, PC6 ice-strengthened hull, with advanced maneuvering technology for superior stability, safety and comfort</li>
                    <li>World-class Expedition Team delivering immersive experiences</li>
                    <li>All veranda ocean-front suites</li>
                    <li>Intuitive, personalized service provided by staff passionate about exceeding guests’ expectations</li>
                    <li>Inclusive expedition experiences with Zodiac® boats, hikes, walks, snorkeling and scuba diving (for experienced, pre-qualified divers)</li>
                    <li>Optional expedition experiences with kayaks and custom-built six-person submarines*</li>
                    <li>World-class dining venues are all complimentary; dine where, when and with whom you wish</li>
                    <li>Tipping is neither required, nor expected</li>
                    <li>Complimentary premium spirits and fine wines available on board at all times</li>
                </ul>
                <p><small>*Optional, for an additional fee</small></p>
                <p>When you’re ready to book your luxurious expedition, contact our agency. We are avid cruisers who can assist you with every facet of your Seabourn cruise vacation, from arriving at your starting port and getting transfers to the dock to giving onboard dining recommendations and helping book your family and friends.</p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={EasterIsland}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Easter Island</div>
                        </div>
                        <h3>20-Day Easter & Pitcairn Islands:<br></br>Marooned, Moai & Mutineers</h3>
                        <p>
                            <em>Seabourn Pursuit</em>
                            <br></br>
                            Departs March 25, 2024
                        </p>
                        <p>San Antonio (Santiago), Chile; Isla Robinson Crusoe, Chile; Selkirk Island, Chile; Easter Island, Chile; Ducie Island, Pitcairn; Henderson Island, Pitcairn; Adamstown, Pitcairn Island, Pitcairn; Mangareva, Gambier Island, French Polynesia; Anaa, French Polynesia; Papeete, French Polynesia</p>
                        <p className='fw-bold'>Veranda Suite from $19,200 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$200 shipboard credit per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={FireDance}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Fire dance in Papua, New Guinea</div>
                        </div>
                        <h3>15-Day History & Cultures of the Pacific Theatre</h3>
                        <p>
                            <em>Seabourn Pursuit</em>
                            <br></br>
                            Departs April 30, 2024
                        </p>
                        <p>Sydney, Australia; Honiara, Guadalcanal, Solomon Islands; Ghizo Island, Solomon Islands; Buka, Bougainville, Papua New Guinea; Rabaul, Papua New Guinea; Kavieng, Papua New Guinea; Rambutyo Island, Papua New Guinea; Ponam Island, Papua New Guinea; Oroluk Lagoon, Micronesia; Chuuk, Micronesia; Guam (U.S. Territory)</p>
                        <p className='fw-bold'>Veranda Suite from $16,500 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SnorkelPacific}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Snorkel operation in the Pacific</div>
                        </div>
                        <h3>15-Day Remote Shores of New Guinea & Indonesia</h3>
                        <p>
                            <em>Seabourn Pursuit</em>
                            <br></br>
                            Departs May 28, 2024
                        </p>
                        <p>Sydney, Australia; Honiara, Guadalcanal, Solomon Islands; Panapompom Island, Papua New Guinea; Samarai, Papua New Guinea; Thursday Island, Queensland, Australia; Agats, Indonesia; Misool, Yapap Lagoon, Indonesia; Wayag Island, Indonesia; Gam Island, Indonesia; Darwin, Australia</p>
                        <p className='fw-bold'>Veranda Suite from $17,000 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$200 shipboard credit per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MitchellFalls}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Waterfall at Mitchell Plateau, Australia</div>
                        </div>
                        <h3>10-Day Kimberley Expedition: Waterfalls & Wandjinas</h3>
                        <p>
                            <em>Seabourn Pursuit</em>
                            <br></br>
                            Departs July 2, 2024
                        </p>
                        <p>Darwin, Australia; Wyndham, Australia; King George River, Australia; Vansittart Bay, Australia; Ashmore Reef, Australia; Hunter River, Western Australia, Australia; Kuri Bay, Western Australia, Australia; Montgomery Reef, Australia; Freshwater Cove, Australia; Talbot Bay, Australia; Broome, Western Australia, Australia</p>
                        <p className='fw-bold'>Veranda Suite from $16,300 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$200 shipboard credit per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={SeabournLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Featured prices are per guest based on double occupancy and are inclusive of Cruise Fare, Taxes, Fees & Port Expenses. Fares are in CAD dollars. All savings amounts are included in the fares shown. All offers are capacity controlled and may be modified or withdrawn at any time without prior notice. Other restrictions may apply. Seabourn reserves the right to correct errors. Ships’ registry: Bahamas. ©2023 Seabourn.
                </p>
                <p>
                    Sailing dates and amenities, including Distinctive Voyages amenities, are in USD, are current at time of printing and are subject to change without notice. Amenities apply to 1st and 2nd passenger only. Offers are subject to availability and may be altered or withdrawn at any time without notice. Pricing and amenities will be confirmed at time of booking. Combinability varies. Cancellations, refunds, and penalties are imposed by the cruise line. Distinctive Voyages amenities may be substituted if a minimum number of guests are not confirmed on any given departure. These amenities are exclusive to this cruise line and must be booked by one of our travel advisors. Contact our agency for additional information.
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
