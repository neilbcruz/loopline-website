import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import CoverAllInclusive from '../../assets/images/cover_allinclusive.jpg';
import CoverBeach from '../../assets/images/cover_beach.jpg';

import CoverSilversea from '../../assets/images/cruise_images/cover_silversea.jpg';
import CoverHolland from '../../assets/images/cruise_images/cover_holland.jpg';
import CoverNorwegian from '../../assets/images/cruise_images/cover_norwegian.jpg';
import CoverCelebrity from '../../assets/images/cruise_images/cover_celebrity.jpg';
import CoverCrystal from '../../assets/images/cruise_images/cover_crystal.jpg';
import CoverCaribbean from '../../assets/images/cruise_images/cover_caribbean.jpg';
import CoverSeabourn from '../../assets/images/cruise_images/cover_seabourn.jpg';
import CoverAmaWaterways from '../../assets/images/cruise_images/cover_amawayerways.jpg';
import CoverTravelLeaders from '../../assets/images/cruise_images/cover_travelleaders.jpg';
import CoverVirginVoyages from '../../assets/images/cruise_images/cover_vvoyages.jpg';

import SandalsCuracao from '../../assets/images/hotel_images/cover_sandals-curacao.jpg';
import WestjetVacation from '../../assets/images/hotel_images/cover_westjet-vacation.jpg';
import SandalsDunnRiver from '../../assets/images/hotel_images/cover_sandals-dunnriver.jpg';
import PalaceVacation from '../../assets/images/hotel_images/cover_palace-vacation.jpg';
import WestjetParadise from '../../assets/images/hotel_images/cover_westjet-paradise.jpg';

export default function SpecialsHome() {
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
                                    src={CoverAllInclusive}
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
                                    src={CoverBeach}
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
                                    <HashLink to='/inspiration/beach#top' >
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
                                src={CoverSilversea}
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
                                src={CoverHolland}
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
                                src={CoverNorwegian}
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
                                    src={CoverCelebrity}
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
                                    src={CoverNorwegian}
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
                                    src={CoverCrystal}
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
                                    src={CoverCaribbean}
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
                                    src={CoverSeabourn}
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
                                    src={CoverHolland}
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
                                    src={CoverAmaWaterways}
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
                                    src={CoverTravelLeaders}
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
                                    src={CoverCelebrity}
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
                            <HashLink to='vvoyages-luxury#top' className='image-container'>
                                <Image
                                    src={CoverVirginVoyages}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>VIRGIN VOYAGES<br></br><strong>ALWAYS INCLUDED LUXURY</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='norwegian-feelfree#top' className='image-container'>
                                <Image
                                    src={CoverNorwegian}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>NORWEGIAN CRUISE LINE<br></br><strong>FEEL FREE TO LET THE OUTSIDE IN</strong></div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='amawayerways-sail#top' className='image-container'>
                                <Image
                                    src={CoverAmaWaterways}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>AMAWATERWAYS<br></br><strong>SAIL THROUGH THE HEART OF THE DESTINATION</strong></div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={4} className='p-md-0'>
                            <HashLink to='caribbean-sale#top' className='image-container'>
                                <Image
                                    src={CoverCaribbean}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image text-start'>ROYAL CARIBBEAN<br></br><strong>BIGGEST SALE OF THE YEAR</strong></div>
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
                                src={CoverSilversea}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image text-start'>SANDALS RESORTS<br></br><strong>SANDALS ROYAL CURAÇAO - WHERE AMAZING COMES</strong></div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={4} className='p-md-0'>
                        <HashLink to='holland-haveitall#top' className='image-container'>
                            <Image
                                src={CoverHolland}
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
                                src={CoverNorwegian}
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
                                    src={CoverSilversea}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverSilversea}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                src={CoverSilversea}
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
                                src={CoverHolland}
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
                                src={CoverNorwegian}
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
                                    src={CoverSilversea}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverSilversea}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                    src={CoverNorwegian}
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
                                src={CoverNorwegian}
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