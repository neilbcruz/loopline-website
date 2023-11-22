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

import NorwegianPH from '../../../assets/images/norwegian_placeholder.jpg';
import NorwegianLogo from '../../../assets/logo/NorweigianCLLogo.png';

import NorwegianBliss from '../../../assets/images/cruise_images/norwegian_norwegianbliss.jpg';
import GlacierBay from '../../../assets/images/cruise_images/norwegian_glacierbay.jpg';
import NorwegianJewel from '../../../assets/images/cruise_images/norwegian_norwegianjewel.jpg';
import BlissSpa from '../../../assets/images/cruise_images/norwegian_blissspa.jpg';
import GlacierExcursion from '../../../assets/images/cruise_images/norwegian_glacierexcursion.jpg';
import GlacierTour from '../../../assets/images/cruise_images/norwegian_glaciertour.jpg';

export default function CruiseNorwegianFeelfree() {
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
                <Image src={NorwegianPH} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>FEEL FREE TO LET THE OUTSIDE IN</h1>
                    <p>TRAVEL AGENTS - CRUISES - NORWEGIAN CRUISE LINE</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/11/25 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: SELECT 2024 AND 2025 SAILINGS
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2687</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <h2 className='text-center'>HAVE THE GREATEST VACATION EVER WITH OUR BLACK FRIDAY SALE</h2>
                <p>
                    Our travel agency can plan a vacation to get you closer to nature with a spectacular Alaskan cruise. From action-packed wilderness adventures and extraordinary sightseeing to an extended sailing season and exclusive onboard credits only available through our travel agency, we can’t wait to plan your Alaska cruise vacation with Norwegian Cruise Line. With ships custom-built to help you see nature at its most majestic, you can witness whales breaching the surface, marvel at spectacular glaciers and experience everything Alaska has to offer.
                </p>
                <p>
                    When you cruise with Norwegian, the awe of Alaska stays with you throughout your vacation. The newly revitalized Norwegian Jewel, Norwegian Sun and Norwegian Spirit offer an intimate cruise experience along with beautifully renovated spaces and staterooms. Sip a cocktail with spectacular views from the coziest spot at Spinnaker Lounge or take a dip in one of five luxurious hot tubs. Whichever ship you choose, Alaska and the vacation of a lifetime await. Our travel agency can help you plan all the details.
                </p>
                <p className='fw-bold'>Book during the Black Friday sale and get 50% off all cruises, US$250 free with CruiseFirst until November 26th and enjoy Norwegian's Free At Sea all inclusive offers, including Free Unlimited Open Bar, Free Specialty Dining, Free Excursions, Free Wi-Fi and Free 3rd & 4th guests on select sailings! Plus, receive up to US$400 Onboard Credit on select sailings, only when you book through our travel agency. This offer ends November 30th, book today!</p>
                <h4 className='fw-bold text-center'>
                    We can help you plan your cruise vacation. Contact our travel agency today.
                </h4>
            </Container>

            <Container>
                <h2 className='text-center'>FEATURED SAILINGS</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={NorwegianBliss}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Norwegian Bliss in Alaska</div>
                        </div>
                        <h3>7-Day Alaska: Dawes Glacier, Juneau & Ketchikan</h3>
                        <p>
                            <em>Norwegian Bliss</em>
                            <br></br>
                            Departs May 11 & 25, 2024
                        </p>
                        <p>Seattle, Washington; Sitka, Alaska; Juneau, Alaska; Icy Strait Point, Alaska; Ketchikan (Ward Cove), Alaska; Victoria, British Columbia; Seattle, Washington</p>
                        <p className='fw-bold'>Balcony from $2,327 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={GlacierBay}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Glacier Bay National Park</div>
                        </div>
                        <h3>7-Day Alaska: Glacier Bay, Skagway & Juneau</h3>
                        <p>
                            <em>Norwegian Encore</em>
                            <br></br>
                            Departs May through July 2024
                        </p>
                        <p>Seattle, Washington; Juneau, Alaska; Skagway, Alaska; Ketchikan (Ward Cove), Alaska; Victoria, British Columbia; Seattle, Washington</p>
                        <p className='fw-bold'>Balcony from $2,523 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={NorwegianJewel}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Norwegian Jewel in Alaska</div>
                        </div>
                        <h3>7-Day Alaska: Hubbard Glacier & Skagway</h3>
                        <p>
                            <em>Norwegian Jewel</em>
                            <br></br>
                            Departs May 20 & June 17, 2024
                        </p>
                        <p>Seward, Alaska; Hubbard Glacier, Alaska; Icy Strait Point, Alaska; Juneau, Alaska; Skagway, Alaska; Ketchikan (Ward Cove), Alaska; Vancouver, British Columbia</p>
                        <p className='fw-bold'>Balcony from $3,304 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BlissSpa}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Norwegian Bliss Spa</div>
                        </div>
                        <h3>7-Day Alaska: Juneau, Ketchikan, Sitka & Victoria</h3>
                        <p>
                            <em>Norwegian Bliss</em>
                            <br></br>
                            Departs September 14, 2024
                        </p>
                        <p>Seattle, Washington; Sitka, Alaska; Juneau, Alaska; Icy Strait Point, Alaska; Ketchikan (Ward Cove), Alaska; Victoria, British Columbia; Seattle, Washington</p>
                        <p className='fw-bold'>Balcony from $2,549 per person</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={GlacierExcursion}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Glacier Excursion</div>
                        </div>
                        <h3>7-Day Alaska: Glacier Bay, Skagway & Juneau</h3>
                        <p>
                            <em>Norwegian Jewel</em>
                            <br></br>
                            Departs May 13 & June 10, 2024
                        </p>
                        <p>Vancouver, British Columbia; Ketchikan (Ward Cove), Alaska; Juneau, Alaska; Skagway, Alaska; Hubbard Glacier, Alaska; Seward, Alaska</p>
                        <p className='fw-bold'>Balcony from $2,974 per person</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={GlacierTour}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Glacier Tour</div>
                        </div>
                        <h3>9-Day Alaska: Dawes Glacier, Skagway & Juneau</h3>
                        <p>
                            <em>Norwegian Joy</em>
                            <br></br>
                            Departs June 18 & July 16, 2025
                        </p>
                        <p>Seattle, Washington; Ketchikan (Ward Cove), Alaska; Juneau, Alaska; Skagway, Alaska; Icy Strait Point, Alaska; Victoria, British Columbia; Seattle, Washington</p>
                        <p className='fw-bold'>Balcony from $3,927 per person</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={NorwegianLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    *Free At Sea choice(s) must be selected at least 24 hours prior to sailing and cannot be changed on board. Offer is capacity controlled, subject to change, and can be canceled and withdrawn at any time. Components included in this offer have no monetary value and are non-refundable and non-transferable. 20% Gratuities apply on: Free Unlimited Open Bar; Free Specialty Dining. Free 3rd & 4th Guests on select cruises. Restrictions apply. Prices shown are per person and reflect discount, based on double occupancy in an inside stateroom, in U.S. dollars, available on select sailings and subject to change. Ports of call are subject to change and may vary by ship. Some exclusions and other restrictions may apply. Contact your travel advisor for full terms and conditions and for this exclusive offers.
                </p>
                <p>
                    Onboard credit offer is per stateroom, in U.S. Dollars and will be applied to 1st and 2nd guest on the reservation until 11/30/2023. Singles paying 200% are entitled to full onboard credit value. Offer is for new individual FIT reservations. Qualifying new individual FIT reservations can be moved into an existing Traditional or FS group and count towards tour conductor credits. This is a cruise only offer. This promotion is not applicable on the land portion of cruise tours. Components included in this offer have no monetary value, are non-refundable and non-transferable. Guests cannot substitute or customize this offer. Anything consumed above the promotional benefit will be the responsibility of the guest at prevailing rates. Government taxes, port expenses & fees, discretionary onboard service charges and/or gratuities are additional. Onboard Credit may be used for all purchases except towards onboard service charges, pre-purchased activities, and foreign exchange transactions. Promotion cannot be held as a new or existing Traditional or FS group block. Promotion cannot be held in Traditional Block Groups/Type: Affinity, Nettour, NettourC, CHARTERS, CMI OP EVENT, CMI OP LG EVENT, INCREG & INCLARGE. Offer is not combinable with Charters or Inaugural sailings. Applicable to NCL MIAMI. Not applicable to NCL INTL, AUSTRALIA, NCL BRAZIL, NCL ASIA, NCL MEA, CE or UK offices. Cancellation Fees also apply based on the booking/sailing date; therefore, Norwegian Cruise Line strongly recommends the purchase of travel protection on all bookings. Offer and combinability with other promotional offers is subject to change at any time per Norwegian Cruise Line’s discretion. Other restrictions may apply. *For Free at Sea terms & conditions contact your travel advisor.
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
