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

import CoverWestjetUpgrade from '../../../assets/images/vacation_images/cover_roadtrips-ultimate.jpg';
import RoadtripsLogo from '../../../assets/logo/RoadtripsLogo.png';

import RoadVegasGrandprix from '../../../assets/images/vacation_images/roadtrips_vegasgrandprix.jpg';
import RoadSuperBowl from '../../../assets/images/vacation_images/roadtrips_superbowl.jpg';
import RoadMastersGolf from '../../../assets/images/vacation_images/roadtrips_mastersgolf.jpg';
import RoadKentuckyDerby from '../../../assets/images/vacation_images/roadtrips_kentuckyderby.jpg';
import RoadMonacoGrandprix from '../../../assets/images/vacation_images/roadtrips_monacograndprix.jpg';
import RoadSummerGames from '../../../assets/images/vacation_images/roadtrips_summergames.jpg';


export default function VacationRoadtripsUltimate() {
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
                <Image src={CoverWestjetUpgrade} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>THE ULTIMATE IN SPORTS TRAVEL</h1>
                    <p>TRAVEL AGENTS - VACATION, SPORTS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/05/26 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2530</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Combining a passion for sports with the love of travel is the perfect way to experience some of the world’s most amazing destinations. Roadtrips, a company wholly specialized in luxury sports travel, offers custom-crafted sports travel packages that will allow you to indulge these two beloved pursuits. Their extensive collection of luxury experiences includes all the big-name marquee events, like F1, the Super Bowl in Las Vegas, Wimbledon in London and the Summer Games in Paris.
                </p>
                <p>
                    Roadtrips has been designing and delivering bespoke sports travel experiences to the world’s top sporting events for over 30 years. Their knowledgeable team takes care of all the details including luxe accommodations, premium event viewing, VIP hospitality options, transportation possibilities, high-touch service and more. It is their goal to provide guests with a seamless travel experience and memories that last a lifetime — and they deliver.
                </p>
            </Container>

            <Container>
                <h2>FEATURED PROPERTIES:</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadVegasGrandprix}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Las Vegas, Nevada</div>
                        </div>
                        <h3>2023 Las Vegas Grand Prix Packages</h3>
                        <p className='fw-bold'>November 15-19, 2023</p>
                        <p className='mb-0'>Las Vegas Street Circuit, Las Vegas, NV</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadSuperBowl}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Las Vegas, Nevada</div>
                        </div>
                        <h3>2024 Super Bowl Packages</h3>
                        <p className='fw-bold'>February 8-12, 2024</p>
                        <p className='mb-0'>Allegiant Stadium, Las Vegas, NV</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadMastersGolf}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Augusta, Georgia</div>
                        </div>
                        <h3>2024 Masters Packages</h3>
                        <p className='fw-bold'>April 8-14, 2024</p>
                        <p className='mb-0'>Augusta National Golf Club, Augusta, GA</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadKentuckyDerby}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Louisville, Kentucky</div>
                        </div>
                        <h3>2024 Kentucky Derby Packages</h3>
                        <p className='fw-bold'>May 2-5, 2024</p>
                        <p className='mb-0'>Churchill Downs, Louisville, KY</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadMonacoGrandprix}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Monte Carlo, Monaco</div>
                        </div>
                        <h3>2024 Monaco Grand Prix Packages</h3>
                        <p className='fw-bold'>May 23-27, 2024</p>
                        <p className='mb-0'>Monte Carlo, Monaco</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={RoadSummerGames}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Paris, France</div>
                        </div>
                        <h3>2024 Summer Games Packages</h3>
                        <p className='fw-bold'>July 26 - August 11, 2024</p>
                        <p className='mb-0'>Paris, France</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={RoadtripsLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Upon payment of the deposit, the buyers and travelers agree to be bound by the following terms and conditions. Roadtrips and sponsoring representative(s) (collectively “Roadtrips”) are acting solely as agents. Roadtrips is responsible for making the arrangements for accommodations, services and event tickets that constitute the travel package, except to the extent that those accommodations, services or event tickets cannot be supplied or become no longer available for reasons beyond Roadtrips’ control, including without limitation a Force Majeure event. Roadtrips shall not be liable to the traveler for loss or damage arising from prevention or delay in performance of its obligations where same is a result of a Force Majeure. For the avoidance of doubt, nothing shall excuse the traveler from any payment obligations under the agreement between Roadtrips and the traveler. Contact your travel professional for full Terms & Conditions.
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
