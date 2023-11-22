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

import CrystalPH from '../../../assets/images/crystal_placeholder.jpg';
import CrystalLogo from '../../../assets/logo/CrystalLogo.png';

import LesSaintes from '../../../assets/images/cruise_images/crystal_lessaintes.jpg';
import Rhodes from '../../../assets/images/cruise_images/crystal_rhodes.jpg';
import InsidePassage from '../../../assets/images/cruise_images/crystal_insidepassage.jpg';
import AlaskanSeals from '../../../assets/images/cruise_images/crystal_alaskanseals.jpg';
import PanamaCanal from '../../../assets/images/cruise_images/crystal_panamacanal.jpg';
import Rouen from '../../../assets/images/cruise_images/crystal_rouen.jpg';

import UmiUma from '../../../assets/images/cruise_images/crystal_umiuma.jpg';
import Serenity from '../../../assets/images/cruise_images/crystal_serenity.jpg';
import AquamarineVeranda from '../../../assets/images/cruise_images/crystal_aquamarineveranda.jpg';

export default function CruiseCrystalSolo() {
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
                <Image src={CrystalPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>SAIL SOLO IN STYLE</h1>
                    <p>TRAVEL AGENTS - CRUISE, CRYSTAL, CARIBBEAN, EUROPE, ALASKA, CANADA</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/01 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2023 & 2024 DEPARTURES
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2677</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Revel in the freedom to explore stunning destinations by day while joining a welcoming community by night. Join Crystal aboard its two flagships, Crystal Serenity and Crystal Symphony, and you’ll find award-winning gastronomy, butler service to make you feel perfectly at home and personalized experiences that embrace the joy of solo travel. Whether sailing the Caribbean this holiday season or the Mediterranean in May, Crystal offers sailings that ensure unbeatable, memorable experiences with like-minded travelers.
                </p>
                <p>
                    Embark on a solo adventure with Crystal and enjoy special fares on Sapphire Veranda Suites and Aquamarine Veranda Suites on select voyages in 2023 and 2024.
                </p>
                <p className='fw-bold mb-1'>Your solo fare will include:</p>
                <ul>
                    <li>Complimentary Wines & Spirits</li>
                    <li>Unlimited Standard Wi-Fi</li>
                    <li>24-Hour In-Room Dining</li>
                    <li>Butler Service in Every Suite</li>
                    <li>Pre-Paid Gratuities</li>
                    <li>And Much More</li>
                </ul>
            </Container>

            <Container className='my-3'>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={UmiUma}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <p className='text-end'><small>Umi Uma by Nobu</small></p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={Serenity}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <p className='text-end'><small>Sailing Aboard <em>Crystal Serenity</em></small></p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <Image
                            src={AquamarineVeranda}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <p className='text-end'><small>Aquamarine Veranda Suite</small></p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={LesSaintes}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Les Saintes, French West Indies</div>
                        </div>
                        <h3>7-Night Eastern Caribbean Crystal Serenity</h3>
                        <p>
                            <em>Crystal Serenity</em>
                            <br></br>
                            December 16, 2023
                        </p>
                        <p>San Juan, Puerto Rico; Plymouth, Montserrat; Les Saintes, French West Indies; St. Kitts (Basseterre), St. Kitts and Nevis; St. Thomas, U.S. Virgin Islands; Miami, Florida</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Rhodes}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Rhodes, Greece</div>
                        </div>
                        <h3>14-Night Mediterranean</h3>
                        <p>
                            <em>Crystal Symphony</em>
                            <br></br>
                            April 25, 2024
                        </p>
                        <p>Athens (Piraeus), Greece; Istanbul, Turkey; Izmir, Turkey; Kusadasi, Turkey; Bodrum, Turkey; Rhodes, Greece; Mykonos, Greece; Chania (Crete), Greece; Valletta, Malta; Messina, Italy; Naples, Italy; Rome (Civitavecchia), Italy</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={InsidePassage}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Inside Passage, Alaska</div>
                        </div>
                        <h3>7-Night Roundtrip Vancouver</h3>
                        <p>
                            <em>Crystal Serenity</em>
                            <br></br>
                            July 2, 2024
                        </p>
                        <p>Vancouver, Canada; Seymour Narrows (British Columbia), Canada; Sitka, Alaska; Skagway, Alaska; Endicott Arm; Ketchikan, Alaska; cruise Inside Passage; Vancouver, Canada</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AlaskanSeals}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Alaskan Seals</div>
                        </div>
                        <h3>7-Night Alaska</h3>
                        <p>
                            <em>Crystal Serenity</em>
                            <br></br>
                            August 6, 2024
                        </p>
                        <p>Seward (Anchorage), Alaska; cruise Hubbard Glacier, Alaska; Skagway, Alaska; Juneau, Alaska; Sitka, Alaska; Ketchikan, Alaska; cruise Inside Passage; Vancouver, Canada</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={PanamaCanal}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Panama Canal, Panama</div>
                        </div>
                        <h3>18-Night Panama Canal</h3>
                        <p>
                            <em>Crystal Serenity</em>
                            <br></br>
                            August 27, 2024
                        </p>
                        <p>Los Angeles, California; Cruising Baja California, Mexico; Puerto Vallarta, Mexico; Huatulco, Mexico; San José (Puerto Caldera), Costa Rica; Panama Canal transit, Panama; Cartagena, Colombia; cruising the Caribbean Sea; George Town, Grand Cayman Islands; Miami, Florida; New York City, New York</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Rouen}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Rouen, France</div>
                        </div>
                        <h3>8-Night Northern Europe</h3>
                        <p>
                            <em>Crystal Symphony</em>
                            <br></br>
                            September 18, 2024
                        </p>
                        <p>London (Dover), United Kingdom; Amsterdam, Netherlands; Zeebrugge, Belgium; Rouen, France; St. Peter Port, Guernsey; London (Dover), United Kingdom</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CONTACT OUR AGENCY FOR ADDITIONAL DATES AND SPECIAL SOLO PRICING.</h2>
            </Container>

            <Container className='my-3'>
                <Image
                    src={CrystalLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Solo Traveler Offer is valid on new bookings made on or before December 31, 2023, on select 2023 and 2024 departures. Exceptional solo fares are capacity-controlled, and subject to availability on select voyages in Sapphire and Aquamarine categories only. Offer can be withdrawn anytime. Cancel rebooks are not permitted. Other restrictions may apply.
                </p>
                <p>
                    The renderings, photographs, and specifications displayed on this website are provided for convenience only. They should not be relied upon as representations, express or implied, of the final detail of the suites and guest rooms. Crystal expressly reserves the right to make modifications, revisions, and changes it deems desirable in its sole and absolute discretion. Dimensions and square footage are approximate and may vary with actual construction. Decor, designs, and layouts may vary within suite and guest room categories. Please contact our agency for more details.
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
