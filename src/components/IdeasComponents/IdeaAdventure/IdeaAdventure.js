import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import AdventurePH from '../../../assets/images/adventure_placeholder.jpg';

export default function IdeaAdventure() {
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
                    src={AdventurePH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>ADVENTURE VACATIONS</h1>
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
                        <p className='m-0' >VACATION CODE: ADVENTURE</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>What kind of adventure are you seeking? Solo, friends, family? Skiing down powder-fresh mountains, zip lining through the canopy of the jungle, spelunking the world’s largest caves, kayaking remote world heritage sites, or diving abandoned shipwrecks? That’s where Travel Leaders can help. We have local knowledge and global connections to make sure you get the personalized adventure you’re seeking, along with the perfect hotel to relax in after the adrenaline fades. </p>
                <p><strong>Need some ideas to get you started?</strong> Here are just a few of the adventure vacations we’ve planned around the world.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={AdventurePH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Mountain-Based Adventure Travel</h2>
                <ul>
                    <li><strong>Heli-skiing in the Rockies:</strong> Drop from a helicopter onto untouched powder in the remote mountains of the Canadian Rockies.</li>
                    <li><strong>Horseback Riding in Patagonia:</strong> Gallop through the dramatic landscapes of South America’s awe-inspiring southern tip.</li>
                    <li><strong>Hiking on Volcanoes in Hawaii:</strong> There’s no better way to witness the raw power of a volcano than hiking on an active one.</li>
                </ul>
                <h2>Water-Based Adventure Travel</h2>
                <ul>
                    <li><strong>White-water rafting in the Grand Canyon:</strong> See this spectacular landscape from a whole new perspective, navigate rapids and pause for day hikes.</li>
                    <li><strong>Kayaking around New Zealand:</strong> In Milford Sound, a world heritage site, you’ll paddle next to waterfalls, breathtaking cliffs and curious penguins.</li>
                    <li><strong>Scuba Diving in the Bahamas:</strong> This island paradise is home to natural and artificial shipwrecks and an abundance of colorful sea life.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={AdventurePH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Hiking-Based Adventure Travel</h2>
                <ul>
                    <li><strong>The Inca Trail:</strong> Approach Machu Picchu the way the Incas did, surrounded by lush mountain scenery and smaller ruins along the way.</li>
                    <li><strong>Petra:</strong> Enjoy canyon hiking, sleeping under the stars and visiting one of the Seven Wonders of the World in Jordan.</li>
                    <li><strong>Australia's Bibbulmun Track:</strong> Tackle a winding, 1,000 km trail through forests and sandy beaches.</li>
                </ul>
                <h2>Adventure Vacation Destinations</h2>
                <ul>
                    <li><strong>Alaska:</strong> Explore America’s last frontier and get up close and personal with glaciers by kayak, raft, foot or even dog sled.</li>
                    <li><strong>Costa Rica:</strong> In the land of rain forests, volcanos and waterfalls, the challenge here is picking which adventure to try first—hiking, rafting, surfing or zip lining?</li>
                    <li><strong>Australia:</strong> With its vast outback, rocky terrain and beautiful beaches, you’ll find adventure around every corner no matter where you go.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>ANY OF OUR CERTIFIED EXPERTS IN ADVENTURE TRAVEL LISTED TO THE RIGHT CAN HELP YOU PLAN A GETAWAY THAT’S JUST YOUR LEVEL OF ADRENALINE AND RELAXATION.</h2>
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