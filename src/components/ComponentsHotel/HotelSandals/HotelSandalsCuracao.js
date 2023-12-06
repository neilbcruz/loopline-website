import {
    Container,
    Image,
    Button,
    Row,
    Col,
    Stack
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverSandalsCuracao from '../../../assets/images/hotel_images/cover_sandals-curacao.jpg';
import SandalsLogo from '../../../assets/logo/SandalsLogo.png';

import SeasideButlerBungalows from '../../../assets/images/hotel_images/sandals_seasidebutlerbungalows.jpg';

export default function HotelSandalsCuracao() {
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
                <Image src={CoverSandalsCuracao} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>SANDALS ROYAL CURAÇAO - WHERE AMAZING COMES TOGETHER</h1>
                    <p>TRAVEL AGENTS - RESORTS - SANDALS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/05/25 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2023/06/01 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 10024</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    For the last four decades, Sandals Resorts has cultivated the most sought-after stretches of sand in the world, transforming them into tropical oases stocked with more amenities, more luxury, more innovations and more choices than most other beach resorts.
                </p>
                <p>
                    Such is the case with Sandals Royal Curaçao — the all-new adults-exclusive, all-inclusive paradise nestled in the heart of the Leeward Antilles. At this resort, designed with lovers in mind, you and your better half will be awash in never-before-seen Sandals signature accommodations: the first-ever Awa Seaside Bungalows with private pools, the first Kurason Island Suites overlooking a heart-shaped pool and the unique Dos Awa 2-Level Infinity Pool are all bound to excite and delight. Twelve all-new dining concepts — including Sandals’ first-ever floating restaurant and three new food trucks — will no doubt tickle your taste buds. And add in the fact that the opportunity for romantic adventures spans across the entire isle of Curaçao (especially with the complimentary MINI Cooper available for guests in select rooms), and you’ll see this isn’t your regular romantic getaway. This is a chance at feeling life’s wind at your sail — a chance you can’t pass up.
                </p>
            </Container>

            <Container className='my-3'>
                <h2 className='text-center'>FEATURED RESORT</h2>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='order-lg-1'>
                        <div className='image-container'>
                            <Image
                                src={SeasideButlerBungalows}
                                alt='placeholder image'
                                width='100%'
                                className='all-inclusive__image'
                            />
                            <div className='text-on-image'>Seaside Butler Bungalows</div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-2'>
                        <h2>Sandals Royal Curaçao</h2>
                        <p>Santa Barbara, Curaçao</p>
                        <p>Resort Mood: Laid-back, Elegant</p>
                        <ul>
                            <li>8 world-class restaurants</li>
                            <li>3 food trucks</li>
                            <li>Awa Seaside Bungalows with private pool</li>
                            <li>Kurason Island Suites overlooking heart-shaped pool</li>
                            <li>PADI® certified scuba diving</li>
                            <li>Red Lane® Spa and more</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={SandalsLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <h6>Terms and Conditions</h6>
                <Stack>
                    <p>
                        <strong>UP TO $1000 INSTANT CREDIT</strong>
                    </p>
                    <p>
                        <strong>Get Up to $1,000 Grand Opening Offer.</strong>
                    </p>
                    <p>
                        Booking window: Now - Until further notice.
                    </p>
                    <p>
                        <strong>For travel Jun. 1, 2022 - Dec. 31, 2024.</strong>
                    </p>
                    <p>
                        $1,000 Instant Credit on 7-paid nights or longer
                        <br></br>
                        $775 Instant Credit on 6-paid nights
                        <br></br>
                        $505 Instant Credit 5-paid nights
                        <br></br>
                        $375 Instant Credit on 4-paid nights
                    </p>
                    <ul>
                        <li>Offer is valid for new bookings only.</li>
                        <li>$1,000, $775, $505 & $375 Instant Credits are in USD, applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable.</li>
                        <li>Offer is combinable with other Sandals consumer saving promotions.</li>
                        <li>Credit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable.</li>
                        <li>Offers are combinable with Sandals Select Rewards Point promotions.</li>
                        <li>Sandals Select Program Members are able to redeem up to 50% of their total booking price minus all the discounts.</li>
                        <li>Booking names must match the Sandals Select Membership account or it will be null and void.</li>
                        <li>Unique Travel Corp., reserves the right to verify all accounts prior to adjusting reservations. Limit one redemption reservation per member.</li>
                        <li>Offers may not be applicable to group bookings.</li>
                        <li>All featured prices are in US Dollars.</li>
                        <li>Offers are subject to availability throughout promotional period. Other restrictions and limitations may apply.</li>
                        <li>Offer is subject to change or withdrawn at any time.</li>
                        <li>Not responsible for errors or omissions.</li>
                    </ul>
                </Stack>
                <Stack>
                    <p>
                        <strong>GET UP TO 55% OFF RACK RATES</strong>
                    </p>
                    <p>
                        Save up to 55% off rack rates when you book a minimum of 3+ nights at this resort.
                    </p>
                    <p>
                        <strong>For travel now - Until further notice.</strong>
                    </p>
                    <ul>
                        <li>View <a href='https://www.sandals.com/royal-curacao/rooms-suites/' target='_blank' rel='noreferrer'>Accommodations Page</a> to see applicable room categories.</li>
                        <li>Maximum 2 person limit for offer.</li>
                        <li>Offer is based on double occupancy, minimum 3-PAID nights stay.</li>
                        <li>Promotion is combinable with certain Sandals savings promotions.</li>
                        <li>Other percent-off savings depend on room category and time of travel.</li>
                        <li>Blackout dates may apply.</li>
                        <li>Group bookings may be subject to space availability and blackout dates.</li>
                        <li>Offer may be changed or withdrawn at any time.</li>
                        <li>Not responsible for errors or omissions.</li>
                    </ul>
                </Stack>
                <Stack>
                    <p>
                        <strong>$250 DINE OUT CREDIT</strong>
                    </p>
                    <p>
                        <strong>Island Inclusive Dining</strong>
                        <br></br>
                        Introducing the First-Ever Dine Out Program.
                    </p>
                    <p>
                        Receive a $250 Dine Out Credit and choose from a curated collection of eight local restaurants ranging from cool to classic that serve up delectable authentic cuisine showcasing the creativity of local chefs and the amazing ways they channel their passion into unique culinary experiences.
                    </p>
                    <p>
                        Plus, round-trip transfers to the restaurants are included!
                    </p>
                    <p>
                        Available for qualifying bookings at Sandals Royal Curaçao:
                    </p>
                    <ul>
                        <li>7+ paid nights in a butler suite.</li>
                        <li>7+ paid nights in any room category for Diamond Level and above Sandals Select Rewards members.</li>
                    </ul>
                    <p>
                        For more details please visit: <a href='https://www.sandals.com/disclaimers/Dine-out/' target='_blank' rel='noreferrer'>www.sandals.com/disclaimers/Dine-out/</a>.
                    </p>
                </Stack>
                <Stack>
                <p>
                        <strong>CONVERTIBLE MINI COOPER ADVENTURE DRIVE</strong>
                    </p>
                    <p>
                    Adventure First! Guests exclusively in the Kurason Island Suites and Awa Seaside Bungalows can explore the beautiful attractions Curacao has to offer with your own stylish fully-serviced Convertible MINI Cooper that you can reserve and drive during your stay!
                    </p>
                    <p>
                        <strong>For travel Jun. 1, 2022 - Until further notice.</strong>
                    </p>
                    <ul>
                        <li>Inclusion is valid for new bookings only, per one qualifying booking.</li>
                        <li>Inclusion valid at Sandals Royal Curacao only.</li>
                        <li>Inclusion valid only on the following room categories: Awa Seaside Butler Bungalow with Private Pool (ASP) and the Kurason Island Poolside Butler Bungalow with Patio Tranquility Soaking Tub (KB).</li>
                        <li>Qualifying bookings may be eligible to reserve a onetime 3 ½ hour driving session, upon arrival through your butler, to drive the MINI Cooper Convertible off property and around the island.</li>
                        <li>The fully serviced MINI Cooper will include: 3 ½ hours of use, a guided map, gas, and a picnic basket with snacks, water and soda prepared by your Butler prior to your adventure drive. In addition, your butler phone will have a fully-functioning GPS to help get your around. This is capacity controlled and available at a first come, first serve basis so please reserve it upon arrival.</li>
                        <li>MINI Cooper will NOT be used for airport transfers.</li>
                        <li>MINI Cooper will be permitted for daytime use only. There will be a morning and afternoon slot each day.</li>
                        <li>Inclusion valid for bookings made now - until further notice.</li>
                        <li>Inclusion valid for travel April 14, 2022 - until further notice.</li>
                        <li>The inclusion has no cash value and cannot be sold, exchanged, or transferred to another booking.</li>
                        <li>This inclusion is not applicable to bookings with industry rates.</li>
                        <li>Inclusion is subject to change and can be withdrawn at any time.</li>
                        <li>Unique Vacations and Sandals Resorts are not responsible for errors and omissions.</li>
                    </ul>
                </Stack>
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
