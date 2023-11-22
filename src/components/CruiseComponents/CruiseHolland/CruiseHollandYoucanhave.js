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

import HollandPH from '../../../assets/images/holland_placeholder.jpg';
import HollandLogo from '../../../assets/logo/HollandALLogo.png';

import SanJuan from '../../../assets/images/cruise_images/holland_sanjuan.jpg';
import SanDiego from '../../../assets/images/cruise_images/holland_sandiego.jpg';
import Honolulu from '../../../assets/images/cruise_images/holland_honolulu.jpg';
import PanamaCanal from '../../../assets/images/cruise_images/crystal_panamacanal.jpg';

export default function CruiseHollandYoucanhave() {
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
                <Image src={HollandPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>YOU CAN HAVE IT ALL</h1>
                    <p>TRAVEL AGENTS - CRUISE, HOLLAND AMERICA LINE</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/10/17 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2024 DEPARTURES
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2653</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Holland America Line offers carefully crafted journeys on more than 500 itineraries, stopping in 100 countries the world over. Through exclusive onboard activities with BBC Earth Experiences and Explorations Central programs that deepen your understanding of the places you visit, your days on board will be just as fulfilling as your time spent exploring ashore.
                </p>
                <p>
                    You’ll embark on these life-changing journeys on perfectly sized, refreshingly uncrowded ships filled with one-of-a-kind experiences. The crew will attend to every detail every day, with menus created by a Culinary Council® of world-renowned chefs and the best in live music from Lincoln Center Stage, B.B. King’s Blues Club, Billboard Onboard, Rolling Stone Rock Room and more.
                </p>
                <p className='fw-bold'>Book now through our agency to take advantage of this special offer. Receive up to 60% off Have It All cruise fares, which include shore excursions, specialty dining, crew appreciation, premium Wi-Fi and the signature beverage package.</p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SanJuan}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>San Juan, Puerto Rico</div>
                        </div>
                        <h3>7-Day Eastern Caribbean</h3>
                        <p>
                            <em>Nieuw Amsterdam</em>
                            <br></br>
                            October 20, 2024
                        </p>
                        <p>Fort Lauderdale, FL; Grand Turk, Turks & Caicos; San Juan, Puerto Rico; St. Thomas, U.S.V.I.; Half Moon Cay, Bahamas; Fort Lauderdale, FL</p>
                        <p className='fw-bold'>Verandah from $2,147 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$25 Shipboard Credit per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SanDiego}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>San Diego, California</div>
                        </div>
                        <h3>14-Day Mexican Riviera & Sea of Cortez</h3>
                        <p>
                            <em>Koningsdam</em>
                            <br></br>
                            November 2, 2024
                        </p>
                        <p>San Diego, CA; Avalon, CA; San Francisco, CA (overnight); Ensenada, Mexico; Cabo San Lucas, Mexico; Mazatlán, Mexico; Puerto Vallarta, Mexico; San Diego, CA</p>
                        <p className='fw-bold'>Verandah from $3,977 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$25 Shipboard Credit per person and bottle of sparkling wine</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Honolulu}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Honolulu, Hawaii</div>
                        </div>
                        <h3>17-Day Circle Hawaii</h3>
                        <p>
                            <em>Koningsdam</em>
                            <br></br>
                            October 5, 2024
                        </p>
                        <p>Vancouver, BC; Honolulu, Oahu (overnight); Nawiliwili, Kauai (overnight); Kona, Hawaii; Hilo, Hawaii; Vancouver, BC</p>
                        <p className='fw-bold'>Verandah from $5,342 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$75 Shipboard Credit per stateroom</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={PanamaCanal}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Panama Canal</div>
                        </div>
                        <h3>21-Day Panama Canal</h3>
                        <p>
                            <em>Nieuw Amsterdam</em>
                            <br></br>
                            September 29, 2024
                        </p>
                        <p>Vancouver, BC; San Francisco, CA; San Diego, CA; Puerto Vallarta, Mexico; Huatulco, Mexico; Puerto Chiapas, Mexico; Puerto Quetzal, Guatemala; Corinto, Nicaragua; Puntarenas (Puerto Caldera), Costa Rica; enter Panama Canal Balboa; cruising Panama Canal; exit Panama Canal Cristobal; Oranjestad, Aruba; Fort Lauderdale, FL</p>
                        <p className='fw-bold'>Verandah from $7,504 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$50 Shipboard Credit per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={HollandLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    <strong>Have It All Early Booking Bonus Offer</strong> (“Early Booking Bonus Offer”) is available for a limited time, on a first-come, first-served basis, to the first guests who make a new booking in connection with the Early Booking Bonus Offer while it is available. Taxes, Fees & Port Expenses are included in the fares listed. All values herein are in CAD. Offer or its parts may be changed or revoked by Holland America Line (“HAL”) at any time. Early Booking Bonus Offer is valued at US$130 per day. Other exclusions and terms may apply; void where prohibited. Early Booking Bonus Offer and its parts are neither transferable, substitutable, nor redeemable for cash. Early Booking Bonus Offer is available for 1st/2nd guests only and applies only to the cruise portion of Alaska cruisetours. Early Booking Bonus Offer fares available only on select departures and exclude Grand Voyages and any cruise lasting 5 days or less.
                </p>
                <p>
                    <strong>Elite Beverage Package</strong> has a daily limit of 15 beverages, which includes all beverages priced at US$15 or less and beverage service charges. The Elite Beverage Package includes wine, beer, spirits, cocktails, non-alcoholic beverages, sodas, bottled water (sparkling or still, 400ml or less) and coffee. Guests must order one beverage at a time and be 21 years+ for alcoholic beverages. Sharing of any beverage or the package is not permitted. Beverage management/HAL reserve the right to revoke the package if misused and refuse service for any reason, including service of alcoholic beverages to intoxicated guests. Package excludes purchases made in The Shops, from the mini-bar, or through 24-hour room service and beverages on Half Moon Cay.
                </p>
                <p>
                    <strong>Specialty Dining</strong> is based on cruise duration and ship type. For 6- to 9-day voyages, guests will receive one night at Pinnacle Grill, Canaletto or Tamarind. For ships without Tamarind, guests will receive one night at Pinnacle Grill or Canaletto. For 10- to 20-day voyages, guests will receive two nights: one night at Pinnacle Grill and one night at Canaletto and/or Tamarind. For ships without Tamarind, guests will receive two nights: one night at Pinnacle Grill and one night at Canaletto. For 21+ day voyages (excluding Grand Voyages), guests will receive three nights: one night at Pinnacle Grill, one night at Tamarind and one night at Canaletto. For ships without Tamarind, guests will receive three nights: two nights at Pinnacle Grill and one night at Canaletto. Offer excludes Specialty Dining Events in Pinnacle Grill such as Sel de Mer, A Taste of De Librije and Cellar Master Dinner. Reservations and dining times will be available to pre-reserve.
                </p>
                <p>
                    <strong>Shore Excursion credit</strong> is based on cruise duration and is per person, not per stateroom. For Alaska cruisetours and 6- to 9-day cruises, eligible guests will receive US$100 credit per person to apply toward their shore excursion purchase(s). For 10- to 20-day cruises, eligible guests will receive US$200 credit per person to apply toward their shore excursion purchase(s). For 21+ day cruises (excluding Grand Voyages), eligible guests will receive US$300 credit per person to apply toward their shore excursion purchase(s). Shore Excursion credit must be used pre-cruise when applied toward an Alaska Cruisetour Land Excursion purchase. Shore Excursion credit must be used on corresponding cruise and is non-refundable. Shore Excursion credit can neither be redeemed for cash value or airport transfers nor applied to a non–shore excursion item.
                </p>
                <p>
                    <strong>Wi-Fi Premium Package:</strong> All onboard Internet usage is subject to Holland America Line’s standard policies, which may limit browsing of some sites due to network security and bandwidth usage. Applications that use high bandwidth may be blocked and offerings are subject to change with or without notice. The plan can be activated on any device, but only one device can be actively connected at a time. Upgrades are available once on board for a single day, the remaining duration of the voyage or adding more devices. Offer applies to 1st/2nd guests in a stateroom only.
                </p>
                <p>
                    <strong>Crew Appreciation:</strong> Receive prepaid stateroom gratuities on board. Gratuities for other services, including, but not limited to, bar, dining room, wine accounts and spa/salon services, are not included.
                </p>
                <p>
                    <strong>Low Price Guarantee:</strong> If a guest books a HAL cruise with the Early Booking Bonus Offer (the “original booking”) and such guest finds a cheaper price for an identical booking within the duration of the Early Booking Bonus Offer (the “Comparison Fare”), the difference may be compensated in the form of an onboard credit, stateroom upgrade or other method. HAL reserves the sole right to determine the method of compensation made to guests. A fare will be considered a Comparison Fare only if its booking consists of details that are identical to those of the original booking (including, but not limited to, the same ship, sail dates, stateroom category and number of guests as the original booking). The amount of compensation will be determined by the difference between the booked fare and the current available fare displayed on HollandAmerica.com the day the request is received by HAL. A determination as to whether the located fare is identical to the original booking will be at HAL’s sole discretion. HAL reserves the right to apply this price protection and offer at its discretion. Other restrictions and exclusions may apply.
                    HAL is neither responsible nor liable for any printing errors. Promotion is based on promotion code(s) N2 and based on double occupancy. Ships’ Registry: The Netherlands.
                </p>
                <p>
                    Sailing dates and amenities, including Distinctive Voyages amenities, are in USD, current at time of printing and are subject to change without notice. Amenities apply to 1st and 2nd passenger only. Offers are subject to availability and may be altered or withdrawn at any time without notice. Pricing and amenities will be confirmed at time of booking. Combinability varies. Cancellations, refunds, and penalties are imposed by the cruise line. Distinctive Voyages amenities may be substituted if a minimum number of guests are not confirmed on any given departure. These amenities are exclusive to this cruise line and must be booked by one of our travel advisors. Contact our agency for additional information.
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
