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

import CoverCaribbean from '../../../assets/images/cruise_images/cover_caribbean.jpg';
import RoyalCaribbeanLogo from '../../../assets/logo/RoyalCarribeanLogo.png';

import Cloud17 from '../../../assets/images/cruise_images/royalcaribbean_icon-cloud17.jpg';
import Overlook from '../../../assets/images/cruise_images/royalcaribbean_icon-overlook.jpg';
import Empire from '../../../assets/images/cruise_images/royalcaribbean_icon-empire.jpg';
import Surfside from '../../../assets/images/cruise_images/royalcaribbean_icon-surfside.jpg';
import HurricanHunter from '../../../assets/images/cruise_images/royalcaribbean_icon-hurricanehunter.jpg';
import Cococay from '../../../assets/images/cruise_images/royalcaribbean_cococay.jpg';
import IconOfTheSeas from '../../../assets/images/cruise_images/royalcaribbean_iconseas.jpg';

export default function CruiseCaribbeanIcon() {
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
                <Image src={CoverCaribbean} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>THE ICON OF VACATIONS℠</h1>
                    <p>TRAVEL AGENTS - CRUISES, CARIBBEAN, ROYAL CARIBBEAN</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/01 - 2023/12/04
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: JANUARY 2024 - APRIL 2025
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 1512</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Arriving January 2024, Icon of the SeasSM will be a first-of-its-kind Royal Caribbean® adventure where guests will have the time of their lives, multiple times a day. Make the most of every moment onboard. Dial up the daring. Experience the coolest innovations at sea. Unwind like never before. Bond over new bites and toast to next-level nightlife. And catch showstopping spectaculars that will leave you in awe. This is your chance to enjoy everything you’ve ever loved about every vacation — all rolled into one.
                </p>
                <p className='fw-bold'>Book now through our agency, you’ll receive 30% Off Every Guest + Kids Sail Free + Up to US$150 Off. Contact us for details.</p>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Cloud17}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Cloud17℠</div>
                        </div>
                        <h3>Pool-Hop Nonstop</h3>
                        <p>The new <em>Icon of the Seas</em> has an all-you-can-swim buffet of unique pools to satisfy any mood you’re in. Take your pick of seven different pools plus nine whirlpools. And you’ll always feel connected to the sea with next-level ocean views from every one. It’s your day your way, so soak up every minute.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Overlook}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Overlook℠ Pods</div>
                        </div>
                        <h3>Iconic Bars & Nightlife</h3>
                        <p>When the sun goes down, your nights on board light up with possibilities. With over 15 buzzing spots and live music venues, every night overflows with ways to raise the bar on spirit-sipping and show-stopping.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Empire}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Empire Supper Club℠</div>
                        </div>
                        <h3>Dining Galore</h3>
                        <p>Those with an appetite for adventure can have their pick of more than 20 new and signature ways to dine and make memories. Special occasions get the VIP treatment at Empire Supper Club℠, while kids will love the sweet and salty noshes at Surfside Bites℠.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Surfside}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Surfside Neighborhood</div>
                        </div>
                        <h3>Ultimate Family Time</h3>
                        <p><em>Icon of the Seas</em> takes family vacations to the highest level possible. Make the most of every moment with incredible onboard activities the whole family will love along with first-of-its-kind experiences you will not find anywhere else.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={HurricanHunter}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Hurrican Hunter℠</div>
                        </div>
                        <h3>Category 6 Waterpark</h3>
                        <p>The largest waterpark at sea debuts with six record-breaking slides, including Hurricane Hunter℠, the first family raft slide at sea, and Frightening Bolt, the tallest drop slide at sea.</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Cococay}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Perfect Day at CocoCay</div>
                        </div>
                        <h3>Adventures To Perfect Day</h3>
                        <p>Through April 2025, <em>Icon of the Seas</em> itineraries will feature a day at Perfect Day at CocoCay, am award-winning  private island only accessible to Royal Caribbean guests. While your kids head to the Caribbean’s largest wave pool and one of its tallest waterslides, Daredevil’s Peak®, you can grab a drink at the swim-up bar and soak up the scene in the largest freshwater pool in the Caribbean.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Col xs={12} lg={6}>
                        <div className='image-container'>
                            <Image
                                src={IconOfTheSeas}
                                width='100%'
                                className='all-inclusive__image my-2'
                            />
                            <div className='text-on-image'>Icon of the Seas℠</div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div>
                            <h2>FEATURED SAILING:</h2>
                            <h3>7-Night Eastern & Western Caribbean & Perfect Day</h3>
                            <p>
                                <em>Icon of the Seas℠</em>
                                <br></br>
                                January 2024 - April 2025
                                <br></br>
                                Departing from Miami, Florida
                            </p>
                            <p className='fw-bold'>Starting from US$1,668 per person</p>
                            <p><small>Taxes, fees, port expenses of US$203 per person are additional</small></p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={RoyalCaribbeanLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    * Price is per person, in USD, cruise only, applies to select sailings, interior stateroom, based on double-occupancy, and reflects any promotional savings.
                </p>
                <p>
                    30% Off Every Guest applies to new bookings made between November 1 – December 4, 2023 (“Offer Period”) on sailings departing on or after December 1, 2023, and provides 30% savings off the cruise fare for all guests in the stateroom. Savings will be applied to cruise fare at checkout.
                </p>
                <p>
                    Kids Sail Free applies to new bookings made between November 1 – December 4, 2023 (“Offer Period”) on sailings departing between December 1, 2023 – April 25, 2026 (“Offer Cruise”), providing free cruise fare for third guests and higher who are 12 years old and younger as of Offer Cruise departure date on sailings 3 nights or longer booked in the same stateroom as the first two qualifying guests in a triple or quad occupancy stateroom. Kids Sail Free excludes Thanksgiving Sailings departing between November 17, 2023 – November 24, 2023; November 22, 2024 – November 29, 2024; November 20, 2025 – November 28, 2025, Holiday sailings departing between December 16, 2023 – January 5, 2024; December 20, 2024 – January 3, 2025; December 18, 2025 – January 6, 2026, Spring break sailings departing March 8, 2024 – March 22, 2024; March 7, 2025 – March 28, 2025; March 6, 2026 – April 9, 2026, Holy Week/Easter sailings departing March 22, 2024 – April 4, 2024; April 12, 2025 – April 24, 2025 and Summer Sailings departing May 22, 2024 – August 30, 2024; May 22, 2025 – August 29, 2025. Taxes, fees, and port expenses are additional and apply to all guests.
                </p>
                <p>
                    2024 Kicker applies to new bookings made between November 1 – 9, 2023 (“Offer Period”) on all sailings departing between January 1, 2024 – December 31, 2024 (“Offer Cruise”) and provides instant savings of up to $150 USD per stateroom. Savings amount varies by stateroom category booked and sailing length as follows: 5 nights or less, $50 USD savings for Interior, Ocean view and Balcony and $100 USD savings for Suites; 6 nights or longer, $100 USD savings for Interior, Ocean view and Balcony and $150 USD savings for Suites. Instant savings applied as instant rebate to the price of cruise fare at checkout. Instant savings do not apply to China departures.
                </p>
                <p>
                    Nonrefundable Deposit Bookings (“NRDB”): All deposit payments for NRDB bookings made after 5/31/22 are non-refundable from the time of booking.
                    Combinability: 30% Off Every Guest, Kids Sail Free and 2024 Kicker are combinable with each other as well as promotional OBCs, Next Cruise offers, instant savings, restricted discounts (for example, Seniors, Residents, Military), Promo Code driven offers, Free Upgrades, Crown and Anchor discounts, and Shareholder Benefits. Resident rates apply to select states on select sailings; valid address must be entered at time of booking to redeem savings. 30% Off Every Guest, Kids Sail Free and 2024 Kicker is not combinable with any other offer or promotion, including, but not limited to, Ultimate World Cruise, Standard Group, Interline, Travel Agent, Travel Agent Friends and Family, Weekly Sales Events, and Net Rates. Promo Code driven offers are based on select ships and sail dates and must be applied at the time of booking; limit one promo code per booking.
                </p>
                <p>
                    General Terms: All other charges, including, but not limited to, taxes, fees, and port expenses, are additional and apply to all guests. Instant savings amount shown in USD and will be converted to currency used for cruise purchase. Savings applied to cruise fare at checkout. Instant savings will be reflected in checkout as “Dollars Off” or “Savings.” Onboard Credit will be reflected in checkout as “Ship Spend” or “Ship Credit.” Onboard credit and instant savings do not apply to China departures. OBC is in USD, has no cash value, is non-transferable, not redeemable for cash, and will expire if not used by 10:00 PM on the last evening of the cruise. After the offer period, the offer will be removed from the booking if the guest cancels and reinstates the booking or rebooks into a new booking on the same ship and sail date, applies a fare change, or changes the ship or sail date of the booking; certain other changes to the booking may also result in removal of the offer. Offer applies to new, individual, and named group bookings confirmed at prevailing rates. Individual reservations may be transferred into an existing group, assuming required criteria are met; full deposit will be required at time of transfer. Failure to apply the required full deposit amount may result in the cancellation of the booking. Single occupancy guests paying 200% cruise fare are eligible for full amount of offer; single occupancy guests paying less than 200% cruise fare are eligible for a prorated amount of the offer. Offer available to residents of United States, Canada, Puerto Rico, and select countries in the Caribbean. Prices and offers are subject to availability and change without notice, capacity controlled, and may be withdrawn at any time. Contact our agency for complete terms and conditions. Royal Caribbean International reserves the right to correct any errors, inaccuracies, or omissions and to change or update fares, fees, and surcharges at any time without prior notice. ©2023 Royal Caribbean Cruises Ltd. Ships’ registry: Bahamas.
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
