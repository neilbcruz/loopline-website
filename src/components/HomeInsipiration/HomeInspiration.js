import {
    Container,
    Row,
    Image,
    Col,
    Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                        <NavLink to='/australia' className='image-container'>
                            <Image
                                src={AustraliaPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>AUSTRALIA VACATIONS</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <NavLink to='/italy' className='image-container'>
                            <Image
                                src={ItalyPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>ITALY VACATIONS</div>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={6} className='pe-md-0'>
                        <NavLink to='/hawaii' className='image-container'>
                            <Image
                                src={HawaiiPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>HAWAII VACATIONS</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <NavLink to='/nzealand' className='image-container'>
                            <Image
                                src={NZPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>NEW ZEALAND VACATIONS</div>
                        </NavLink>
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
                        <NavLink to='/ideacruise' className='image-container'>
                            <Image
                                src={CruisePH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>WHY CHOOSE A CRUISE VACATION?</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <NavLink to='/ideafamily' className='image-container'>
                            <Image
                                src={FamilyPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>FAMILY VACATIONS</div>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0'>
                        <NavLink to='/ideawedding' className='image-container'>
                            <Image
                                src={WeddingPH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>PLANNING YOUR WEDDING & HONEYMOON</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0'>
                        <NavLink to='/ideaadventure' className='image-container'>
                            <Image
                                src={AdventurePH}
                                alt='placeholder image'
                                width='100%'
                                className='image_hover'
                            />
                            <div className='text-on-image'>ADVENTURE VACATIONS</div>
                        </NavLink>
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
                            <NavLink to='/ideawildlife' className='image-container'>
                                <Image
                                    src={WildlifePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>WILDLIFE & SAFARI VACATIONS</div>
                            </NavLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <NavLink to='/idearomantic' className='image-container'>
                                <Image
                                    src={RomanticPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>ROMANTIC VACATIONS</div>
                            </NavLink>
                        </Col>
                    </Row>)}
                {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <NavLink to='/ideagolf' className='image-container'>
                                <Image
                                    src={GolfPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>GOLF VACATIONS</div>
                            </NavLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <NavLink to='/ideabeach' className='image-container'>
                                <Image
                                    src={BeachPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>BEACH VACATIONS</div>
                            </NavLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <NavLink to='/idearivercruise' className='image-container'>
                                <Image
                                    src={RiverCruisePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>RIVER CRUISE VACATIONS</div>
                            </NavLink>
                        </Col>
                        <Col xs={12} md={6} className='ps-md-0'>
                            <NavLink to='/ideaeuropean' className='image-container'>
                                <Image
                                    src={EuropeanPH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>EUROPEAN VACATIONS</div>
                            </NavLink>
                        </Col>
                    </Row>)}
                    {showRows && (
                    <Row>
                        <Col xs={12} md={6} className='pe-md-0'>
                            <NavLink to='/ideaallinclusive' className='image-container'>
                                <Image
                                    src={AllInclusivePH}
                                    alt='placeholder image'
                                    width='100%'
                                    className='image_hover'
                                />
                                <div className='text-on-image'>ALL-INCLUSIVE VACATIONS</div>
                            </NavLink>
                        </Col>
                    </Row>)}
            </Container>
        </>
    )
}