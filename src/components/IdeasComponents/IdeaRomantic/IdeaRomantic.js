import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import RomanticPH from '../../../assets/images/romantic_placeholder.jpg';

export default function IdeaRomantic() {
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
                    src={RomanticPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>ROMANTIC VACATIONS</h1>
                    <p>TRAVEL AGENTS - DESTINATIONS, ITALY</p>
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
                        <p className='m-0' >VACATION CODE: ROMANCE</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>Time together exploring new cultures, feasting on your favorite foods, dancing the night away or simply relaxing in the sun, helps remind us all there’s more to us than household chores. Now it’s simply a matter of deciding what you want. Are you leaning towards a romantic escape to Paris, the City of Love and Light, or to Las Vegas, the Entertainment Capital of the World? Would you prefer a couples-only all-inclusive resort with a reputation for global cuisine or one that sits on a gorgeous beach? Would you enjoy a relaxing cruise down a river or hopping from island to island on a yacht?</p>
                <p>Our romance experts have the inside knowledge and years of travel experience to help you make the right choice and find ways to make what might seem like an ordinary vacation, one designed just for romance.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={RomanticPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Romantic Vacations Ideas</h2>
                <ul>
                    <li><strong>Adult-Only Resort:</strong> Everything you want, everything you could desire, is always within reach, including cuisine from Asian fusion to authentic Italian, nightlife and even a private pool.</li>
                    <li><strong>Luxury Small Ship Cruise:</strong> Avoid the crowds and enjoy intimate spaces and personalized service on a smaller cruise ship or sample exotic destinations aboard a yacht with all the comforts of a hotel.</li>
                    <li><strong>River Cruises:</strong> Think of your river cruise as a floating hotel with five star service and dining, plus a breathtaking, ever-changing view outside every window of charming towns and villages in Europe.</li>
                </ul>
                <h2>Romantic Vacations in Europe</h2>
                <ul>
                    <li><strong>Paris:</strong> Watch the iconic Eiffel Tower lights sparkle during a night cruise along the Seine, have your Lady and the Tramp moment at a small bistro, or become inspired together in the Louvre.</li>
                    <li><strong>Venice:</strong> Take a gondola ride for two through the dreamy canals, enjoy the stunning baroque architecture and the startling pink skies as sunsets over St. Mark’s Square.</li>
                    <li><strong>Santorini:</strong> The breathtaking natural beauty and array of colors, from the magenta flowers to the stark white buildings, of this volcanic Greek island will leave every couple starry-eyed.</li>
                    <li><strong>Budapest:</strong> Often called the “Paris of the East,” the elegant architecture, intimate restaurants and cafes make it a perfect backdrop for a romantic vacation.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={RomanticPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Romantic Vacations in the U.S.</h2>
                <ul>
                    <li><strong>New York City:</strong> Stroll hand in hand through Central park, visit museums, or dine at one of many romantic cafes and restaurants that you’ll find only in the Big Apple.</li>
                    <li><strong>San Francisco:</strong> Enjoy the city’s beauty on a sunset walk along the Warf before dining on fresh oysters, or consider a night cruise on the bay for a different view and an excuse to snuggle.</li>
                    <li><strong>Savannah:</strong> Spanish moss, beautiful B&Bs, and classic southern charm create this city’s romantic feel. A carriage ride to enjoy the historic architecture and a nightcap on your balcony, complete a relaxed day.</li>
                    <li><strong>Napa Valley:</strong> Breathtaking landscapes and vineyards for miles, ensure nothing but outstanding dining and wine tastings. Whether you choose to explore a few places or settle in for an afternoon of enjoying the views, you’ll have plenty of time to connect.</li>
                </ul>
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