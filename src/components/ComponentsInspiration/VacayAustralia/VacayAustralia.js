import {
    Container,
    Image,
    Row,
    Col,
    Stack,
    Button
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import AustraliaHero from '../../../assets/images/australia_hero.jpg';
import CoverAustralia from '../../../assets/images/cover_australia.jpg';
import AustraliaLogo from '../../../assets/logo/AustraliaLogo.png';

export default function VacayAustralia() {
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
                    src={AustraliaHero}
                    className="custom-fluid-image"
                    width='100%'
                />
                <div className='text-on-hero'>
                    <h1>AUSTRALIA VACATIONS</h1>
                    <p>TRAVEL AGENTS - AUSTRALIA</p>
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
                        <p className='m-0' >VACATION CODE: AUSTRALIA</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <Row>
                    <p>From sensational coastlines and countryside to diverse nature and wildlife, there's no shortage of reasons to visit Australia! This is a place where vibrant, cosmopolitan cities fringe pristine beaches and sparkling harbors. Experience the excitement of the city, but drive just a few miles and you'll hit the golden sand of famous beaches and landscapes plucked straight from a postcard. From the outback to the coast and the icons and the undiscovered, each destination has its own charm and character. Keep reading to discover the top reasons to plan a trip to Australia now!</p>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0 pe-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>Abundant Wildlife</h3>
                        <p>Australia boasts some weird and wonderful wildlife! Tree climbing kangaroos, snoozy koalas, paddling platypus, choral kookaburras and dinosaur-like cassowaries all call Australia home. Plan your holiday to make the most of Australia’s natural wonders timing your trip to tie in with the spring wildflowers, whale shark season in Western Australia, the turtle hatching on the Great Barrier Reef, the East Coast whale migration or the cascading waterfalls at the end of the ‘wet’ in the Tropical North. Keep cameras at the ready as some of these phenomena need to be seen to be believed.</p>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0 ps-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>World's Oldest Culture</h3>
                        <p>The Aboriginal people of Australia have a rich, living culture stretching more than 50,000 years. You'll find opportunities to immerse yourself in Aboriginal culture throughout the country, from urban festivals to rock art tours, celebrity chefs serving delicious bush tucker to storytelling around a campfire. Meet the guides, listen to the stories and embark on a journey across place and time.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0 pe-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>Delicious Food & Wine</h3>
                        <p>Australians are passionate about good food and wine. Because of this enthusiasm, on a vacation in Australia you’ll enjoy some of the world’s best food and wine experiences served up by friendly locals against beautiful backdrops. Think picnics on white sand beaches home to grazing kangaroos, gin tasting tours under the native eucalyptus trees, tasting menus served up in exquisite dining rooms, barbeques overlooking the rolling surf and cold craft beers drunk in front of crackling fires under outback skies.</p>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0 ps-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>Natural Beauty</h3>
                        <p>Renowned for its wild beauty, Australia’s natural landscapes are nothing less than dramatic. Even just minutes from a major city, you can discover rainforests and red deserts, see ancient Aboriginal rock art sites, climb snow-capped mountains and swim in clear waters fringed by white-sand beaches. Experience the natural wonders of Australia from a luxury eco-resort, a campground right on the beach or with an Aboriginal guide. Wherever your adventures take you, it’s a chance to unplug, reconnect with nature and reignite your appetite for adventure.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='pe-md-0 pe-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>Walks & Hikes</h3>
                        <p>There are endless opportunities to walk and hike in Australia, with tracks ranging from short and easy to long and rigorous. Sydney’s coastal walks take you along rugged cliffs above crashing waves, while Tasmania’s Overland Track winds through glacier-carved landscapes. Choose to hike independently or join a number of premium guided walks. Whichever you choose, you’ll discover the exquisite scenery that makes Australia special.</p>
                    </Col>
                    <Col xs={12} md={6} className='ps-md-0 ps-lg-5 mb-4'>
                        <Image
                            src={CoverAustralia}
                            alt='placeholder image'
                            width='100%'
                            className='custom-fluid-image mb-2'
                        />
                        <h3>City Escapes</h3>
                        <p>Seek out some sunshine and good times in Australia's cities. In Australia's cities you'll be able to experience the excitement of the city, but drive just a few miles and you'll hit the golden sand of famous beaches and landscapes. Plus, with endless nature at the doorstep of most Australian cities you'll have your choice of day trips serving up fresh air, unique flavors and locals who know a thing or two about living life to the fullest.</p>
                    </Col>
                </Row>
            </Container>

            <Container className='mb-5'>
                <h2>Why Book with a Travel Advisor?</h2>
                <p className='mb-0'><strong>Our agency can help you understand all options, along with cancellation and refund policies, to the fullest.</strong></p>
                <ul>
                    <li>We have access to special group pricing you’ll find nowhere else.</li>
                    <li>We can recommend the best options for travel insurance so you know your entire trip will be protected.</li>
                    <li>We’ll handle all the details of your trip so you can travel with peace of mind!</li>
                </ul>
            </Container>

            <Container className='my-5'>
                <h2 className='text-center'>WE CAN HELP YOU PLAN THE ULTIMATE AUSTRALIAN ADVENTURE! CONTACT OUR AGENCY TODAY TO LEARN MORE.</h2>
                <Image
                    src={AustraliaLogo}
                    width='100%'
                />
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