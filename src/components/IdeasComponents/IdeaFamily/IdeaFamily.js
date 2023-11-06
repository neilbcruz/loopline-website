import {
    Container,
    Image,
    Button,
    Row,
    Stack
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import FamilyPH from '../../../assets/images/family_placeholder.jpg';

export default function IdeaFamily() {
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
                    src={FamilyPH}
                    className='custom-fluid-image'
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1 className='text-black'>FAMILY VACATIONS</h1>
                    <p className='text-black'>TRAVEL AGENTS - FAMILY VACATIONS</p>
                </div>
                <Row>
                    <Stack
                        direction="horizontal"
                        gap={5}
                        className="d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary"
                    >
                        <p className="m-0" xs={4}>
                            BOOKING PERIOD: 2021/01/01 - 2023/12/31
                        </p>
                        <div className="vr" />
                        <p className="m-0" xs={4}>
                            TRAVEL PERIOD: TODAY - 12/31/2024
                        </p>
                        <div className="vr" />
                        <p className="m-0">VACATION CODE: FAMILY INSPIRATION</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>A well-planned family vacation ensures an escape from the hustle of everyday life, quality time together and an exciting adventure. You’ve daydreamed long enough, it’s time to getaway. Now the big question is where to go, how to get there and stay on budget, right? </p>
                <p>Do you need special play areas for toddlers or a social club for teens? Will grandma and grandpa join in the fun, and what’s their activity level? Are you looking to expose your children to new cultures in Europe, take them on a wild safari adventure or simply relax on a cruise ship?</p>
                <p>Those are important questions; thankfully, we have the answers.</p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={FamilyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <p>Thanks to our vast experiences around the world, along with our long history of helping families just like yours find their ideal vacation experience, we know which resorts have the best hangout areas, which cruise lines have the best itineraries, and which hotels are in the best locations.</p>
                <h2>Family Vacations with Small Children</h2>
                <ul>
                    <li><strong>Family Friendly Resorts:</strong> Relax in the safe environment of an all-inclusive resort, sipping colorful drinks while the kiddies play in a wide variety of pools and splash parks.</li>
                    <li><strong>Beach Fun Close to Home:</strong> Rent a beach house on the shore and spend your days lounging in the sun and frolicking in the sand to maximize your vacation days.</li>
                    <li><strong>Orlando Theme Park:</strong> From princess to pirate and Spongebob to Shrek, the major theme parks offer family fun for all ages. Disney World, Universal Orlando, Sea World and Legoland are top attractions.</li>
                    <li><strong>Cruise Options:</strong> Favorite DreamWork’s characters onboard Royal Caribbean International, and Nickelodeon’s all-stars on Norwegian Cruise Line or Disney’s signature service designed just for the kid in all of us.</li>
                    <li><strong>National Parks:</strong> Enjoy long, leisurely hikes through the picturesque, awe-inspiring natural settings in North America.</li>
                    <li><strong>Washington, DC:</strong> The free museums, free zoo, national monuments and wide open spaces will give your family plenty of room and opportunities to have a great time.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={FamilyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Family Vacations with Teens</h2>
                <ul>
                    <li><strong>Costa Rica:</strong> Outdoor adventures, exotic animals, chill beaches and breathtaking rain forests—all wrapped up in a friendly culture will keep everyone engaged and excited.</li>
                    <li><strong>Cruise Vacations:</strong> Teens are able to roam where they like on a safely-enclosed cruise ship, giving them the freedom to have their own experiences and spend time dancing and playing video games in teens-only clubs.</li>
                    <li><strong>Universal Orlando:</strong> While you take the toddlers to Seuss Landing, older kids can run off to the pulse-pounding attractions at Universal’s Islands of Adventure.</li>
                    <li><strong>Ski Holiday:</strong> Whether they’re learning how to snowboard in Vale or slalom in the Alps, the rush of skiing brings a smile to kids of all ages.</li>
                    <li><strong>Theme Vacations:</strong> Traveling with teens provides the perfect opportunity to expand their horizons – let them do what they love (or have always wanted to try).  Maybe its surf lessons in Hawaii, horseback riding in Colorado, cooking classes in France or mountain biking in New Zealand.</li>
                </ul>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={FamilyPH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>Family Vacations with Every Generation</h2>
                <ul>
                    <li><strong>Caribbean and Mexican Resorts:</strong> The sun, sand, surf and cuisine will provide everyone in your family with options to play and relax together.</li>
                    <li><strong>Dude Ranches:</strong> Spend long, full days horseback riding, fishing in picturesque lakes and telling stories around a campfire as you roast marshmallows.</li>
                    <li><strong>Alaskan Cruise:</strong> Watching whales breach the surface, eagles soaring in the air and glaciers towering overhead are spectacles fit for all ages.</li>
                    <li><strong>European Capitals:</strong> Easy access to major tourist cities in Europe like London, Paris and Rome provides the perfect base to explore new cultures, dive into history, and spend quality family time on a trip of a lifetime.</li>
                    <li><strong>Down Under:</strong> Australia is easier to get to then ever, and offers family experiences that can’t be beat – from the outback to the Great Barrier Reef, koala’s to kangaroo’s, there’s nothing like Australia.</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>CONTACT ONE OF OUR FAMILY VACATION EXPERTS TODAY TO START PLANNING YOUR FAMILY'S MEMORY-MAKING ADVENTURE.</h2>
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