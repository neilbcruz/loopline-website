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

import CelebrityPH from '../../../assets/images/celebrity_placeholder.jpg';
import CelebrityLogo from '../../../assets/logo/CelebrityCruisesLogo.png';

import StThomasPH from '../../../assets/images/cruise_images/stlucia_placeholder.jpg';
import CuracaoPH from '../../../assets/images/cruise_images/curacao_placeholder.jpg';
import AscentPH from '../../../assets/images/cruise_images/ascent_placeholder.jpg';
import CococayPH from '../../../assets/images/cruise_images/cococay_placeholder.jpg';

export default function CruiseCelebrityResort() {
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
                <Image src={CelebrityPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>RESORT AT SEA</h1>
                    <p>TRAVEL AGENTS -<br></br>CRUISE, CRUISING, CELEBRITY CRUISES</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2022/11/08 - 2023/12/10
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2023/11/15 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2671</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Seeing the world on a Celebrity Cruises® ship is more than just a vacation — it’s sailing in luxury and relaxation. When you board a Celebrity ship, you can take your chances at the onboard casinos, explore flavors from around the world without leaving your table or even sign up for archery tournaments to take a shot at the bull’s-eye.
                </p>
                <p>
                    In December 2023, Celebrity Cruises will launch its newest ship — Celebrity AscentSM — which will invite you to retreat into a vast selection of staterooms and suites. Take a break at the adults-only SEA Thermal Suite spa and choose among eight luxurious spaces to unwind or pull up a chair to Celebrity Cruises’ Michelin-starred chef restaurant Luminae at The Retreat.
                </p>
                <p>
                    Dive into Ascent’s culinary experiences like chef Daniel Boulud's inaugural sea venture, Le VoyageSM, that will take you on a global culinary journey, offering dishes inspired by the places that fuel his creativity. Also, don’t miss Eden Restaurant, the place that provides a multisensory culinary experience, drawing inspiration from diverse cuisines and regions worldwide.
                </p>
                <p>
                    For the first time ever in 2024, Celebrity Cruises is taking you to one of the Caribbean’s most exclusive destinations, Perfect Day at CocoCay, Royal Caribbean’s award-winning private island destination. Step ashore and experience the best of beachside bliss and sun-soaked excitement. From taking on the tallest waterslide in North America to unwinding in your own Overwater Cabana or retreating to the newly added Hideaway BeachSM, an adults-only beachfront paradise.
                </p>
                <p>
                    Book your cruise now to take advantage of this great offer: <strong>Drinks, Wi-Fi and Tips — All Included + Receive US$50 Onboard Credit per Stateroom, only through our agency.</strong>
                </p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={StThomasPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>St. Lucia</div>
                        </div>
                        <h3>10-Night Ultimate Southern Caribbean</h3>
                        <p>
                            <em>Celebrity Silhouette®</em>
                            <br></br>
                            March 25, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Philipsburg, St Maarten; Castries, St. Lucia; Bridgetown, Barbados; Roseau, Dominica; St. John’s, Antigua; Fort Lauderdale</p>
                        <p className='fw-bold'>Oceanview from $xxx per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per Stateroom</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={CuracaoPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Willemstad, Curaçao</div>
                        </div>
                        <h3>8-Night Aruba, Bonaire & Curacao</h3>
                        <p>
                            <em>Celebrity Beyond®</em>
                            <br></br>
                            August 24, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Oranjestad, Aruba; Kralendijk, Bonaire; Willemstad, Curaçao; Fort Lauderdale, FL</p>
                        <p className='fw-bold'>Oceanview from $xxx per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per Stateroom</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AscentPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Celebrity AscentSM</div>
                        </div>
                        <h3>12-Night Italy, France & Spain</h3>
                        <p>
                            <em>Celebrity AscentSM</em>
                            <br></br>
                            September 2, 2024
                        </p>
                        <p>Barcelona, Spain; Seville, Spain; Gibraltar, United Kingdom; Malaga, Spain; Nice, France; Florence, Italy (overnight); Rome, Italy; Santa Margherita, Italy; Barcelona, Spain</p>
                        <p className='fw-bold'>Oceanview from $xxx per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per Stateroom</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={CococayPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Hideaway Beach</div>
                        </div>
                        <h3>4-Night Key West & Perfect Day</h3>
                        <p>
                            <em>Celebrity Reflection®</em>
                            <br></br>
                            September 2, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Key West, FL; Perfect Day  at CocoCay, Bahamas; Fort Lauderdale, FL</p>
                        <p className='fw-bold'>Oceanview from $xxx per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per Stateroom</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={CelebrityLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    *Price is per person, in CAD, includes cruise fare, taxes, fees and other port expenses, applies to select sailings, oceanview stateroom, based on double-occupancy, and reflects any promotional savings.
                </p>
                <p>
                    Cruise must be booked 11/08/2023 – 12/10/2023 (the “Offer Period”) and applies to 3-night and longer sailings departing 11/15/2023 - 12/31/2024 (the “Offer Cruise”). Promo code not required.
                </p>
                <p>
                    All new bookings with Headquarter Groups pricing named and deposited within a 2024 Headquarter group will receive Classic Drinks, Basic Wi-Fi and Tips PLUS $50 OBC per stateroom. FIT to group transfers are eligible to receive the $50 OBC. FIT to group transfers are not eligible to receive the three perks (Classic Drinks, Basic Wi-Fi and Tips) at the group level but will retain any perks booked in FIT. Combinable with brand promotion where applicable.
                </p>
                <p>
                    Itineraries, ships and prices are subject to change without notice. Government taxes, fees and port expenses are additional.  Space is capacity controlled and may be withdrawn or closed at any time. Onboard credit is not redeemable for cash; not transferable; quoted in US Dollars and will expire if not used by 10:00 PM on the final night of the cruise. Onboard credit offer is valid on select sailings only.
                </p>
                <p>
                    Celebrity Cruises reserves the right to cancel offer at any time, correct any errors, inaccuracies, or omissions, and change or update fares, fees, and surcharges at any time without prior notice. ©2023 Celebrity Cruises. Ships’ registry: Malta and Ecuador
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
