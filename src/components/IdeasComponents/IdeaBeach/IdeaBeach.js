import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import BeachPH from '../../../assets/images/beach_placeholder.jpg';

export default function IdeaBeach() {
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
                    src={BeachPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>BEACH VACATIONS</h1>
                    <p>TRAVEL AGENTS - <br></br>BEACH VACATIONS, US, CARIBBEAN, MEXICO</p>
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
                        <p className='m-0' >VACATION CODE: BEACH</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>Picture yourself resting atop the soft, sun-warmed sand, the hypnotic waves sweeping away the stress of everyday life, clear blue waters inviting you in for a swim, a bright yellow drink umbrella keeping your cocktail nice and cool. We can tell you’re relaxed already and the good news is turning it in to reality can be just as easy. Will it be a romantic getaway or a family holiday? Do you wish to stay at a beachside high rise, all-inclusive resort or secluded bungalow? Will you spend all your days on the beach, tearing through a stack of novels, or do you plan to experience the local culture too? So much to think about!</p>
                <p>Go back to relaxing and let Travel Leaders take over. We’ll help you sort through all the options to personally design your ideal beach escape. Plus we have the local contacts and detailed knowledge you need to make the best decisions for you and your budget.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={BeachPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <p>Magnificent beaches can be found close to home and in far flung destinations. It’s all about finding the best vacation for you. <strong>Here are a few ideas to kick start your sunny dreams.</strong></p>
                <h2>Beach Vacations in Mexico</h2>
                <ul>
                    <li><strong>Playa del Carmen:</strong> Crystal blue waves lapping onto white sand beaches, an abundance of sea creatures and ancient ruins—what else do you need?</li>
                    <li><strong>Cancun:</strong> Both a party town where you can dance until dawn as well as frolic on the beach with your family.</li>
                    <li><strong>Puerto Vallarta:</strong> Laze on the beach, shop in boutiques or lunch at a stylish café in this sophisticated beach town.</li>
                </ul>
                <h2>Beach Vacations in Australia</h2>
                <ul>
                    <li><strong>Bondi Beach:</strong> A sunbather’s paradise just outside of Sydney where you can hang ten or at least learn what “hang ten” actually means.</li>
                    <li><strong>Byron Bay:</strong> Stunning beaches and accessible rainforests bookend this casual and cool beach town.</li>
                    <li><strong>Whitehaven Beach:</strong> Nestled in the picturesque Whitsunday Islands, Whitehaven is called by many the most beautiful beach in the world.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={BeachPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Beach Vacations in Florida</h2>
                <ul>
                    <li><strong>Destin:</strong> In addition to its spacious beaches, Destin is home to many water parks and other family friendly activities.</li>
                    <li><strong>Naples:</strong> Couples come to this upscale resort town for luxurious hotels and fine dining.</li>
                    <li><strong>Sanibel Island:</strong> Quaint and casual, Sanibel Island is full of seashells and small town charm.</li>
                </ul>
                <h2>Beach Vacations in Hawaii</h2>
                <ul>
                    <li><strong>Maui:</strong> Surf, swim or laze around thirty miles of black, white and red sand beaches.</li>
                    <li><strong>Oahu:</strong> Home to possibly the world’s best beaches for boogie boarding, windsurfing and snorkeling.</li>
                    <li><strong>Kauai:</strong> Filled with sixty beaches and every watersport and beach activity imaginable.</li>
                </ul>
                <h2>Beach Vacations in Caribbean</h2>
                <ul>
                    <li><strong>Anguilla:</strong> Snorkel with rainbow-colored fish, enjoy live music and relax in authentic Caribbean style.</li>
                    <li><strong>British Virgin Islands:</strong> Luxury and seclusion define this lavish sailor’s paradise.</li>
                    <li><strong>Cayman Islands:</strong> Offers barrier reefs, hiking trails and numerous activities to entertain the kiddies.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>WHETHER YOU’RE LOOKING FOR AN ALL-INCLUSIVE FAMILY GETAWAY OR AN OFF THE BEATEN PATH ADVENTURE FOR TWO, OUR EXPERIENCED BEACH VACATION SPECIALISTS WILL MAKE THE PLANNING AS EASY AS THE TRIP.</h2>
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