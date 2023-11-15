import { 
    Container, 
    Image, 
    Button, 
    Row, 
    Stack, 
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import CruisePH from '../../../assets/images/cruise_placeholder.jpg';

import IdeaCruiseLogos from '../IdeaCruise/IdeaCruiseLogos'

export default function IdeaCruise() {
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
                <Image src={CruisePH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>WHY CHOOSE<br></br> A CRUISE VACATION?</h1>
                    <p>TRAVEL AGENTS - CRUISES, OCEAN CRUISES</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2021/01/01 - 2023/12/31
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: TODAY - 12/31/2023
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: OCEAN CRUISES</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3'>
                <p>
                    Few vacations can match the value of a cruise. Many of the greatest,
                    most intriguing destinations in the world can be explored on a cruise
                    vacation. From sparkling coastal towns to picturesque villages and
                    Europe’s iconic landmarks to serene, secret, island lagoons, cruising
                    provides the opportunity to be comfortably transported to a myriad of
                    famous destinations across the globe. Unpack just once and enjoy a
                    different adventure every day, with mostly everything included in one
                    up front cost. Your stateroom, entertainment, food and transportation
                    to each destination are all included, while shore excursions,
                    specialty dining restaurants, upgrades, spas and gratuities on some
                    cruise ships may be extra. Whether you are budget conscious or
                    extravagant, seeking relaxation or excitement, a cruise vacation
                    offers something memorable for everyone.
                </p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={CruisePH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>The Onboard Experience</h2>
                <p>
                    While you are transported to intriguing destinations world-wide, you
                    can choose from a broad range of activities and amenities, which vary
                    by cruise line and by ship. Gain fascinating insights from guest
                    lecturers, enrichment classes and be entertained by shows. Spend
                    quality time with your significant other, while your children learn
                    and play in the supervised kid's area, and the older children have a
                    blast in the ship’s teen center. There are also multiple dining
                    venues, swimming pools, movie theaters, ice skating rinks, and health
                    and spa facilities, to delight all interests and age groups. Cruise
                    lines have also taken the quality of dining to new levels of
                    sophistication, with celebrity-chef-inspired menus and sommeliers to
                    help you select the perfect wine pairing to bring out the best flavors
                    from you mouth-watering cuisine. Accommodations range from luxury
                    suites with private balconies to affordable inside staterooms.
                    <br></br>
                    Here is just a sampling of the cruise lines that you can choose from,
                    each offering their own distinct styles and experiences:
                </p>
                <ul>
                    <li>
                        <strong>Luxury:</strong> For sophisticated cruisers with elegant,
                        luxurious ships that range from yachts to small/mid-sized ships,
                        with a few hundred guests or less.
                    </li>
                    <li>
                        <strong>Premium:</strong> An upscale experience that caters to all
                        age groups and interests. Featuring mid-sized ships with more ocean
                        view staterooms and a wide choice of services and amenities.
                    </li>
                    <li>
                        <strong>Contemporary:</strong> Ships are larger and carry more
                        passengers, offering more entertainment venues to appeal to all
                        ages. Families prefer these for their child and teen programs and
                        more stateroom choices. Attire is often relaxed with designated
                        formal occasions.
                    </li>
                </ul>
                <p>
                    From Alaska to Asia, South America to the South Pacific and beyond,
                    are you ready to explore our world’s wonders by ocean? Our travel
                    advisors cruise expertise includes cruise lines, ships, itineraries,
                    flights, shore excursions, transfers, pre-and-post cruise hotels and
                    insider destination information. Trust your cruise details to a
                    professional, so you can relax and focus on enjoying your ultimate
                    cruise vacation.
                </p>
            </Container>

            <Container className='mb-4'>
                <Image
                    src={CruisePH}
                    width='100%'
                    className='custom-fluid-image mb-2'
                />
                <h2>
                    Distinctive Voyages: Unforgettable Cruise Explorations with Bonus
                    Amenities and Perks
                </h2>
                <p>
                    Distinctive Voyages, offered exclusively through Travel Leaders’
                    agencies, elevates your cruise experiences by providing you with
                    complimentary amenities at no additional cost. These voyages may
                    include:
                </p>
                <ul>
                    <li>The Services of a Distinctive Voyages Host</li>
                    <li>Invitation to A Private Welcome Reception</li>
                    <li>
                        An Exclusive Shore Event that will truly connect you to your
                        destination
                    </li>
                    <li>
                        Surprise & Delight Bonus Amenity to celebrate sailings of 14+ nights
                    </li>
                    <li>
                        Enjoy an exclusive tour with a Private Car & Driver on select
                        sailings
                    </li>
                    <li>
                        Culinary Collection sailings featuring cooking demonstrations,
                        galley tours, delightful meals and wine and spirit tastings
                    </li>
                </ul>
                <p>
                    With over 300 departures annually across 12 cruise lines, our
                    Distinctive Voyages offer exclusive amenities and services you can't
                    get anywhere else. Available only through our agency, please contact
                    us to book your next cruise adventure on one of the following cruise
                    lines.
                </p>
            </Container>

            <IdeaCruiseLogos />

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    Distinctive Voyages sailing dates and amenities, including exclusive
                    shore events or private car and driver ports, are current at time of
                    printing and are subject to change without notice. Amenities apply to
                    1st and 2nd passenger only. Offers are subject to availability, at
                    time of booking, and may be altered or withdrawn at any time without
                    notice. Booking procedure is current at time of print and varies by
                    cruise line. Pricing will be confirmed at time of booking.
                    Cancellations, refunds, and penalties are imposed by the individual
                    cruise lines. Distinctive Voyages amenities may be substituted if a
                    minimum number of guests are not confirmed on any given departure.
                    Combinability varies Exclusive Shore Events vary by cruise line.
                    Private Car and Driver option is available only once per sailing as
                    availability is limited in each port. Registration is required
                    Register early to make sure you secure the Private Car and Driver
                    experience you prefer. Amount of time noted for the car and driver is
                    for the duration only and not possible to increase the duration of the
                    time noted.
                </p>
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
