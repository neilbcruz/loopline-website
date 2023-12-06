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

import CoverWestjetUpgrade from '../../../assets/images/vacation_images/cover_westjet-secretresorts.jpg';
import WestjetLogo from '../../../assets/logo/WestjetLogo.png';

import SecretsBahiaMita from '../../../assets/images/vacation_images/westjet_secretsbahiamita.jpg';
import SecretsMaroma from '../../../assets/images/vacation_images/westjet_secretsmaroma.jpg';
import SecretsPuertoLosCabos from '../../../assets/images/vacation_images/westjet_secretspuertoloscabos.jpg';
import SecretsStJames from '../../../assets/images/vacation_images/westjet_secretsstjames.jpg';
import SecretsCancunMexico from '../../../assets/images/vacation_images/westjet_cancunmexico.jpg';


export default function VacationWestjetSecretResorts() {
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
                    <h1>POP THE QUESTION AT SELECT SECRETS RESORTS</h1>
                    <p>TRAVEL AGENTS - VACATION PACKAGE, WESTJET VACATIONS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/05/31 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 1412</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Ready to Pop the Question? The perfect proposal awaits with WestJet Vacations and Secrets Resorts in Mexico and Jamaica. These all-inclusive, adults-only resorts offer the ultimate in luxury and romance, with everything you need for a truly unforgettable experience. From stunning beachfront locations to world-class dining and top-notch amenities, Secrets Resorts have it all. With this offer, we can help you pull off the perfect proposal and save on the romantic vacation to follow.
                </p>
                <p>
                    <strong>Pop-the-Question Package:</strong> Lead your partner down a path of candles and rose petals toward a secluded spot on the beach for the ultimate romantic proposal. The package includes:
                </p>
                <ul>
                    <li>A message written in the sand, reading, "Will you marry me, [name]?"</li>
                    <li>Bottle of sparkling wine</li>
                    <li>Bouquet of roses</li>
                    <li>"Just Engaged!" door banner</li>
                    <li>Engagement photo shoot with five photos included</li>
                </ul>
            </Container>

            <Container>
                <h2>FEATURED PROPERTIES:</h2>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsBahiaMita}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Secrets Bahia Mita Surf & Spa Resort</div>
                        </div>
                        <h3>BAHIA DE BANDERAS, BUCERIAS</h3>
                        <p className='fw-bold'>Secrets Bahia Mita Surf & Spa Resort – Adults Only</p>
                        <p className='mb-0'>This resort offers a luxurious escape on the beautiful Pacific coast of Mexico, with a focus on surfing and spa experiences in a pristine beachfront setting.</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsMaroma}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Secrets Maroma Beach Riviera Cancun</div>
                        </div>
                        <h3>RIVIERA MAYA</h3>
                        <p className='fw-bold'>Secrets Maroma Beach Riviera Cancun – Adults Only</p>
                        <p className='mb-0'>Nestled on one of the world's top beaches, this adults-only resort in the heart of the Riviera Maya offers guests access to ancient Mayan ruins and breathtaking natural wonders.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsPuertoLosCabos}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Secrets Puerto Los Cabos Golf & Spa Resort</div>
                        </div>
                        <h3>SAN JOSE DEL CABO</h3>
                        <p className='fw-bold'>Secrets Puerto Los Cabos Golf & Spa Resort – Adults Only</p>
                        <p className='mb-0'>Located in the sunny Baja Peninsula, this resort offers golf enthusiasts a world-class course, and is the perfect spot for those looking to explore the natural beauty and stunning coastline of Los Cabos.</p>
                    </Col>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsStJames}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Secrets St. James Montego Bay</div>
                        </div>
                        <h3>MONTEGO BAY</h3>
                        <p className='fw-bold'>Secrets St. James Montego Bay - Adults Only</p>
                        <p className='mb-0'>This exclusive adults-only resort on Jamaica's northern coast is the perfect spot to unwind and relax, with easy access to the island's famous white-sand beaches and vibrant culture.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SecretsCancunMexico}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Cancun, Mexico</div>
                        </div>
                        <h3>CANCUN</h3>
                        <p className='fw-bold'>Secrets The Vine Cancun - Adults Only</p>
                        <p className='mb-0'>Located on the pristine shores of the Caribbean Sea, this luxurious resort offers guests stunning ocean views and easy access to the vibrant nightlife, rich history and cultural attractions of Cancun.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={WestjetLogo}
                    className='logo-image'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Advance booking required. Non-refundable and non-transferable. Offer limited and subject to availability. Offer subject to change and expire without notice. New bookings only. Not valid on group bookings. Other restrictions may apply. A minimum 5-night stay is required. The Pop The Question package includes romantic rose petal and candle path decoration leading towards the proposal spot on the beach, "Will you marry me [name]" message carved in the sand, 1 bottle of sparkling wine, 1 bouquet of roses, 1 door band: "Just Engaged!" and engagement photoshoot with 5 photos included.
                </p>
                <p>
                    Secrets Puerto Los Cabos Golf & Spa Resort: offer valid when booking the Preferred Club Junior Suite Ocean Front. Secrets The Vine Cancun: offer valid when booking the Preferred Club Junior Suite Ocean View. Secrets Bahia Mita Surf & Spa Resort: offer valid when booking the Preferred Club Junior Suite Ocean View King. Secrets St. James Montego Bay: offer valid when booking the Preferred Club Junior Suite Ocean View. Secrets Maroma Beach Riviera Cancun: offer valid when booking the Preferred Club Ocean View.
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
