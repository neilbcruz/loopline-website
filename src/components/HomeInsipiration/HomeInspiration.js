import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import AustraliaPH from '../../assets/images/australia_placeholder.jpg';
import ItalyPH from '../../assets/images/italy_placeholder.jpg';
import HawaiiPH from '../../assets/images/hawaii_placeholder.jpg';
import NZPH from '../../assets/images/nz_placeholder.jpg';

import CruisePH from '../../assets/images/cruise_placeholder.jpg';
import FamilyPH from '../../assets/images/family_placeholder.jpg';
import WeddingPH from '../../assets/images/wedding_placeholder.jpg';
import AdventurePH from '../../assets/images/adventure_placeholder.jpg';
import WildlifePH from '../../assets/images/wildlife_placeholder.jpg';
import RomanticPH from '../../assets/images/romantic_placeholder.jpg';
import GolfPH from '../../assets/images/golf_placeholder.jpg';
import BeachPH from '../../assets/images/beach_placeholder.jpg';
import RiverCruisePH from '../../assets/images/rivercruise_placeholder.jpg';
import EuropeanPH from '../../assets/images/european_placeholder.jpg';
import AllInclusivePH from '../../assets/images/allinclusive_placeholder.jpg';

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
                <h2>DESTINATION INSPIRATION</h2>
                <p>Find your dream vacation. You can share your trip with your friends or contact an agent to make it happen!</p>
            </Container>
            <Container className='text-center mb-5'>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='australia#top' className='image-container'>
                            <Image
                                src={AustraliaPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>AUSTRALIA VACATIONS</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='italy#top' className='image-container'>
                            <Image
                                src={ItalyPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>ITALY VACATIONS</div>
                        </HashLink>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={6} className='pe-md-0'>
                        <HashLink to='hawaii#top' className='image-container'>
                            <Image
                                src={HawaiiPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>HAWAII VACATIONS</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='nzealand#top' className='image-container'>
                            <Image
                                src={NZPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>NEW ZEALAND VACATIONS</div>
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
                                src={CruisePH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>WHY CHOOSE A CRUISE VACATION?</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='family#top' className='image-container'>
                            <Image
                                src={FamilyPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>FAMILY VACATIONS</div>
                        </HashLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <HashLink to='wedding#top' className='image-container'>
                            <Image
                                src={WeddingPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <HashLink to='adventure#top' className='image-container'>
                            <Image
                                src={AdventurePH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>ADVENTURE VACATIONS</div>
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
                                    src={WildlifePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>WILDLIFE & SAFARI VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='romantic#top' className='image-container'>
                                <Image
                                    src={RomanticPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>ROMANTIC VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='golf#top' className='image-container'>
                                <Image
                                    src={GolfPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>GOLF VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='beach#top' className='image-container'>
                                <Image
                                    src={BeachPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>BEACH VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='rivercruise#top' className='image-container'>
                                <Image
                                    src={RiverCruisePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>RIVER CRUISE VACATIONS</div>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <HashLink to='european#top' className='image-container'>
                                <Image
                                    src={EuropeanPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>EUROPEAN VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <HashLink to='allinclusive#top' className='image-container'>
                                <Image
                                    src={AllInclusivePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>ALL-INCLUSIVE VACATIONS</div>
                            </HashLink>
                        </Col>
                    </Row>)}
            </Container>
        </>
    )
}