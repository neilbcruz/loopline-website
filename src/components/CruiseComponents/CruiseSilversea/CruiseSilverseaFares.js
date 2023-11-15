import {
    Container,
    Image,
    Button,
    Row,
    Stack,
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import SilverseaPH from '../../../assets/images/silversea_placeholder.jpg';
import SilverseaBanner from '../../../assets/images/silversea_banner.jpg';
import SilverseaLogo from '../../../assets/logo/SilverseaLogo.png';

export default function CruiseSilverseaFares() {
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
                <Image src={SilverseaPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>DOOR-TO-DOOR OR<br></br>PORT-TO-PORT FARES</h1>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/09/15 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD:
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 1095</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <Image
                    src={SilverseaPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>DOOR-TO-DOOR OR PORT-TO-PORT FARES</h2>
                <h5>Door-to-Door All-Inclusive fares</h5>
                <p>
                    Door-to-Door All-inclusive fare cover everything from private airport transfers, economy flights, business class upgrades or air credit, shore excursions and all-inclusive on board lifestyle. Door-to-Door All-Inclusive fare now feature a 15% reduced deposit on all voyages.<br></br>
                    Book by November 30th, 2023 and make sure you get the best fare and your preferred suite. Prices will increase on December 1st, 2023.
                </p>
                <h5>Port-to-Port All-Inclusive fares</h5>
                <p>
                    Save up to 30% on Port-to-Port All-Inclusive fare when compared to Door-to-Door fare, without air. This fare is an ideal choice for those guests who prefer to make their own pre- and post-cruise travel arrangements independently – including air, hotel, and transfers. Simply arrive at the port on the day of departure and set sail for your luxury cruise of a lifetime. We will take care of the rest while you’re aboard. And if you’re travelling on one of our Expedition cruises, we even include in-country charter flights and hotel on selected voyages! This advantageous fare comes with stricter cancellation policies. Port-to-Port All-Inclusive fare feature a 25% deposit on all voyages.<br></br>
                    Book by November 30th, 2023 and make sure you get the best fare and your preferred suite. Prices will increase on December 1st, 2023.
                </p>
            </Container>

            <Container className='my-3'>
                <Image
                    src={SilverseaBanner}
                    width='100%'
                />
                <Image
                    src={SilverseaLogo}
                    className='logo-image'
                />
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
