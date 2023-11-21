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

import VirginVoyagesPH from '../../../assets/images/vvoyages_placeholder.jpg';
import VirginVoyagesLogo from '../../../assets/logo/VoyagesLogo.png';

import SailAway from '../../../assets/images/cruise_images/virgin_sailaway.jpg';
import RedemptionSpa from '../../../assets/images/cruise_images/virgin_redemptionspa.jpg';
import BeachClub from '../../../assets/images/cruise_images/virgin_beachclub.jpg.jpg';
import ItalianRiviera from '../../../assets/images/cruise_images/virgin_italianriviera.jpg';
import Included from '../../../assets/images/cruise_images/virgin_included.jpg';

export default function CruiseVVoyagesLuxury() {
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
                <Image src={VirginVoyagesPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>ALWAYS INCLUDED LUXURY</h1>
                    <p>TRAVEL AGENTS - CRUISES, ADULTS-ONLY, VIRGIN VOYAGES</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/01/01 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: ALL AVAILABLE SAILINGS
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: VIRGIN VOYAGES</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Taking cues from the best international cities and combining the warmth and luxury of a yacht with the endless options of a much larger ship, Virgin Voyages’ lady ships are elevated, exclusively adult environments that inspire personal and experiential connection.
                </p>
                <p>
                    Imagine vibrant conversation over homemade pasta and your favorite wine pairing. Immersive performances with (elaborate) circus twists. A fitness class you never thought to try at home. Soaking up the sun in your private cabana. Champagne delivered right to you and your new friends with the shake of the app (seriously). Greet the morning with sunrise yoga or take an evening run on the gorgeous, red-lit runway atop the ship — sweating it out or restoring yourself under the warm, glistening sun. And that’s just on the ship.
                </p>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SailAway}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sail Away</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RedemptionSpa}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Redemption Spa</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2>THE WORLD AWAITS</h2>
                    <p>Off the ship, you’ll explore stunning coastal hotspots, dive through crystalline waters to the kaleidoscopic reefs of Roatán, island hop from Santorini to Mykonos, or sip Chianti on the cobblestone-lined streets of the Italian Riviera.</p>
                    <p>Virgin Voyages has curated itineraries featuring longer port stays and overnights in some of the most idyllic islands and effervescent cities. And, in the Caribbean, every sailing from Miami includes a long day at their private slice of Bahamian paradise: The Beach Club at Bimini. Float through the pool, relax beachside in a private cabana, and take in the vibrant sunset as you say your goodbyes with an epic bonfire soirée.</p>
                    <p>From serene, azure waters to vibrant, coastal cityscapes, come aboard and sea the world The Virgin Way.</p>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BeachClub}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>The Beach Club at Bimini</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={ItalianRiviera}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Italian Riviera</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2>DESTINATIONS DONE DIFFERENTLY</h2>
                    <p>Enjoy late stays and overnights in dream destinations on 2 to 15-night itineraries around the Caribbean, Mediterranean and Oceania, from homeports in Miami, San Juan, Barcelona, Piraeus (Athens), Melbourne and Auckland.</p>
                </Row>
                <Row>
                    <div>
                        <iframe
                            width='100%'
                            height='400'
                            src='https://www.youtube.com/embed/UOTU2BjYw80'
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='my-3'
                        ></iframe>
                    </div>
                </Row>
            </Container>

            <Container className='my-3'>
                <h2>GET ALL THIS INCLUDED</h2>
                <p>Every Voyage includes over $600 in added value. No hidden fees. No surprises.</p>
                <Image
                    src={Included}
                    className='logo-image'
                />
                <h2>AWARDS & RECOGNITION</h2>
                <p>Awarded “Best New Ship of 2021” by Cruise Critic</p>

            </Container>

            <Container className='my-3'>
                <h2 className='text-center'>CONTACT A TRAVEL AGENT TODAY TO BOOK YOUR NEXT VIRGIN VOYAGES SAILING</h2>
                <Image
                    src={VirginVoyagesLogo}
                    className='logo-image'
                />
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
