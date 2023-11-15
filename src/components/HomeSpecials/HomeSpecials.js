import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import AllInclusivePH from '../../assets/images/allinclusive_placeholder.jpg';
import BeachPH from '../../assets/images/beach_placeholder.jpg';

import SilverseaPH from '../../assets/images/silversea_placeholder.jpg';
import HollandPH from '../../assets/images/holland_placeholder.jpg';
import NorwegianPH from '../../assets/images/norwegian_placeholder.jpg';
import CelebrityPH from '../../assets/images/celebrity_placeholder.jpg';
import CrystalPH from '../../assets/images/crystal_placeholder.jpg';
import CaribbeanPH from '../../assets/images/cruise_placeholder.jpg';
import SeabournPH from '../../assets/images/seabourn_placeholder.jpg';
import AmaWaterwaysPH from '../../assets/images/amawayerways_placeholder.jpg';
import TravelLeadersPH from '../../assets/images/travelleaders_placeholder.jpg';
import VVoyagesPH from '../../assets/images/vvoyages_placeholder.jpg';

export default function HomeInspiration() {
    const [showRows, setShowRows] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const toggleRows = () => {
        setShowRows(true);
        setShowButton(false);
    };

    return (
        <>
            <Container className='text-center'>
                <h2>TRAVEL SPECIALS</h2>
                <p>To provide you with the best possible service, our agents specialize in the following areas.</p>
            </Container>
            <Container className='my-3'>
                <Row className='text-center'>
                    <Col xs={12} md={6} className='mb-3'>
                        <Row>
                            <Col xs={12} lg={6} style={{ height: '250px' }}>
                                <Image
                                    src={AllInclusivePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='custom-fluid-image mb-2'
                                    height='100%'
                                />
                            </Col>
                            <Col className='d-flex flex-column justify-content-between'>
                                <div>
                                    <h3>ALL-INCLUSIVE VACATIONS</h3>
                                    <p>Endless Options at All-Inclusive Resorts</p>
                                </div>
                                <div>
                                    <HashLink to='/inspiration/allinclusive#top'>
                                        <Button variant='outline-danger'>
                                            LEARN MORE
                                        </Button>
                                    </HashLink>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <Row>
                            <Col xs={12} lg={6} style={{ height: '250px' }}>
                                <Image
                                    src={BeachPH}
                                    alt='placeholder image'
                                    width='100%'
                                    height='100%'
                                    className='custom-fluid-image mb-2'
                                />
                            </Col>
                            <Col className='d-flex flex-column justify-content-between'>
                                <div>
                                    <h3>THE BEACH IS CALLING</h3>
                                    <p>Whether you’re looking for an all-inclusive family getaway or an off the beaten path adventure for two, our experienced beach vacation.</p>
                                </div>
                                <div>
                                    <HashLink to='inspiration/beach#top' >
                                        <Button variant='outline-danger'>
                                            LEARN MORE
                                        </Button>
                                    </HashLink>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className='text-center'>
                <h2>CRUISE SPECIALS</h2>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='silversea-fares#top' className='image-container'>
                            <Image
                                src={SilverseaPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='holland-haveitall#top' className='image-container'>
                            <Image
                                src={HollandPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>HOLLAND AMERICA LINE<br></br><strong>HAVE IT ALL WITH HOLLAND AMERICA LINE</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='norwegian-adventure#top' className='image-container'>
                            <Image
                                src={NorwegianPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>NORWEGIAN CRUISE LINE<br></br><strong>CHOOSE YOUR OWN ADVENTURE</strong></div>
                        </HashLink>
                    </Col>
                </Row>
                {showButton && (
                    <Button variant='secondary' className='my-2' onClick={toggleRows}>
                        Show More
                    </Button>
                )}
                {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-resort#top' className='image-container'>
                                <Image
                                    src={CelebrityPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>CELEBRITY CRUISES<br></br><strong>RESORT AT SEA</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='norwegian-vacation#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>NORWEGIAN CRUISE LINE<br></br><strong>YOUR PERFECT VACATION STARTS HERE</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='crystal-solo#top' className='image-container'>
                                <Image
                                    src={CrystalPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>CRYSTAL<br></br><strong>SAIL SOLO IN STYLE</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='caribbean-icon#top' className='image-container'>
                                <Image
                                    src={CaribbeanPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>ROYAL CARIBBEAN<br></br><strong>THE ICON OF VACATIONS</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='seabourn-destinations#top' className='image-container'>
                                <Image
                                    src={SeabournPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>SEABOURN<br></br><strong>EXCITING NEW DESTINATIONS AWAIT</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='holland-youcanhave#top' className='image-container'>
                                <Image
                                    src={HollandPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>HOLLAND AMERICA LINE<br></br><strong>YOU CAN HAVE IT ALL</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='amawayerways-river#top' className='image-container'>
                                <Image
                                    src={AmaWaterwaysPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>AMAWATERWAYS<br></br><strong>HEART OF THE RIVER</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='travelleaders-elevate#top' className='image-container'>
                                <Image
                                    src={TravelLeadersPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>TRAVEL LEADERS TRAVEL PARTNERS<br></br><strong>ELEVATE THE WAY YOU EXPLORE THE WORLD</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-getaway#top' className='image-container'>
                                <Image
                                    src={CelebrityPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>CELEBRITY CRUISES<br></br><strong>AN EXCLUSIVE GETAWAY WITH CELEBRITY CRUISES</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='avvoyages-luxury#top' className='image-container'>
                                <Image
                                    src={VVoyagesPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>VIRGIN VOYAGES<br></br><strong>ALWAYS INCLUDED LUXURY</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
            </Container>

            <Container className='text-center'>
                <h2>HOTEL SPECIALS</h2>
            </Container>
            <Container className='text-center mb-5'>
            <Row>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='silversea-fares#top' className='image-container'>
                            <Image
                                src={SilverseaPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='holland-haveitall#top' className='image-container'>
                            <Image
                                src={HollandPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>HOLLAND AMERICA LINE<br></br><strong>HAVE IT ALL WITH HOLLAND AMERICA LINE</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='norwegian-adventure#top' className='image-container'>
                            <Image
                                src={NorwegianPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>NORWEGIAN CRUISE LINE<br></br><strong>CHOOSE YOUR OWN ADVENTURE</strong></div>
                        </HashLink>
                    </Col>
                </Row>
                {showButton && (
                    <Button variant='secondary' className='my-2' onClick={toggleRows}>
                        Show More
                    </Button>
                )}
                {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-resort#top' className='image-container text-start'>
                                <Image
                                    src={SilverseaPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='norwegian-vacation#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='crystal-solo#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='caribbean-icon#top' className='image-container text-start'>
                                <Image
                                    src={SilverseaPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='seabourn-destinations#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='holland-youcanhave#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='amawayerways-river#top' className='image-container text-start'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='travelleaders-elevate#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-getaway#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='avvoyages-luxury#top' className='image-container text-start'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
            </Container>

            <Container className='text-center'>
                <h2>VACATION SPECIALS</h2>
            </Container>
            <Container className='text-center mb-5'>
            <Row>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='silversea-fares#top' className='image-container'>
                            <Image
                                src={SilverseaPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='holland-haveitall#top' className='image-container'>
                            <Image
                                src={HollandPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>HOLLAND AMERICA LINE<br></br><strong>HAVE IT ALL WITH HOLLAND AMERICA LINE</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='norwegian-adventure#top' className='image-container'>
                            <Image
                                src={NorwegianPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>NORWEGIAN CRUISE LINE<br></br><strong>CHOOSE YOUR OWN ADVENTURE</strong></div>
                        </HashLink>
                    </Col>
                </Row>
                {showButton && (
                    <Button variant='secondary' className='my-2' onClick={toggleRows}>
                        Show More
                    </Button>
                )}
                {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-resort#top' className='image-container text-start'>
                                <Image
                                    src={SilverseaPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='norwegian-vacation#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='crystal-solo#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='caribbean-icon#top' className='image-container text-start'>
                                <Image
                                    src={SilverseaPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='seabourn-destinations#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='holland-youcanhave#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='amawayerways-river#top' className='image-container text-start'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='travelleaders-elevate#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>FAMILY VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='celebrity-getaway#top' className='image-container'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='avvoyages-luxury#top' className='image-container text-start'>
                                <Image
                                    src={NorwegianPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>SILVERSEA<br></br><strong>DOOR-TO-DOOR OR PORT-TO-PORT FARES</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
            </Container>

            <Container className='text-center'>
                <h2>RAIL SPECIALS</h2>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='ideacruise' className='image-container'>
                            <Image
                                src={NorwegianPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>WHY CHOOSE A CRUISE VACATION?</div>
                        </HashLink>
                    </Col>
                </Row>
            </Container>
        </>
    )
}