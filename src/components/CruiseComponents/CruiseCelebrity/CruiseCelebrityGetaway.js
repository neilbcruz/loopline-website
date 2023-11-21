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

import SouthBeach from '../../../assets/images/cruise_images/celebrity_southbeach.jpg';
import CocoBeach from '../../../assets/images/cruise_images/celebrity_cocobeach.jpg';
import ChillIsland from '../../../assets/images/cruise_images/celebrity_chillisland.jpg';
import OasisLagoon from '../../../assets/images/cruise_images/celebrity_oasislagoon.jpg';
import ThrillWaterpark from '../../../assets/images/cruise_images/celebrity_thrillwaterpark.jpg';
import UpUpAway from '../../../assets/images/cruise_images/celebrity_upupaway.jpg';

import LawnClub from '../../../assets/images/cruise_images/celebrity_lawnclub.jpg';
import BeachClub from '../../../assets/images/cruise_images/celebrity_beachclub.jpg';
import Catamaran from '../../../assets/images/cruise_images/celebrity_catamaran.jpg';
import FloatPools from '../../../assets/images/cruise_images/celebrity_floatpools.jpg';

export default function CruiseCelebrityGetaway() {
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
                <Image src={CelebrityPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>AN EXCLUSIVE GETAWAY WITH CELEBRITY CRUISES</h1>
                    <p>TRAVEL AGENTS - CRUISE, CELEBRITY, CARIBBEAN</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/09/11 - 2023/10/03
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: SUMMER 2024
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2620</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Our travel agency can help you plan all the details of your vacation aboard Celebrity Cruises®, now sailing to one of the Caribbean’s most exclusive islands, Perfect Day at CocoCay. Royal Caribbean’s award-winning private island destination combines the best of beachside bliss and sun-soaked excitement.
                </p>
                <p>
                    Whatever your speed, Perfect Day at CocoCay has so many ways to escape the everyday. Cool off with friends and family in the Caribbean’s largest freshwater pool. Swim up to the bar for a refreshing tropical cocktail. Share a selfie from a hot air balloon soaring 450 feet above the island. Whether you want to chill out or live it up, Perfect Day at CocoCay is the perfect place to do it all.
                </p>
                <p>
                    Our travel agency can help you plan your incredible vacation aboard Celebrity Cruises. We won’t just cover all the fine details like flights and transfers, we’ll also help you select the perfect options from a variety of ships and itineraries. Start planning your vacation today and you'll enjoy <strong>Drinks, Wi-Fi and Tips - All Included, plus an exclusive amenity of US$50 onboard credit, only when you book through our agency.</strong>
                </p>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SouthBeach}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>SOUTH BEACH</h3>
                        <p>Swim, play, relax and repeat at South Beach, where beach volleyball, seaside basketball and cabana lounging combine to create the perfect day.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={CocoBeach}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>COCO BEACH CLUB®</h3>
                        <p>Perfect your relaxation with ocean-view infinity pools, poolside service, upscale dining and private Overwater Cabanas at Coco Beach Club.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={ChillIsland}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>CHILL ISLAND®</h3>
                        <p>Reconnect on the tranquil Chill Island beach with private cabanas, waterside BBQ and guided Wave Jet tours for the ultimate island experience.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={OasisLagoon}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>OASIS LAGOON</h3>
                        <p>Recharge at the Caribbean's largest freshwater pool, offering various coves, a kid-friendly area, swim-up bar and private cabanas.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={ThrillWaterpark}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>THRILL WATERPARK</h3>
                        <p>Experience thrilling adventures for the whole family at Thrill Waterpark, featuring obstacle courses, wave pools and North America's tallest waterslide.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={UpUpAway}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                        </div>
                        <h3>UP, UP, AND AWAY</h3>
                        <p>Take your perspective to new heights aboard a helium balloon soaring 450 feet above Perfect Day at CocoCay, capturing breathtaking views and envy-worthy photos.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={LawnClub}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Celebrity Reflection® Lawn Club</div>
                        </div>
                        <h3>5-Night Western Caribbean and Perfect Day</h3>
                        <p>
                            <em>Celebrity Reflection®</em>
                            <br></br>
                            Departs April 21, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Perfect Day at CocoCay, Bahamas; Cozumel, Mexico</p>
                        <p className='fw-bold'>Oceanview from $1,510 per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per stateroom</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BeachClub}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Coco Beach Club®</div>
                        </div>
                        <h3>4-Night Bahamas and Perfect Day</h3>
                        <p>
                            <em>Celebrity Reflection®</em>
                            <br></br>
                            Departs May 20, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Perfect Day at CocoCay, Bahamas; Nassau, Bahamas</p>
                        <p className='fw-bold'>Oceanview from $1,128 per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per stateroom</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Catamaran}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Catamaran in Grand Cayman</div>
                        </div>
                        <h3>6-Night Western Caribbean and Perfect Day</h3>
                        <p>
                            <em>Celebrity Beyond℠</em>
                            <br></br>
                            Departs May 26, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Perfect Day at CocoCay, Bahamas; George Town, Grand Cayman; Bimini, Bahamas</p>
                        <p className='fw-bold'>Oceanview from $2,149 per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per stateroom</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={FloatPools}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Celebrity Beyond℠, Float Pools</div>
                        </div>
                        <h3>6-Night Western Caribbean and Perfect Day</h3>
                        <p>
                            <em>Celebrity Beyond℠</em>
                            <br></br>
                            Departs July 7, 2024,
                        </p>
                        <p>Fort Lauderdale, FL; Perfect Day at CocoCay, Bahamas; George Town, Grand Cayman; Bimini, Bahamas</p>
                        <p className='fw-bold'>Oceanview from $2,281 per person</p>
                        <p className='mb-0'><strong>Exclusive Amenity:</strong> US$50 Onboard Credit per stateroom</p>
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
                    “All Included” Pricing applies to sailings booked and departing on or after Jan. 09, 2023, excluding Galapagos cruises, in an inside through Concierge Class stateroom (“Eligible Bookings”). All guests in an Eligible Booking who choose the “All Included” pricing package, as well as, guests booked in an AquaClass® stateroom, will receive a Classic Drinks Package, Tips Included and an unlimited Basic Wi-Fi package. All guests in The Retreat will receive a Premium Drinks Package, Tips Included, OBC and an unlimited Premium Wi-Fi Package. OBC amounts for Retreat guests are per person and vary by sailing length; 1 to 5 Nights $200 p/p; 6 to 9 Nights $300 p/p; 10 Nights and longer $400 p/p. All guests in the same stateroom must choose the same rate. Standard full deposit penalty is applied if booking is cancelled within final payment period; see CEL’s cancellation policy for details.
                </p>
                <p>
                    Exclusive Amenity: sailing dates and amenities, are current at time of printing and are subject to change without notice.  All individual cruise line policies and procedures apply; please refer to each cruise line brochure for details. Cancellations, refunds and penalties are those imposed by the individual cruise lines. Guests must be booked in a featured group departure to receive amenities. Amenities apply to 1st and 2nd passengers only. If group space has been recalled or canceled by the cruise line, amenities cannot be applied.
                </p>
                <p>
                    Onboard credit is not redeemable for cash and expires on final night of the cruise. All Included pricing applies to new individual bookings and staterooms in non-contracted group bookings, are non-transferable, and not applicable to charters or contracted groups. Changes to booking may result in removal of pricing. Visit celebrity.com for complete details. Celebrity Cruises reserves the right to cancel offer at any time, correct any errors, inaccuracies, or omissions, and change or update fares, fees, and surcharges at any time without prior notice. ©2023 Celebrity Cruises. Ships’ registry: Malta and Ecuador.
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
