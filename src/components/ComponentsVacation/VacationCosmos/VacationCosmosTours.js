import {
    Container,
    Image,
    Button,
    Row,
    Stack,
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverCosmosTours from '../../../assets/images/vacation_images/cover_cosmos-tours.jpg';
import CosmosLogo from '../../../assets/logo/CosmosLogo.png';

import CosmosTours1 from '../../../assets/images/vacation_images/cosmos_tours1.jpg';
import CosmosTours2 from '../../../assets/images/vacation_images/cosmos_tours2.jpg';



export default function VacationCosmosTours() {
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
                <Image src={CoverCosmosTours} className='custom-fluid-hero' width='100%' />
                <div className='text-on-hero'>
                    <h1>COSMOS TOURS</h1>
                    <p>TRAVEL AGENTS - COSMOS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2020/01/01 - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: NOW - 2024/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: COSMOS</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <h1 className='mb-0 text-center'><strong>ADVENTURE IS KNOCKING</strong></h1>
                <hr className='mt-0 border-2'></hr>
                <p>We know why you travel. We know that another day in an amazing destination means more to you than a fancy chocolate on your pillow! Cosmos travel experts still insist that you enjoy comfortable, clean, and attractive hotels; a professional Tour Director; guided sightseeing of must-see sights with knowledgeable Local Guides; occasional meals; and seamless transportation that makes getting there half the fun! And with so many other Cosmos destinations around every corner of the world (Europe, North America, South & Central America, Africa, Middle East, Asia, Australia and New Zealand), it’s easy to turn “wish I could” into “glad I did.” Go ahead, open the door when adventure knocks!</p>
            </Container>

            <Container className='my-3'>
                <Row className='d-flex align-items-center'>
                    <Image
                        src={CosmosTours1}
                        alt='placeholder image'
                        width='100%'
                        className='all-inclusive__image my-2'
                    />
                    <h2>LET YOUR BUDGET GO FAR TOO</h2>
                    <p>No one brings your dream trip closer to reality than Cosmos. We invented affordable touring more than 50 years ago, and today we are better than ever at bringing you the world on a budget. Let us help you discover new places and unique experiences, or turn your bucket wish list into a “been there done that” list. All with the con?dence and affordability that only the expert in budget touring can bring. Because Cosmos specializes in packaged travel arrangements, we have clout with suppliers that allows us to show you some of the world’s most incredible cities and sites at a remarkable price. Our fantastic Cosmos vacations are within reach starting at just $100 per day. It’s just another way Cosmos makes your dream adventure a reality!</p>
                </Row>
                <Row className='d-flex align-items-center'>
                    <Image
                        src={CosmosTours2}
                        alt='placeholder image'
                        width='100%'
                        className='all-inclusive__image my-2'
                    />
                    <h2>UNDISCOVERED TOURS - LESS CROWDS. MORE WONDER.</h2>
                    <p>While you’re no doubt dreaming of the red-tiled rooftops of Italy, the smooth whiskies of Scotland, and the dramatic waters of the Pacific Northwest, wait no more for the green light to pack your bags and go! As you turn from armchair traveler to active explorer, it’s natural to crave the roads less traveled. Open the door to the undiscovered treasures of the world – the coasts without crowds, the towns without traffic, and the thrilling sights without the throngs. Our exclusive collection of Undiscovered Tours invites you to trade the roar of Rome for the tranquility of Tuscany in Italy, the clamor of crowds for the calm of the British countryside, and the congested cities of North America for the crowd-pleasing gems in your own backyard. Cosmos Undiscovered Tours lead you off the beaten piazzas and down the cobblestones less traveled, getting you up close to the untouched, the unspoiled, and the unexpected, all while meeting your expectations of nothing less than extraordinary.</p>
                </Row>
            </Container>

            <Container>
                <div>
                    <iframe
                        width='100%'
                        src='https://www.youtube.com/embed/qnFathZPQko'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='my-3 video__breakpoint'
                    ></iframe>
                </div>
            </Container>

            <Container className='my-3'>
                <Image
                    src={CosmosLogo}
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
