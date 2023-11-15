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

import MassachusettsPH from '../../../assets/images/cruise_images/massachusetts_placeholder.jpg';
import NovaScotiaPH from '../../../assets/images/cruise_images/novascotia_placeholder.jpg';
import IcelandPH from '../../../assets/images/cruise_images/iceland_placeholder.jpg';
import QuebecPH from '../../../assets/images/cruise_images/quebec_placeholder.jpg';

export default function CruiseHollandHaveitall() {
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
                <Image src={HollandPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>HAVE IT ALL WITH<br></br>HOLLAND AMERICA LINE</h1>
                    <p>TRAVEL AGENTS -<br></br>CRUISE, VACATION PACKAGE/TOUR,<br></br> HOLLAND AMERICA LINE</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/13 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2024 DEPARTURES
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2676</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Explore what the world has to offer on Holland America Line. Their cruises encompass a diverse array of destinations, ranging from well-loved ports to lesser-explored gems in the Caribbean, Alaska, Europe, New Zealand, Asia and more. Additionally, they offer exceptional voyages to extraordinary locales such as the Amazon and Antarctica along with extensive Grand Voyages that promise an unparalleled and enriching travel experience.
                </p>
                <p>
                    The <strong>shore excursions</strong> offered by Holland America Line let you forge lasting connections with the people and places you visit, whether you're wine tasting in Burgundy, zip lining in Costa Rica or taking pictures of penguins in Chile. And when you are on board, enjoy nightly entertainment like B.B. King’s Blues Club or the Billboard Onboard entertainment club, where you can play music trivia or enjoy chart-topping hits.
                </p>
                <p>
                    Holland America Line’s Have It All fares create an all-inclusive experience that transcends traditional expectations. As you embark on your journey, enjoy the added luxury of <strong>complimentary drinks</strong> and <strong>specialty dining</strong>, allowing you to savor your favorite beverages and spoil your tastebuds without the worry of additional costs. Stay seamlessly connected with <strong>complimentary Wi-Fi</strong>, enabling you to share your adventures. Connect with loved ones and stay informed about the places you'll explore.
                </p>
                <p className='fw-bold'>Book now through our agency to take advantage of this special offer.</p>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MassachusettsPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Boston, Massachusetts</div>
                        </div>
                        <h3>7-Day Canada & New England Discovery</h3>
                        <p>
                            <em>Volendam</em>
                            <br></br>
                            May 11, 2024
                        </p>
                        <p>Boston, Massachusetts; Bar Harbor, Maine; Halifax, Nova Scotia; Sydney, Nova Scotia; Charlottetown, Prince Edward Island; cruising Gulf of St. Lawrence; cruising only: Montreal, Quebec</p>
                        <p className='fw-bold'>Oceanview from $1,857 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$25 Shipboard Credit per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={NovaScotiaPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sydney, Nova Scotia</div>
                        </div>
                        <h3>7-Day Historic Coasts</h3>
                        <p>
                            <em>Volendam</em>
                            <br></br>
                            July 20, 2024
                        </p>
                        <p>Boston, Massachusetts; Portland, Maine; Saint John, New Brunswick; Halifax, Nova Scotia; Sydney, Nova Scotia</p>
                        <p className='fw-bold'>Oceanview from $2,371 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$25 Shipboard Credit per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={IcelandPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Reykjavik, Iceland</div>
                        </div>
                        <h3>24-Day Canada, New England & Iceland</h3>
                        <p>
                            <em>Volendam</em>
                            <br></br>
                            July 24, 2024
                        </p>
                        <p>Boston, Massachusetts; Sydney, Nova Scotia; Corner Brook, Newfoundland; Red Bay, Labrador; Qaqortoq, Greenland; Isafjordur, Iceland; Akureyri, Iceland; Seydisfjordur, Iceland; Djupivogur, Iceland; Reykjavik, Iceland; Grundarfjordur, Iceland; cruising only: Nanortalik, Greenland; St. Anthony, Newfoundland, Canada; St. John's, Newfoundland, Canada; Saint Pierre and Miquelon, Newfoundland; Halifax, Nova Scotia, Canada; Bar Harbor, Maine; Boston, Massachusetts</p>
                        <p className='fw-bold'>Oceanview from $8,617 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={QuebecPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Quebec, Canada</div>
                        </div>
                        <h3>11-Day Newfoundland & New England Discovery</h3>
                        <p>
                            <em>Volendam</em>
                            <br></br>
                            September 10, 2024
                        </p>
                        <p>Boston, Massachusetts; Portland, Maine; Saint John, New Brunswick, Canada; Halifax, Nova Scotia, Canada; Corner Brook, Newfoundland, Canada; Charlottetown, Prince Edward Island; cruising Gulf of St. Lawrence; cruising only: Saguenay, Quebec, Canada; Quebec City, Quebec, Canada; Montreal, Quebec, Canada</p>
                        <p className='fw-bold'>Oceanview from $3,551 per person</p>
                        <p className='mb-0'><strong>Agency Exclusive:</strong> US$25 Shipboard Credit per person</p>
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
                    Featured fares are per person based on double occupancy (cruise or cruise tours only). Taxes, Fees & Port Expenses are included. Have It All amenities are subject to availability, available for new bookings only, available for 1st/2nd guests only, applicable only to the cruise portion of Alaska cruise tours, and neither transferable nor refundable. Have It All fares are applicable on select departures and exclude Grand Voyages and any cruise lasting 5 days or less.
                </p>
                <p>
                    Signature Beverage Package has a daily limit of 15 beverages, which includes all beverages priced at US$11 or less and beverage service charges. Beverage packages include non-alcoholic beverages such as sodas and specialty coffees. Guests must order beverages one at a time and be 21 years or older for alcoholic beverages. Sharing is not permitted. Beverage management reserves the right to revoke the package if misused and refuse service for any reason, including service of alcoholic beverages to intoxicated guests. Package excludes purchases made in The Shops, from the mini-bar, through 24-hour room service or on Half Moon Cay.
                </p>
                <p>
                    Specialty Dining is based on cruise duration and ship type. For 6- to 9-day cruises, guests will receive
                    one night at Pinnacle Grill, Canaletto or Tamarind. For ships without Tamarind, guests will receive one night at Pinnacle Grill or Canaletto. For 10- to 20-day cruises, guests will receive two nights: one night at Pinnacle Grill and one night at Canaletto or Tamarind. For ships without Tamarind, guests will receive two nights: one night at Pinnacle Grill and one night at Canaletto. For 21+ day cruises (excluding Grand Voyages), guests will receive three nights: one night at Pinnacle Grill, one night at Tamarind and one night at Canaletto. For ships without Tamarind, guests will receive three nights: two nights at Pinnacle Grill and one night at Canaletto. Offer excludes Specialty Dining events in Pinnacle Grill such as Rudi’s Sel de Mer, A Taste of De Librije and Cellar Master Dinner. Reservations and dining times will be available to pre-reserve.
                </p>
                <p>
                    Shore Excursion offer is based on cruise duration and is per person, not per stateroom. For Alaska cruise tours and 6- to 9-day cruises, eligible guests will receive US$100 Shore Excursion credit per person to apply toward their Shore Excursion purchase(s). For 10- to 20-day cruises, eligible guests will receive US$200 Shore Excursion credit per person to apply toward their Shore Excursion purchase(s). For 21+ day cruises (excluding Grand Voyages), eligible guests will receive US$300 Shore Excursion credit per person to apply toward their Shore Excursion purchase(s). Shore Excursion credit must be used pre-cruise when applied toward an Alaska cruise tour Land Excursion purchase. Shore Excursion credit must be used on corresponding cruise and is non-refundable. Shore Excursion credit can neither be redeemed for cash or airport transfers nor applied to a non–Shore Excursion item.
                </p>
                <p>
                    Wi-Fi Surf Package: Surf your favorite sites, including email, sports, news and general browsing. All onboard Internet usage is subject to Holland America Line’s standard policies, which may limit browsing of some sites due to network security and bandwidth usage. Applications that use high bandwidth may be blocked and offerings are subject to change with or without notice. The plan can be activated on any device, but only one device can be actively connected at a time. Upgrades are available once on board for a single day, the remaining duration of the voyage or adding more devices. Offer applies to 1st/2nd guests in a stateroom only.
                </p>
                <p>
                    Sailing dates and amenities, including Distinctive Voyages amenities, are in USD, are current at time of printing and are subject to change without notice. Amenities apply to 1st and 2nd passenger only. Offers are subject to availability and may be altered or withdrawn at any time without notice. Pricing and amenities will be confirmed at time of booking. Combinability varies. Cancellations, refunds, and penalties are imposed by the cruise line. Distinctive Voyages amenities may be substituted if a minimum number of guests are not confirmed on any given departure. These amenities are exclusive to this cruise line and must be booked by one of our travel advisors. Contact our agency for additional information.
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
