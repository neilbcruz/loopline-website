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

import CoverTravelLeadersSingapore from '../../../assets/images/vacation_images/cover_travelleaders-singapore.jpg';

import TLGardensBay from '../../../assets/images/vacation_images/travelleaders_gardensbythebay.jpg';
import TLBuddhaTooth from '../../../assets/images/vacation_images/travelleaders_buddhatooth.jpg';
import TLMulticulturalFood from '../../../assets/images/vacation_images/travelleaders_multiculturalfood.jpg';
import TLVespaSidecar from '../../../assets/images/vacation_images/travelleaders_vespasidecar.jpg';
import TLShophouses from '../../../assets/images/vacation_images/travelleaders_shophouses.jpg';


export default function VacationTravelLeadersSingapore() {
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
                <Image src={CoverTravelLeadersSingapore} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>REIMAGINE SINGAPORE</h1>
                    <p>TRAVEL AGENTS - VACATION PACKAGE / TOUR, SINGAPORE TOURISM BOARD</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/02/28 - 2024/02/29
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 230218</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Both strikingly modern and fantastically storied, ever bustling and dreamily enchanting, the city-state of Singapore is a feast for the senses. Roughly 5 million people call this island home, and like any great city, each adds its own small contribution to the complexity of the nation’s identity.
                </p>
                <p>
                    For those lucky enough to visit, there’s no shortage of what to see or do. Spend a day wandering the distinct local districts like Kampong Gelam, Chinatown and Little India — worlds unto themselves somehow contained within city blocks. Grab a quick (but revelation-worthy) bite to eat from a Michelin-starred food stall within one of the city’s many prominent hawker centers. Or escape into the lush greenery of nature, whether by treetop walk at the Southern Ridges or a yacht-cruise to any of the 60 offshore Southern Islands. This is one of the few global cities that truly has it all.
                </p>
                <p>
                    Our travel advisors stand ready to help with more than just expert insight on what to see and do (though with a destination as immensely intricate and diverse as Singapore, recommendations are your guiding light). They can help you plan the perfect vacation — from streamlined travel to bespoke tours, with exclusive perks and amenities every step of the way.
                </p>
            </Container>

            <Container>
                <h2>FEATURED SINGAPORE AND BEYOND TOURS - JUST FOR YOU!</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={TLGardensBay}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Gardens by the Bay</div>
                        </div>
                        <h3>4-Day Singapore’s Song with SITA World Tours</h3>
                        <p className='mb-0'>Learn about Singapore’s history as you tour the quay, Chinatown, Arab Street, Little India and Orchard Road. Take in today’s modern Singapore in Gardens by the Bay and Marina Bay.</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={TLBuddhaTooth}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Buddha Tooth Relic Temple</div>
                        </div>
                        <h3>14-Day Kingdoms & Dragons: Singapore to Bali with Tauck</h3>
                        <p className='mb-0'>Explore the past, present and future on an unforgettable journey in a tropical paradise, steeped in culture and nature as you stroll through gardens of tomorrow in Singapore, explore ancient kingdoms in Java, visit flower-filled temples on Bali and see dragons of yore on timeless Komodo Islands.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={TLMulticulturalFood}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Singaporean Multi Cultural Food</div>
                        </div>
                        <h3>5-Day Singapore Discovery with Kensington Tours </h3>
                        <p className='mb-0'>See Singapore's highlights: Discover its multicultural past, incredible cuisine & eco-friendly practices. Enjoy a private tour of lively Little India, colorful Kampong Glam and historic Chinatown. Visit the world-famous Maxwell Food Center, one of the best hawker centers in the city. Visit must-see sights and stay at a handpicked selection of bespoke accommodations.</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={TLVespaSidecar}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Vespa Sidecar Tour</div>
                        </div>
                        <h3>8-Day Discover Romance in Hong Kong and Singapore with Journese </h3>
                        <p className='mb-0'>From glittering harbors, futuristic architecture and treasured relics to majestic mountains, world-class shopping, Michelin-star dining and lush gardens combined with an Asian and colonial history, Hong Kong and Singapore captivate the heart.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={TLShophouses}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Shophouses in Katong-Joo-Chia</div>
                        </div>
                        <h3>Pleasant Holidays </h3>
                        <p className='mb-0'>With its soaring skyscrapers and glittering ultra-modern architecture, Singapore must be seen to be believed. For thousands of years, the “Lion City” welcomed traders and seafarers from near and far; today, that legacy is reflected in a unique blend of cultures.</p>
                    </Col>
                </Row>
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
