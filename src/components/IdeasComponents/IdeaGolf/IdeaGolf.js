import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import GolfPH from '../../../assets/images/golf_placeholder.jpg';

export default function IdeaGolf() {
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
            <Container className='text-center my-3 p-0 hero-container' fluid>
                <Image
                    src={GolfPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>GOLF VACATIONS</h1>
                    <p>TRAVEL AGENTS - GOLF, GOLF VACATIONS, PACKAGES</p>
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
                        <p className='m-0' >VACATION CODE: GOLF</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>What could be better than combining a relaxing vacation to an exotic locale with a few rounds of unforgettable golf? If that sounds appealing to you, then grab your 9-iron, your monogramed bag and your passport, and let’s hit the links. Your choices are as numerous as your excuses for hooking that drive on 18. The historic, rolling courses of Ireland and Scotland, home to the sport’s mythic origins? Say aloha to Jack Nicklaus-designed courses in Hawaii? How about an all-exclusive Caribbean or Mexican retreat that includes all your food, drinks and greens fees?</p>
                <p>Let the experts at Travel Leaders help you sort through the options and organize the golf vacation of your dreams. We have contacts around the world, along with detailed, local knowledge and vast experiences, to organize everything you need to tee off with a smile.</p>
                <h2>Why Go on a Golf Vacation</h2>
                <ul>
                    <li>Everything in one price, including your greens fees, flights, hotel and more.</li>
                    <li>Choose your dream locale, from windswept countryside's to island paradises.</li>
                    <li>Explore beyond the course and experience your destinations true culture.</li>
                    <li>Combine multiple countries—along with multiple world-class courses—in one journey.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={GolfPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Golf Vacations in the US and the Caribbean</h2>
                <ul>
                    <li><strong>Oahu:</strong> This Hawaiian island boasts more than 40 scenic courses, ranging from par 3s to some of the most challenging in the world.</li>
                    <li><strong>Cabo:</strong> Home to several championship courses including Palmilla Golf Club, designed by the Golden Bear himself.</li>
                    <li><strong>Dominican Republic:</strong> Sun, surf, sand and the Caribbean’s finest pro-designed courses, served up alongside cold drinks and perfect waters.</li>
                    <li><strong>Bermuda:</strong> The heavenly home to golf, pink-sand beaches and more golf.</li>
                    <li><strong>Augusta:</strong> Experience the Master’s in person, then get in your own inspired round golf there or at a nearby course.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={GolfPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Golf Vacations in Europe</h2>
                <ul>
                    <li><strong>Scotland:</strong> Play where golf originated, St. Andrews—just be sure to repair your divots!</li>
                    <li><strong>Spain:</strong> Costa del Sol region is home to one of the highest concentrations of world-class golf courses and legendary golfers.</li>
                    <li><strong>Portugal:</strong> Great food, culture and weather add to the beauty of the San Lorenzin club on the tip of this coastal country.</li>
                    <li><strong>Turkey:</strong> Enjoy views of the Turkish Riviera with 4 golf courses in just a 15 minute drive of each other.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>OUR CERTIFIED EXPERTS IN GOLF TRAVEL LISTED HERE CAN HELP YOU PLAN A GETAWAY THAT’S JUST YOUR LEVEL OF SKILL AND DESIRED VIEWS.</h2>
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