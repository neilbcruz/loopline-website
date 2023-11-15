import {
    Container,
    Image,
    Button,
    Row,
    Stack
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import HawaiiPH from '../../../assets/images/hawaii_placeholder.jpg';
import HawaiiLogo from '../../../assets/logo/HawaiiLogo.png';

export default function VacayHawaii() {
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
                    src={HawaiiPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>HAWAII VACATIONS</h1>
                    <p>TRAVEL AGENTS - DESTINATIONS, HAWAII</p>
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
                        <p className='m-0' >VACATION CODE: HAWAII</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>From crystal blue waters to stunning green cliffs and black sand beaches, Hawaii’s wide open spaces are the breathtaking backdrop for unforgettable encounters with a vibrant culture that rewards travelers seeking to expand their horizons. Discover a thriving food scene. Seek thrilling outdoor adventures. And, for the most enriching experience of Hawaii, make time to join efforts to malama (care for) this truly special place and unique culture.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={HawaiiPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Things To Do in Hawaii</h2>
                <ul>
                    <li>Take part in an active adventure - like <strong>hiking to the top of Leahi</strong> (Diamond Head) or biking down from the summit of Haleakala.</li>
                    <li>Step in to the warm waters, enjoying the sand in your toes on <strong>world-renowned beaches</strong>. Take in the dazzling sunset, watch the best surfers in the world or grab a snorkel to explore.</li>
                    <li><strong>Hit the links</strong> on one of the courses carved-out by lava, Oahu alone is home to over 40 golf courses.</li>
                    <li>Delight in the magic of fire dancers, learn hula, embrace the beat of the pahu drums at a <strong>sunset luau</strong>.</li>
                    <li>Visit one of the heritage sites, like <strong>Pearl Harbor</strong> or Iolani Palace, the only royal palace on American soil to learn about not only the island history, but all of the U.S.</li>
                    <li>Witness the grandeur of an <strong>active volcano</strong> on Hawaii Island, with a hike along dormant sites or a water ride to see fresh flowing lava.</li>
                    <li>Stop and <strong>admire the waterfalls</strong>.</li>
                    <li>See the great migration of <strong>humpback whales</strong> during the winter.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CONTACT ONE OF OUR TRAVEL EXPERTS TO START PLANNING YOUR OWN ENCHANTING HAWAII GETAWAY.</h2>
                <Image
                    src={HawaiiLogo}
                    width='100%'
                />
            </Container>

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>All offers and information are subject to availability and change without notice. Additional restrictions may apply. Not responsible for errors or omissions.</p>
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