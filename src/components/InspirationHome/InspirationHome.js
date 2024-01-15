import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import CoverAustralia from '../../assets/images/australia_abundantwildlife.jpg';
import CoverItaly from '../../assets/images/cover_italy.jpg';
import CoverHawaii from '../../assets/images/cover_hawaii.jpg';
import CoverNZ from '../../assets/images/cover_nz.jpg';

import CoverWhyCruise from '../../assets/images/cover_whycruise.jpg';
import CoverFamily from '../../assets/images/cover_family.jpg';
import CoverWedding from '../../assets/images/cover_wedding.jpg';
import CoverAdventure from '../../assets/images/cover_adventure.jpg';
import CoverWildlife from '../../assets/images/cover_wildlife.jpg';
import CoverRomantic from '../../assets/images/cover_romantic.jpg';
import CoverGolf from '../../assets/images/cover_golf.jpg';
import CoverBeach from '../../assets/images/cover_beach.jpg';
import CoverRiverCruise from '../../assets/images/cover_rivercruise.jpg';
import CoverEuropean from '../../assets/images/cover_european.jpg';
import CoverAllInclusive from '../../assets/images/cover_allinclusive.jpg';

export default function HomeInspiration() {
    const [showRows, setShowRows] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const toggleRows = () => {
        setShowRows(true);
        setShowButton(false);
    };

    return (
        <>
            <Container className='text-center my-3'>
                <h2>DESTINATION INSPIRATION</h2>
                <p>Find your dream vacation. You can share your trip with your friends or contact an agent to make it happen!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='australia#top' className='image-container'>
                            <Image
                                src={CoverAustralia}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>AUSTRALIA VACATIONS</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='italy#top' className='image-container'>
                            <Image
                                src={CoverItaly}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>ITALY VACATIONS</div>
                        </HashLink>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={6} className='pe-md-0'>
                        <HashLink to='hawaii#top' className='image-container'>
                            <Image
                                src={CoverHawaii}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>HAWAII VACATIONS</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='nzealand#top' className='image-container'>
                            <Image
                                src={CoverNZ}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>NEW ZEALAND VACATIONS</div>
                        </HashLink>
                    </Col>
                </Row>
            </Container>

            <Container className='text-center'>
                <h2>VACATION IDEAS</h2>
                <p>The best deals happening now. Act fast, they won't last long!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='cruise#top' className='image-container'>
                            <Image
                                src={CoverWhyCruise}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>WHY CHOOSE A CRUISE VACATION?</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='family#top' className='image-container'>
                            <Image
                                src={CoverFamily}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>FAMILY VACATIONS</div>
                        </HashLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='wedding#top' className='image-container'>
                            <Image
                                src={CoverWedding}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='adventure#top' className='image-container'>
                            <Image
                                src={CoverAdventure}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-nav-image'>ADVENTURE VACATIONS</div>
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
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='wildlife#top' className='image-container'>
                                <Image
                                    src={CoverWildlife}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>WILDLIFE & SAFARI VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='romantic#top' className='image-container'>
                                <Image
                                    src={CoverRomantic}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>ROMANTIC VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='golf#top' className='image-container'>
                                <Image
                                    src={CoverGolf}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>GOLF VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='beach#top' className='image-container'>
                                <Image
                                    src={CoverBeach}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>BEACH VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='rivercruise#top' className='image-container'>
                                <Image
                                    src={CoverRiverCruise}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>RIVER CRUISE VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='european#top' className='image-container'>
                                <Image
                                    src={CoverEuropean}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>EUROPEAN VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='allinclusive#top' className='image-container'>
                                <Image
                                    src={CoverAllInclusive}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-nav-image'>ALL-INCLUSIVE VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
            </Container>
        </>
    )
}