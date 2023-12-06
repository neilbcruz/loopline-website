import {
    Container,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';
import { ArrowUp, Facebook, Instagram } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import CardRowena from '../../components/CardRowena/CardRowena';

import RowenaImage from '../../assets/images/rowena.jpeg';

export default function HomePage() {
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
            <Container id='top' className='my-3'>
                <Row>
                    <Col xs={12} md={9}>
                        {/* <CardRowena /> */}

                        <Container className='my-3'>
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
                                        src={RowenaImage}
                                        className='my-2' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col xs={12} md={3}>
                        <Container className='my-3'>
                            <h2>DESTINATION EXPERT</h2>
                            <ul>
                                <li>Philippines</li>
                                <li>South Korea</li>
                                <li>Austria</li>
                                <li>Italy</li>
                                <li>Japan</li>
                            </ul>
                            <hr></hr>
                            <h2>TRAVEL SPECIALIST:</h2>
                            <ul>
                                <li>Family Vacations</li>
                                <li>Cruises</li>
                                <li>River Cruises</li>
                            </ul>
                            <hr></hr>
                            <h2>TOP TRAVEL PARTNERS:</h2>
                            <ul>
                                <li>Royal Caribbean</li>
                                <li>Globus</li>
                            </ul>
                            <hr></hr>
                            <h2>CERTIFICATION/ AWARDS:</h2>
                            <ul>
                                <li>CTC</li>
                                <li>Certified Travel Counsellor</li>
                                <li>Avalon Waterways Specialist</li>
                                <li>Certified Globus Tour Expert</li>
                                <li>Monograms Booking Agent</li>
                                <li>AMA Waterways Certified Advisor</li>
                            </ul>
                            <hr></hr>
                            <h2>LANGUAGES I SPEAK:</h2>
                            <ul>
                                <li>English</li>
                                <li>Tagalog</li>
                            </ul>
                            <hr></hr>
                            <h2>CONNECT WITH ME:</h2>
                            <div className='d-flex flex-column gap-1'>
                                <Link
                                    to='https://www.facebook.com/looplinetravel'
                                    className='text-decoration-none'
                                    target='_blank'
                                >
                                    <Facebook size='20' />Facebook
                                </Link>
                                <Link
                                    to='https://www.instagram.com/looplinetravel/'
                                    className='color-inherit text-decoration-none'
                                    target='_blank'
                                >
                                    <Instagram color='brown' size='20' />Instagram
                                </Link>
                            </div>
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