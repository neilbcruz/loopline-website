import {
    Container,
    Image,
    Button
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import ItalyPH from '../../../assets/images/italy_placeholder.jpg';

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
                    src={ItalyPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>ITALY VACATIONS</h1>
                    <p>TRAVEL AGENTS - DESTINATIONS, ITALY</p>
                </div>
            </Container>

            <Container className='my-3'>
                <p>With the richest artistic heritage in the world, jaw-dropping coastlines of the Mediterranean, bustling metropolitan cities filled with UNESCO World Heritage Sites, the world's greatest gastronomic experiences, rolling hills and plentiful vineyards, Italy is the perfect vacation destination for families of all sizes, couples celebrating honeymoons and anniversaries, and groups of adventure-loving friends.</p>
                <p>Italy’s iconic cities—Rome, Venice, Florence and Milan—deserve your attention, for they are bastions of history and culture. But a visit here would not be complete without discovering the secrets hidden in the country’s thousand villages, where you can truly embrace its traditions and way of life.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={ItalyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Authentic Italy Experiences</h2>
                <ul>
                    <li><strong>Escape to Gardens of Bomarzo</strong>, commonly called the Park of Monsters, a 16th-century garden with a collection of bizarre and fascinating sculptures.</li>
                    <li><strong>Step into history across Naples</strong>—ancient Pompeii, Paestum and Herculaneum should be on everyone list.</li>
                    <li><strong>Visit the country’s 54 incredible UNESCO World Heritage Sites</strong>, from the staggering Colosseum in Rome to the historic town center of San Gimignano and the stunning Dolomite Mountains.</li>
                    <li><strong>Explore the spectacular ruins of Segesta</strong> in Palermo, with its Roman theater, the attractive village of Cefalù and the breathtaking view from Erice.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={ItalyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <ul>
                    <li><strong>Sink your fork into Tiramisu</strong> in the town it was invented in, historic Treviso.</li>
                    <li><strong>Soak up the country’s incomparable art:</strong> study the statue of David, gaze up at the impressive Sistine Chapel, revel in the statues of Rome or view the Last Supper in Milan.</li>
                    <li><strong>Grab your camera and watch the sunrise</strong> over the sloping hills and stacked buildings of the Amalfi Coast, one of the most photographed areas of the entire country.</li>
                    <li><strong>Walk along the Venetian canals</strong> and marvel in the pastel-hued buildings, the historic palaces and the bustling piazzas. Sit and watch the tourists and locals pass or do some window shopping in the city’s famed boutiques.
                    </li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={ItalyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Authentic Italy Experiences</h2>
                <ul>
                    <li><strong>Burn off all the pasta with a bike tour of Tuscany.</strong> Weave around the many hills, vineyards and waterfalls of this famous region in Italy. Make sure to stop for a glass of vino or a photo op!</li>
                    <li><strong>Escape to the island of Capri</strong>, home to celebrity sightings, wildflower bushes, picturesque coasts and seaside cafes.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>TO PLAN YOUR ITALIAN GETAWAY, CONTACT ONE OF OUR EXPERIENCED TRAVEL EXPERTS TODAY.</h2>
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