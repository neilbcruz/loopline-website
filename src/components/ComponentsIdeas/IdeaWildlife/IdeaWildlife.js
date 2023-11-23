import {
    Container,
    Image,
    Button,
    Stack,
    Row
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CoverWildlife from '../../../assets/images/cover_wildlife.jpg';

export default function IdeaWildlife() {
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
                    src={CoverWildlife}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>WILDLIFE & SAFARI VACATIONS</h1>
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
                        <p className='m-0' >VACATION CODE: SAFARI</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>Close-encounters with cheetahs in Africa, koalas in Australia or polar bears in Antarctica are par for the course on a wildlife or safari vacation. With wildlife tours on every continent, narrowing down the options is no easy task. Even if you’ve decided on the continent, there’s the pesky matter of which country to visit. Are you sure you’re traveling at the right time of year to see what you want? And how, exactly, do you get up close and personal with the wildlife you’ve traveled so far to see?</p>
                <p>Travel Leaders can lead you though the brush to bring your adventure into focus. Our experts have local knowledge and global connections to get you within a safe distance of exotic wildlife across the world.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={CoverWildlife}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Why Go on a Wildlife & Safari Vacation</h2>
                <ul>
                    <li><strong>Nature:</strong> You won’t just see nature, you’ll be immersed in some of the most exotic areas of the world to experience wondrous creatures in their natural habitats.</li>
                    <li><strong>Discovery:</strong> You’ll return home with a new appreciation for the importance of preserving our planet’s varied ecosystems.</li>
                    <li><strong>Memories:</strong> We can’t forget the FOMO you’ll inspire in friends with stunning photographs and adventures that will leave you speechless.</li>
                </ul>
                <h2>Wildlife & Safari Vacation Destinations</h2>
                <ul>
                    <li><strong>Africa:</strong> Famous game reserves and national park, where the big five game animals—lions, elephants, buffaloes, leopards and rhinoceroses—roam.</li>
                    <li><strong>Australia:</strong> Diverse wildlife on eco-tours in Sydney, Great Barrier Reef cruises in Cairns, and koala and kangaroo experiences in Melbourne.</li>
                    <li><strong>Alaska:</strong> Glaciers, wildlife and national parks from the perspective of spectacular ships, exclusive rail service and Princess-owned wilderness lodges.</li>
                    <li><strong>Antarctica:</strong> Vast white wilderness teeming with penguins, polar bears, glaciers and the occasional scientist.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={CoverWildlife}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Wildlife & Safari Vacation Ideas</h2>
                <ul>
                    <li><strong>Kenya:</strong> This varied landscape is home to the Great Rift Valley, a UNESCO World Heritage Site, and lush grasslands and savannas that many African animals call home.</li>
                    <li><strong>Monteverde Cloud Forrest:</strong> This lush Costa Rican reserve is home to 400 different birds and more than 100 different mammals, including sloths, monkeys and anteaters.</li>
                    <li><strong>Ningaloo Coast:</strong> A World Heritage Site due to its natural beauty and biodiversity, the Ningaloo Coast is a nature lover’s dream on the Western coast of Australia.</li>
                    <li><strong>Galapagos:</strong> A living museum where you can swim with sea lions, bask in the sun next to iguanas and listen to bull elephants bellow.</li>
                    <li><strong>Seward & Kenai Fjords:</strong> Summertime visitors will have a grand time spotting otters, whales and puffins.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>NO MATTER WHERE YOU’RE HEADED, YOU’RE SURE TO ENCOUNTER BREATHTAKING LANDSCAPES AND ENJOY NATURE IN ITS FULL, UNTAMED GLORY.</h2>
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