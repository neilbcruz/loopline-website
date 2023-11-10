import {
    Container,
    Image,
    Button,
    Stack,
    Row,
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import AllInclusivePH from '../../../assets/images/allinclusive_placeholder.jpg';
import AllInclusiveDestination from '../../../assets/images/allinclusive_destination.jpg';

export default function IdeaAllInclusive() {
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
                    src={AllInclusivePH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>ALL-INCLUSIVE DESTINATIONS</h1>
                    <p>ALL-INCLUSIVE VACATION PACKAGE TRAVEL AGENTS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>BOOKING PERIOD: 2021/01/01 - 2023/12/31</p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>TRAVEL PERIOD: TODAY - 12/31/2024</p>
                        <div className='vr' />
                        <p className='m-0' >VACATION CODE: ALL-INCLUSIVE</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <h1 className='mb-0 text-center'><strong>ALL-INCLUSIVE RESORT VACATION DESTINATIONS</strong></h1>
                <hr className='mt-0 border-2'></hr>
                <h2>River Cruise Vacations</h2>
                <ul>
                    <li>The <strong>laid back islands</strong> of the Caribbean, Jamaica, Negril, Ocho Rios Montego Bay, Dominican Republic, Punta Cana, Bahamas, Aruba, St. Lucia and Turks & Caicos offer colorful architecture, calypso beats and widely varied cultures and cuisines.</li>
                    <li>Mexico’s popular resort destinations like Cancun, Riviera Maya, Puerto Vallarta and Los Cabos offer festive music, <strong>friendly locals and mystical Mayan ruins.</strong></li>
                    <li>Central America, Belize, Costa Rica and Panama offer <strong>tropical jungles, volcanoes and exotic wildlife.</strong></li>
                    <li>Both Mexico and the islands of the Caribbean offer year-round warm temperatures, powdery sand beaches, bright turquoise water and <strong>endless possibilities for adventure and relaxation.</strong></li>
                </ul>
            </Container>

            <Container className='my-3'>
                <Image
                    src={AllInclusiveDestination}
                    alt='placeholder image'
                    width='100%'
                    className='my-2'
                />
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CHECK IN, PUT YOUR WALLET AWAY, AND ENJOY YOUR STAY IN PARADISE! YOUR ALL-INCLUSIVE ESCAPE AWAITS AND WE’RE HERE TO HELP.</h2>
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