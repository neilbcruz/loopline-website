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

import CoverPalaceVacation from '../../../assets/images/hotel_images/cover_palace-vacation.jpg';
import PalaceResortsLogo from '../../../assets/logo/PalaceResortsLogo.png';

import PalaceGrandSuite from '../../../assets/images/hotel_images/palace_grandsuite.jpg';
import PalacePool from '../../../assets/images/hotel_images/palace_pool.jpg';
import PalaceSpa from '../../../assets/images/hotel_images/palace_awespa.jpg';

export default function HotelPalaceVacation() {
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
                <Image src={CoverPalaceVacation} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>FAMILY VACATIONS JUST GOT BETTER</h1>
                    <p>TRAVEL AGENTS - HOTELS AND RESORTS - PALACE RESORTS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/08/21 - 2023/12/20
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/20
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2598</p>
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
                <Row className='d-flex align-items-center mb-3'>
                    <Col lg={6} className='order-lg-2'>
                        <div className='image-container'>
                            <Image
                                src={PalaceGrandSuite}
                                alt='placeholder image'
                                width='100%'
                                className='all-inclusive__image'
                            />
                            <div className='text-on-image'>Moon Palace - The Grand; Grand Family Suite</div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <p>Palace Resorts creates a luxurious atmosphere where all your family could wish for is not only included, but also easily within reach. Moon Palace – the Grand boasts one of the biggest waterparks in the Mexican Caribbean and with all the extras proves to be a full paradise for families with children. Unparalleled service, spacious accommodations, world-class dining, top-shelf drinks, nightly entertainment, non-motorized watersports, resort-wide Wi-Fi — it’s all included at their nine breathtaking oceanfront resorts.</p>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center mb-3'>
                    <Col lg={6} className='order-lg-1'>
                        <div className='image-container'>
                            <Image
                                src={PalacePool}
                                alt='placeholder image'
                                width='100%'
                                className='all-inclusive__image'
                            />
                            <div className='text-on-image'>Moon Palace Pool</div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-2'>
                        <p>Take advantage of this special offer — <strong>kids and teens stay free</strong> — to transform your vacation into the family adventure of a lifetime. Children will love The Dreamery — an enhanced playroom experience brimming with interactive activities. Plus, Wired Lounges offer the entire family the opportunity to embark on an exciting gaming journey, unlocking an entirely new level of entertainment.</p>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center mb-3'>
                    <Col lg={6} className='order-lg-2'>
                        <div className='image-container'>
                            <Image
                                src={PalaceSpa}
                                alt='placeholder image'
                                width='100%'
                                className='all-inclusive__image'
                            />
                            <div className='text-on-image'>Awe Spa® Pool</div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='order-lg-1'>
                        <p>While the little ones are being entertained and supervised, mom and dad can enjoy an adventurous under-the-sea experience diving into the Caribbean’s breathtaking marine life. Packages for certified divers include morning, afternoon and night dives. If relaxation is what you crave, then head to the Awe Spa® for the most indulgent services.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h5>Exclusive bonus: When you book your Palace Resorts escape through our agency, you will be automatically upgraded to the GOLD Standard, which comes with these privileges and benefits:</h5>
                <ul>
                    <li>Early check-in/late checkout, subject to request and availability</li>
                    <li>Personalized in-room message welcoming you to the resort</li>
                    <li>In-room welcome amenities and sparkling wine</li>
                    <li>VIP Gold seating at all shows at Moon Palace Cancun and Moon Palace The Grand Cancun</li>
                    <li>Exclusive Jamaican Rum Tasting at Moon Palace Jamaica</li>
                    <li>Exclusive Tequila Tasting Experience at Le Blanc Spa Resorts (one per stay)</li>
                    <li>Complimentary roundtrip airport transfers to our resorts with a 4-night minimum stay*</li>
                </ul>
                <h5>Plus, when you book four nights or more by September 30, 2023, you’ll receive up to 45% off, a US$500 USD Resort Credit and two free rounds at Riviera Cancun Golf Course.</h5>
                <p><strong>These exciting offers are available at all Palace Resorts properties</strong>, including Beach Palace, Cozumel Palace, Playacar Palace, Moon Palace The Grand – Cancun, Moon Palace Cancun, Moon Palace Jamaica and Sun Palace. Contact one of our Palace Resorts specialists to find your ideal destination for family fun.</p>
            </Container>

            <Container className='my-3'>
                <Image
                    src={PalaceResortsLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <h6>Terms and Conditions</h6>
                <p>
                    Kids & Teens Stay Free: Promotion applicable to kids and teens aged 0-17 years old. One paying adult must be in the same room in order to receive the kids and teens stay free promotion.
                </p>
                <p>
                    One paying adult must be in the same room to receive the kids and teens stay free promotion. Promotion is applicable in all room categories except rooms for adults only (ex: Honeymoon, Super Deluxe - Oceanfront, etc.). This promotion is not applicable to Presidential Suites in any of our properties. Minimum 4-night stay applies at all properties on select dates throughout the year. Maximum occupancy per room category applies. Promotion is based on arrival date. Age of child must be reported in the reservation and proof of age will be required upon check-in. If the child is 18 years or older at the time of check-in, the difference will be charged directly to the guest at that time. Applicable to social, wedding, and leisure groups. Not applicable to travel agent rate, tour operator, FAM trips, complimentary, or compensatory stays. Not redeemable for cash. This promotion is not transferable to guests in other rooms. Information subject to change. Additional terms and conditions may apply.
                </p>
                <p>
                    Combinable with all Palace resorts added value promotions and Kids &Teens Stay Free. Applicable to land and package bookings. Combinable with Non-refundable rate (-5%) Rounds of Golf are not applicable to Le Blanc Los Cabos & Moon Palace Jamaica. Blackout Date – Nov. 19-25, 2023; Dec 23,2023 – Jan 2, 2024; Feb 15-22, 2024; Mar 24-31,2024; Nov 23-30,2024. Blackout Date - Moon Palace The Grand Cancun: Nov. 7-10, 2023. Applicable to new reservations only. Cancellations and re-bookings will be denied. Promotion is subject to change or may be discontinued without prior notice. Not applicable to travel agent rate, tour operator employee rate, FAM trips, site inspections, Complimentary, Compensatory stays or any other rate-reduced promotions in the market. Not redeemable for cash. This promotion is not transferrable to guests in other rooms. All previously sent close-outs and inventory changes still apply and remain in place. Applicable to groups. The last day of checkout must be December 19, 2024. Resort Credit: a maximum of $100USD can be applied toward SPA in PR & MP, $165 in MPTG & $250USD in Le Blanc Brand. A 16% service fee applies to services paid with Resort Credit. Other terms and conditions may apply.
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
