import {
    Container,
    Image,
    Button,
    Row,
    Stack
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import NZPH from '../../../assets/images/nz_placeholder.jpg';
import NZLogo from '../../../assets/logo/NZLogo.jpg';

export default function VacayNZ() {
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
                    src={NZPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>NEW ZEALAND VACATIONS</h1>
                    <p>TRAVEL AGENTS - NEW ZEALAND</p>
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
                        <p className='m-0' >VACATION CODE: NEW ZEALAND</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>Our travel advisors are passionate about New Zealand, whether you’re exploring a National Park, sipping on local wines or jumping out of a plane at 15,000ft! With 6 North American gateways offering non-stop flights—It's never been easier to connect to New Zealand from North America. And Kiwis across the country are waiting to welcome you with a unique style of hospitality and care we call manaakitanga. Choose from New Zealand itineraries for nature lovers, foodies, adventurers, romantics, cultural explorers, and active travelers or tailor-make your own ultimate New Zealand vacation.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={NZPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>New Zealand Things To Do</h2>
                <ul>
                    <li>Go <strong>“black water rafting”</strong> in the North Island’s Waitomo Caves in the Waikato region or test out bungee jumping which was invented here.</li>
                    <li>Catch a <strong>rugby game</strong> with some of New Zealand’s die-hard fans. There are signs of the sport at every corner, whether it’s a young boy perfecting his kick at the park or a proud supporter wearing his team’s shirt to the mall.</li>
                    <li>Experience <strong>Maori culture—</strong>meet the local people and enjoy a hangi feast cooked in earth ovens. Maori make up 14% of the population and their history, language and traditions are central to New Zealand’s identity.</li>
                    <li>Explore the <strong>Franz Josef Glacier</strong> on a guided walk to fit any skill level. Hike to a choice of lookout points for a bigger view of this awesome river of ice.</li>
                    <li>Savor a glass of wine on the <strong>Classic New Zealand Wine Trail</strong> through stunning scenery, parks, nightlife and more, with the opportunity to taste and shop at more than 120 cellar doors, as well as a multitude of vineyard restaurants and cafés.</li>
                    <li>Bask in a healing <strong>geothermal hot tub</strong>, or see more of the activity in Rotorua with geysers, hot springs, boiling mud pools and hissing craters.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={NZPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <p>Paddle your way through Maori rock carvings on a <strong>kayak through Lake Taupo</strong> or test your skills on the fresh water of the Whanganui River with a few rapids.</p>
                <p>See one of Kaikoura’s <strong>resident whales</strong> through a guided boat tour. In fact, Kaikoura, on the east coast of the South Island, is one of the only places in the world where you can easily see sperm whales.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={NZPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <p>Experience the real Middle-earth by visiting <strong>the Hobbiton Movie Set</strong>, featured in The Lord of the Rings and The Hobbit films. Over 150 locations were used in the movies.</p>
                <p>4,300 square kilometers of New Zealand’s South Island are recognized as <strong>an International Dark Sky Reserve</strong>, making it home to some of the most accessible observatories in the world for viewing constellations and shooting stars.</p>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CONTACT ONE OF OUR TRAVEL EXPERTS TO START PLANNING YOUR OWN NEW ZEALAND GETAWAY.</h2>
                <Image
                    src={NZLogo}
                    width='100%'
                />
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