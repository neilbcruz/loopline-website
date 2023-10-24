import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Stack,
    Image
} from 'react-bootstrap';
import { ArrowUp, Linkedin, Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Rowena from '../../assets/images/rowena.jpeg';

export default function HomePage() {
    const email = 'email@example.com';
    const phone = '+1234567890';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${phone}`
    }

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
            <Container id='about'>
                <Row>
                    <Col xs={12} md={9}>
                        <Container className='my-5'>
                            <Card variant='secondary'>
                                <Card.Body>
                                    <Row className='d-flex align-items-center justify-content-center'>
                                        <Col xs={5} lg={4}>
                                            <Image
                                                src={Rowena}
                                                alt='Rowena image'
                                                className='my-3 img-fluid'
                                                width='100%'
                                            />
                                        </Col>
                                        <Col className='text-align-left m-3 ' xs={6} lg={7}>
                                            <Card.Title>ROWENA CRUZ</Card.Title>
                                            <Card.Text className='mb-1'>Scarborough, ON</Card.Text>
                                            <hr className='mt-1 mb-4'></hr>
                                            <Stack direction='horizontal' gap={2}>
                                                <Button variant='success' onClick={handleEmailClick}>Email Me</Button>
                                                <Button variant='success' onClick={handlePhoneClick}>Call Me</Button>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Container>

                        <Container className='mb-5'>
                            <h2>Certified Travel Counsellor</h2>
                            <Row>
                                <Col xs={12} lg={6}>
                                    <p>
                                        My passion to traveling made me decide to become a travel consultant. I have studied and received certification to be a Travel Consultant.
                                    </p>
                                    <p>
                                        Aside from education, I have travelled to different places and will continue to travel. I am very passionate when it comes to travelling all over the world. My desire to see the world and experience its many different cultures has allowed me to start my dream by first touring some cities in the United States, as well as my new home, Canada. From there, my desire grew and led me to countries beyond North America such as Hongkong, Austria, Czech Republic, Italy, France, London, Greece, Japan, Korea, Philippines, and there is no sign of me stopping any time soon. I've also done river cruising in Paris and ocean cruising in the Caribbean.
                                    </p>
                                    <p>
                                        I hope to share my passion with everyone else; utilizing it to provide other travelers with high quality services that will help them make the most out of their travels around the world.
                                    </p>
                                    <p>
                                        Loopline Travel is affiliated with Nexion Travel Group, 100-235 North Centre Rd, London, On  N5X 4E7 HQ Phone 5196606966  TICO Reg # 1549342
                                    </p>
                                </Col>
                                <Col lg={6}>
                                    <Image
                                        src={Rowena}
                                        className='my-2' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col xs={12} md={3}>
                        <Container className='my-5'>
                            <h2>DESTINATION EXPERT</h2>
                            <li>Philippines</li>
                            <li>South Korea</li>
                            <li>Austria</li>
                            <li>Italy</li>
                            <li>Japan</li>
                            <hr></hr>
                            <h2>TRAVEL SPECIALIST:</h2>
                            <li>Family Vacations</li>
                            <li>Cruises</li>
                            <li>River Cruises</li>
                            <hr></hr>
                            <h2>TOP TRAVEL PARTNERS:</h2>
                            <li>Royal Caribbean</li>
                            <li>Globus</li>
                            <hr></hr>
                            <h2>CERTIFICATION/ AWARDS:</h2>
                            <li>CTC</li>
                            <li>Certified Travel Counsellor</li>
                            <li>Avalon Waterways Specialist</li>
                            <li>Certified Globus Tour Expert</li>
                            <li>Monograms Booking Agent</li>
                            <li>AMA Waterways Certified Advisor</li>
                            <hr></hr>
                            <h2>LANGUAGES I SPEAK:</h2>
                            <li>English</li>
                            <li>Tagalog</li>
                            <hr></hr>
                            <h2>CONNECT WITH ME:</h2>
                            <Link to='https://www.facebook.com/' className='text-decoration-none' target='_blank'>
                                <Facebook size='20'/>Facebook
                            </Link>
                            <br></br>
                            <Link to='https://www.linkedin.com/' className='text-decoration-none' target='_blank'>
                                <Linkedin size='20'/>Linkedin
                            </Link>
                            <br></br>
                            <Link to='https://www.instagram.com/' className='color-inherit text-decoration-none' target='_blank'>
                                <Instagram color='brown' size='20'/>Instagram
                            </Link>
                            <br></br>
                            <Link to='https://www.twitter.com/' className='color-inherit text-decoration-none' target='_blank'>
                                <Twitter size='20'/>Twitter
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Container className="scroll-to-top">
                {showButton && (
                    <Button variant='light' onClick={scrollToTop} size='sm' className='position-fixed bottom-0 end-0 opacity-75'>
                        <ArrowUp />
                    </Button>
                )}
            </Container>
        </>
    )
}