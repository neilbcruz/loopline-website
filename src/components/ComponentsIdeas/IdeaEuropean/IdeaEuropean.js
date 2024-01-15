import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverEuropean from '../../../assets/images/cover_european.jpg';
import EuropeanOceanCruise from '../../../assets/images/european_oceancruise.jpg';
import EuropeanGuidedVacations from '../../../assets/images/european_guidedvacations.jpg';

export default function IdeaEuropean() {
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
                    src={CoverEuropean}
                    className='custom-fluid-hero'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>EUROPEAN VACATIONS</h1>
                    <p>TRAVEL AGENTS - EUROPE, RIVER CRUISES, TOURS</p>
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
                        <p className='m-0' >VACATION CODE: EUROPE</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>From the castles of Scotland to Germany’s medieval towns, the Mediterranean’s azul waters to the Baltic’s fairytale cities, Europe is a destination you could spend a lifetime exploring. Whether it’s your first time crossing the pond or 100th, the options are endless for new adventures from local foods to VIP tours of places you won’t find in the guide books.  Do you want to climb the towers of ancient castles? Enjoy the eye popping colors of Greece’s coastline against the shimmering sea? Spend your evening learning to dance with locals in Madrid?</p>
                <p>As the U.S. dollar continues to strengthen in comparison to the Euro, your hard-earned vacation budget stretches further. Thankfully we’re here to help you narrow down the options and make the most of your vacation time. Our travel experts have experienced the hotels, resorts, tour operators, cruise ships and train services that form the backbone of any perfect European vacation.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={EuropeanOceanCruise}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h1 className='mb-4'>CRUISING IN EUROPE</h1>
                <h2>River Cruise Vacations</h2>
                <ul>
                    <li><strong>Step Into History:</strong> Your river cruise ship docks right in the heart of the city, giving you more time to sit in cafes, stroll through museums and peruse the shops.</li>
                    <li><strong>All-Inclusive:</strong> Most river cruise companies deliver an all-inclusive experience, providing you with all meals, regional wines and free shore excursions with a knowledgeable guide.</li>
                    <li><strong>Expansive Views:</strong> You’ll see more of Europe from its rivers. The constantly changing scenery includes children laughing in small villages, vineyards stretching across the mountains, stately castles shrouded in the early morning mist and much more.</li>
                    <li><strong>Iconic Rivers:</strong> See firsthand that the rivers that played such vital roles in shaping Europe’s cultural identity—the Danube, Rhine, Moselle, Main and Volga.</li>
                </ul>
                <h2>Ocean Cruise Vacations</h2>
                <ul>
                    <li><strong>Ideal Itineraries:</strong> Whether you want to see Gaudi’s masterpieces in Barcelona, shop in Istanbul’s Grand Bazaar, tour a vineyard in Italy or a museum in London, you’ll find the perfect itinerary that takes you to all of your dream destinations.</li>
                    <li><strong>Incredible Onboard Options:</strong> Rock climbing in the morning and Venice in the afternoon? A day of exploring Copenhagen followed by a night at a Broadway musical? Larger cruise ships give you the options to make your vacation truly memorable.</li>
                    <li><strong>Cosmopolitan Ports:</strong> Your cruise can visit the world’s most desirable cities—Rome, Dubrovnik, St. Petersburg, Oslo, Athens, Lisbon, Santorini, Cannes and more.</li>
                    <li><strong>Family-Friendly:</strong> With more onboard options for kids, including splash parks and kids clubs, an ocean cruise makes it easier to bring the entire family along.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={EuropeanGuidedVacations}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h1>EUROPEAN GUIDED VACATIONS</h1>
                <ul>
                    <li><strong>Insider’s Access:</strong> On a guided vacation, no time is wasted standing in long lines. Your tour director will take you right up to the entrance, unclick the red velvet rope and usher you inside, giving you more time to savor every piece of art in the museum.</li>
                    <li><strong>Walking Encyclopedia:</strong> Your tour guide will most likely be from the area you’re touring and have intimate, inexhaustible knowledge of the villages, people and culture, knowledge to share with you throughout your journey.</li>
                    <li><strong>Flexibility is Key:</strong> Did you want to visit that little book shop you read about near Notre Dame Cathedral? Your tour guide has the authority and flexibility to take the group off course and experience something unique that you personally wanted to see.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CONTACT ONE OF OUR TRAVEL LEADERS EUROPEAN VACATION EXPERTS TO START PLANNING YOUR CULTURAL ODYSSEY.</h2>
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