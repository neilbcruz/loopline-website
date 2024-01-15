import {
    Container,
    Image,
    Button,
    Stack,
    Row,
    Col
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverRiverCruise from '../../../assets/images/cover_rivercruise.jpg';
import RiverCruiseAmaWaterways from '../../../assets/images/rivercruise_amawaterways.jpg';
import RiverCruiseAvalon from '../../../assets/images/rivercruise_avalon.jpg';
import RiverCruiseViking from '../../../assets/images/rivercruise_viking.jpg';

import AmaWaterwaysLogo from '../../../assets/logo/AmaWaterwaysLogo.png';
import AvalonWaterwaysLogo from '../../../assets/logo/AvalonWaterwaysLogo.png';
import VikingLogo from '../../../assets/logo/VikingLogo.png';

export default function IdeaRiverCruise() {
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
                <Image
                    src={CoverRiverCruise}
                    className='custom-fluid-hero'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>RIVER CRUISE VACATIONS</h1>
                    <p>TRAVEL AGENTS - RIVER CRUISING, EUROPE, NORTH AMERICA, ASIA</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>BOOKING PERIOD: 2021/01/01 - 2023/12/31</p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>TRAVEL PERIOD: TODAY - 12/31/2023</p>
                        <div className='vr' />
                        <p className='m-0' >VACATION CODE: RIVER CRUISES</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>Today’s river cruise experience is nothing like the historic tales of paddle wheel steamboats on the Mississippi, though you can now do an updated version of that! Modern river cruise ships traverse major waterways across the globe creating a boutique luxury cruise experience, a relaxed pace of travel, and access to authentic local culture. Unlike a large ocean cruise ship, most river cruises offer all exterior cabins, featuring large floor to ceiling windows or balconies. But it’s not just your room that’s different, river cruises include daily guided shore excursions as well as wine, beer and other drink options at lunch and dinner, and spend most of their time in port docking in the heart of historic cities and small villages along the river.</p>
                <p>Selecting the right river cruise for your style comes down to four primary choices: the season, the river, the cruise line, and the cruise ship.  That’s where it can get more complicated since there are hundreds of river cruise ships and dozens of itineraries to choose from that change each year. Which is where our experienced and well-traveled team can help.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={RiverCruiseAmaWaterways}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Why Choose a River Cruise?</h2>
                <ul>
                    <li>Smaller ships with fewer passengers provide a more intimate and relaxing cruising experience.</li>
                    <li>Stunning scenery 24-7.</li>
                    <li>Boutique hotel style accommodations and amenities.</li>
                    <li>More inclusions for one price, such as shore excursions and specialty dining.</li>
                    <li>Dock in exciting port cities and historic charming villages.</li>
                    <li>Explore beyond coastlines and get closer to the heart of your destinations attractions and local culture.</li>
                    <li>Rich itineraries covering the most popular destinations worldwide.</li>
                    <li>Theme cruises—Such as culinary, wine, holiday markets, wildlife and active adventures.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={RiverCruiseAvalon}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>River Cruise Lines</h2>
                <p>Although there are about a dozen river cruise line choices, Travel Leaders recommends these award-winning river cruise companies:</p>
                <ul>
                    <li><strong>AmaWaterways:</strong> A luxury river cruise line with an award-winning fleet, critically acclaimed dining and unique tour options.</li>
                    <li><strong>Avalon River Cruises:</strong> Redefining the river cruise experience with the most spacious staterooms in the river cruise industry and the best culturally-immersive land programs available.</li>
                    <li><strong>Viking River Cruise:</strong> A leading river cruise line offering journeys of discovery aboard premium ships on the rivers of Europe, Russia and China.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={RiverCruiseViking}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>River Cruise Vacations</h2>
                <ul>
                    <li><strong>France: Burgundy & Provence:</strong> Journey through Paris, the “City of Light”, sip and dine in the Burgundy wine region along the Rhone River.</li>
                    <li><strong>Germany:</strong> Sail past castles, fortresses and picturesque German villages along the romantic Rhine River.</li>
                    <li><strong>Central Europe:</strong> Visit Budapest, Vienna, Nuremberg, Prague to witness grand architecture, and fascinating historic sites of the delightful Danube River.</li>
                    <li><strong>Asia:</strong> See cosmopolitan Shanghai, and Beijing’s imperial treasures like the Great Wall, along China’s legendary Yangtze River.</li>
                    <li><strong>Russia:</strong> Cruise to Moscow and St. Petersburg along the Volga and Svir Rivers taking in the fascinating sights of the Kremlin, St. Petersburg, opulent palaces and churches.</li>
                    <li><strong>Egypt:</strong> Explore the ancient world and uncover the mysteries of Egypt along the legendary Nile River.</li>
                    <li><strong>South America:</strong> Venture into the Amazon jungle to meet native communities, swim with dolphins and relax on amazing beaches on a journey through the Amazon River.</li>
                </ul>
                <p>We’re river cruising experts that can help you select the best itinerary and handle of all of the arrangements, from pre and post cruise hotel stays and flights, to transportation to and from your ship.</p>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>FOR YOUR AMAZING VOYAGE THROUGH STUNNING LANDSCAPES AND SCENIC TOWNS, CONTACT US TODAY.</h2>
            </Container>

            <Container>
                <Row className='justify-content-center'>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={AmaWaterwaysLogo} className="logo-image" />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={AvalonWaterwaysLogo} className="logo-image" />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Image src={VikingLogo} className="logo-image" />
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