import {
    Container,
    Image,
    Button,
    Row,
    Col,
    Stack,
} from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import TravelLeadersPH from '../../../assets/images/travelleaders_placeholder.jpg';

import TravelLeadersCarousel from './TravelLeadersCarousel';
import TravelLeadersLogos from './TravelLeadersLogos';

import AltourPH from '../../../assets/images/cruise_images/altour_placeholder.jpg';
import AmalyraPH from '../../../assets/images/cruise_images/amalyra_placeholder.jpg';
import WorldTravellerPH from '../../../assets/images/cruise_images/worldtraveller_placeholder.jpg';
import AvalonPH from '../../../assets/images/cruise_images/avalon_placeholder.jpg';
import MarseillePH from '../../../assets/images/cruise_images/marseille_placeholder.jpg';
import BicycleWinePH from '../../../assets/images/cruise_images/bicyclewine_placeholder.jpg';
import CrystalSymphonyPH from '../../../assets/images/cruise_images/crystalsymphony_placeholder.jpg';
import QueenMary2PH from '../../../assets/images/cruise_images/queenmary2_placeholder.jpg';
import Explora1PH from '../../../assets/images/cruise_images/explora1_placeholder.jpg';
import ImpressionIslaPH from '../../../assets/images/cruise_images/impressionisla_placeholder.jpg';
import SandalsEmeraldBayPH from '../../../assets/images/cruise_images/sandalsemeraldbay_placeholder.jpg';
import SirenaPH from '../../../assets/images/cruise_images/sirena_placeholder.jpg';
import PaulGauguinPH from '../../../assets/images/cruise_images/paulgauguin_placeholder.jpg';
import HubbardGlacierPH from '../../../assets/images/cruise_images/hubbardglacier_placeholder.jpg';
import KentuckyDerbyPH from '../../../assets/images/cruise_images/kentuckyderby_placeholder.jpg';
import MountRobsonPH from '../../../assets/images/cruise_images/mountrobson_placeholder.jpg';
import SandalsDunnRiverPH from '../../../assets/images/cruise_images/sandalsdunnriver_placeholder.jpg';
import SeabournPursuitPH from '../../../assets/images/cruise_images/seabournpursuit_placeholder.jpg';
import CadizSpainPH from '../../../assets/images/cruise_images/cadizspain_placeholder.jpg';
import GarzaBlancaPH from '../../../assets/images/cruise_images/garzablanca_placeholder.jpg';
import StarPridePH from '../../../assets/images/cruise_images/starpride_placeholder.jpg';



export default function CruiseCaribbeanIcon() {
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
                <Image src={TravelLeadersPH} className='custom-fluid-image' width='100%' />
                <div className='text-on-hero'>
                    <h1>ELEVATE THE WAY YOU EXPLORE THE WORLD</h1>
                    <p>TRAVEL AGENTS - LUXURY TRAVEL, CRUISE, TOUR, RAIL, HOTELS AND RESORTS</p>
                </div>
                <Row>
                    <Stack
                        direction='horizontal'
                        gap={5}
                        className='d-flex justify-content-center align-items-center text-align-center py-2 px-5 bg-secondary'
                    >
                        <p className='m-0' xs={4}>
                            BOOKING PERIOD: 2023/09/29 - 2023/11/30
                        </p>
                        <div className='vr' />
                        <p className='m-0' xs={4}>
                            TRAVEL PERIOD: 2023 AND BEYOND
                        </p>
                        <div className='vr' />
                        <p className='m-0'>VACATION CODE: 2636</p>
                    </Stack>
                </Row>
            </Container>

            <Container className='my-3 mb-5'>
                <p>
                    Luxury travel is an art form, for both those who enjoy the finer things in life and for those who plan these incomparable vacations. The travel professionals at our agency practice this art frequently, and we understand how to layer colorful indulgences upon a unique canvas of global experiences. The resulting composition is an inspiring piece of performance art — a blissful escape that enriches your soul and broadens your horizons.
                </p>
                <p>In your <a href='https://viewer.joomag.com/luxury-travel-2023-volume-2-canada-edition/0048516001693340780?short&' className='text-decoration-none' target='_blank' rel="noopener noreferrer">complimentary digital issue of Luxury Travel magazine</a> and in the offers below, you will find a collection of opportunities to inspire your next work of art. From all-inclusive resorts packed with 5-star gourmet restaurants and lavish, all-suite cruise itineraries to private jet services, personalized tours and more, these vacations are definitely masterpieces.</p>
            </Container>

            <TravelLeadersCarousel />

            <Container>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AltourPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Luxury Private Jet</div>
                        </div>
                        <h3>ALTOUR AIR</h3>
                        <p>Enjoy a Private Flight Experience Tailored to Your Schedule</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AmalyraPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>AmaLyra on the Seine River</div>
                        </div>
                        <h3>AmaWaterways</h3>
                        <p>Save Up to $2,400 + Receive US$300 Onboard Credit per Stateroom on Select 2023 and 2024 River Cruises</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={WorldTravellerPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>World Traveller at Sea</div>
                        </div>
                        <h3>Atlas Ocean Voyages</h3>
                        <p>Soar. Explore. Save. Second Guest Sails Free. All-Inclusive.  </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={AvalonPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Avalon Expression on the Rhine River</div>
                        </div>
                        <h3>Avalon Waterways</h3>
                        <p>Receive Prepaid Gratuities on Select 2023 or 2024 Avalon Waterways Active & Discovery River Cruises</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MarseillePH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Marseille, France</div>
                        </div>
                        <h3>Azamara®</h3>
                        <p>Book Early & Save 20%. Plus, Enjoy a Complimentary Experience More Essentials Package — Including US$300 Onboard Credit, Wi-Fi & Premium Beverages for Two — for Veranda Stateroom or Higher</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={BicycleWinePH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Bicycling through Wine Country</div>
                        </div>
                        <h3>Backroads</h3>
                        <p>Enjoy a 5-Day Napa & Sonoma Easygoing E-Bike Tour</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={CrystalSymphonyPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Crystal Symphony in Sydney, Australia</div>
                        </div>
                        <h3>Crystal</h3>
                        <p>Pre-Paid Gratuities, Complimentary Wines & Spirits, Unlimited Wi-Fi, 24-hour In-Room Dining, Butler Service in Every Suite and Much More</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={QueenMary2PH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Queen Mary 2®</div>
                        </div>
                        <h3>Cunard®</h3>
                        <p>Enjoy the Services of a Distinctive Voyages Host, a Private Welcome Reception and an Exclusive Shore Event</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={Explora1PH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>EXPLORA I</div>
                        </div>
                        <h3>Explora Journeys</h3>
                        <p>Save 5% with the Explora Early Booking Benefit. Additionally, Receive an Exclusive Amenity of up to €300 Journey Experience Credit per Suite</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={ImpressionIslaPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Impression Isla Mujeres by Secrets</div>
                        </div>
                        <h3>Inclusive Collection, part of World of Hyatt</h3>
                        <p>Now Open: Impression Isla Mujeres by Secrets</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SandalsEmeraldBayPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sandals Emerald Bay</div>
                        </div>
                        <h3>Journese</h3>
                        <p>Special Rates, Luxury Included® & Courtesy Transfers on 5-Night Stays</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SirenaPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sirena at Sea</div>
                        </div>
                        <h3>Oceania Cruises</h3>
                        <p>simply <strong>MORE™</strong>: 2-for-1 Cruise Fares, Free Roundtrip Airfare, Free Airport Transfers, Free Shore Excursions, Free Drinks, Free Gourmet Specialty Dining & Free Unlimited Wi-Fi</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={PaulGauguinPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>MS Paul Gauguin in Moorea, Society Islands</div>
                        </div>
                        <h3>Paul Gauguin Cruises</h3>
                        <p>Receive a US$600 Welcome Gift per Stateroom</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={HubbardGlacierPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Hubbard Glacier</div>
                        </div>
                        <h3>Regent Seven Seas Cruises</h3>
                        <p>Experience True All Inclusive Luxury with Free Roundtrip First Class Airfare*, Free Unlimited Shore Excursions, Free Unlimited Beverages and More</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={KentuckyDerbyPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Kentucky Derby</div>
                        </div>
                        <h3>Roadtrips Sports Travel</h3>
                        <p>Custom VIP Packages to the World’s Top Sporting Events</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={MountRobsonPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Mount Robson, British Columbiar</div>
                        </div>
                        <h3>Rocky Mountaineer</h3>
                        <p>9-Day Journey Through the Clouds Discovery Lake Louise</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SandalsDunnRiverPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Sandals Dunn’s River</div>
                        </div>
                        <h3>Sandals Resorts</h3>
                        <p>Get up to US$605 Instant Credit and Save up to 55% at Sandals Dunn’s River in Jamaica</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={SeabournPursuitPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Seabourn Pursuit in The Kimberley, Australia</div>
                        </div>
                        <h3>Seabourn</h3>
                        <p>Enjoy the Services of a Distinctive Voyages Host, a Private Welcome Reception and an Exclusive Amenity</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={CadizSpainPH}
                                alt='placeholder image'
                                width='100%'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Cadiz, Spain</div>
                        </div>
                        <h3>Silversea</h3>
                        <p>Save with Two New All-Inclusive Fares to Europe</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={GarzaBlancaPH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Garza Blanca, Cancun</div>
                        </div>
                        <h3>WestJet Vacations</h3>
                        <p>Guaranteed Upgrades, Kids Free, Free Nights and More</p>
                    </Col>
                    <Col xs={12} md={4} className='mb-3'>
                        <div className='image-container'>
                            <Image
                                src={StarPridePH}
                                alt='placeholder image'
                                className='custom-fluid-image'
                            />
                            <div className='text-on-image'>Star Pride and Wind Star</div>
                        </div>
                        <h3>Windstar Cruises</h3>
                        <p>Winter 2025-2026 Early Booking Offer: Free Upgrade to All-Inclusive Fares + US$100 per guest Onboard Credit</p>
                    </Col>
                </Row>
            </Container>

            <TravelLeadersLogos />

            <Container className='my-5'>
                <strong>Terms and Conditions</strong>
                <p>
                    <strong>ALTOUR AIR:</strong> None
                </p>
                <p>
                    <strong>AmaWaterways:</strong> All rates are per person in CAD for cruise, port charges, taxes and fees only; rates are based on double occupancy in a category E stateroom for Europe, and a category C stateroom for Asia Cruises. Promotional rates are valid on select sailings for new bookings only. Up to $2,400 savings are per stateroom, based on double occupancy, and vary by itinerary and sailing date. Offer valid September 22nd – December 27th, 2023. 25% Single Supplement Savings applicable to select 2023 Europe and Asia sailings with a current retail offer and applies to balcony staterooms, excluding A+, AA+, and Suites. Onboard credits are in USD. Offers are combinable with a 10% Combination Cruise Savings offer. Offers are not combinable with any Solo Travelers booked with 25% Single Supplement, or any other promotions, limited to available capacity-controlled subject to change/termination without notice. Optional land programs, visas, airfares and gratuities are additional. Other restrictions apply. CST#2065452-20. Exclusive Amenities: US$300 onboard credit per stateroom (US$150 per person), based on double occupancy (solo travelers receive half). Sailing dates and exclusive amenities are current at the time of printing and are subject to change without notice. Amenities apply to 1st and 2nd passengers only. Offers are subject to availability at the time of booking and may be altered or withdrawn at any time without notice. Pricing and amenities will be confirmed at the time of booking. Cancellations, refunds, and penalties are imposed by the cruise line. Amenities are specific to this cruise line and must be booked by one of our travel advisors. If space has been recalled or canceled by the cruise line amenities cannot be applied. The offer is not combinable with any other promotions/discounts, limited to availability, capacity controlled, and subject to change or termination without notice. AmaWaterways reserves the right to correct any errors or omissions at any time.
                </p>
                <p>
                    <strong>Atlas Ocean Voyages:</strong> Soar. Explore. Save. promotion applies to new bookings made between 6/28/2023 and 12/31/2023 on all expeditions sailing 11/1/2023 – 12/31/2024. Fares quoted are in U.S. dollars per guest, cruise only and based on double occupancy in an Adventure Oceanview Stateroom, where Second Guest Sails FREE promotion has already been applied. Single guests receive a reduced single supplement. Fares for third guests are not discounted. Other staterooms may be available at discounted fares. Air, shore excursions, port charges and fees are additional. Air credit up to $5,000 is for suites, up to $4,000 for staterooms and based on double occupancy. Single guests in a Solo Oceanview Stateroom receive 50% of applicable air credit. Up to 25% savings varies per expedition. Promotion is combinable with Sail More Save More promotion, and Military Edge savings where eligible military veterans may receive up to an additional 20% savings on select voyages. Promotion may not be combinable with other special offers. Fares are subject to increase at any time without notice. Special offers and inclusions are capacity controlled and may be changed or withdrawn from any voyage at any time without notice. Additional restrictions may apply. ©2023 Atlas Ocean Voyages. Ships’ Registry: Portugal.
                </p>
                <p>
                    <strong>Avalon Waterways:</strong> Book a select 2023 or 2024 Avalon Waterways Active & Discovery river cruise (excluding Storyteller sailings) and get the standard prepaid cruise gratuities included for the full length of the cruise portion of the vacation. Booking must be made, under deposit and discount applied between now and December 31, 2023 for travel now through December 31, 2024. Combinable with Welcome Back credits and applicable consumer brand promotions only. Cannot be combined with multiple agency/account specific promotions. Applies to new 2023 and 2024 bookings only. Offer reliant on space availability. Not applicable to groups or custom tours. Full cancellation penalties will apply. Additional restrictions may apply; contact our agency for complete Terms & Conditions. May be withdrawn at any time.
                </p>
                <p>
                    <strong>Azamara:</strong> Price is per person, in CAD, includes cruise fare, taxes, fees and other port expenses applies to select sailings, veranda stateroom, based on double-occupancy, and reflects any promotional savings. Early Booking Bonus (Offer): For select sailings departing November 1, 2024 – November 10, 2025, Offer applies to new bookings created before November 30, 2023 (“Offer Period”). Offer provides 20% off cruise fares of all stateroom categories. Offer also provides a complimentary Experience More Essentials Package (inclusive of $300 USD Shore Excursion Onboard Credit [OBC], Unlimited WiFi for one device, and a Premium Beverage Package for Two) per stateroom, for guests booked in Veranda and Suite stateroom categories. The Shore Excursion OBC portion of the Experience More Essentials Package will be applied to the booking as an individual component, with the option to spend pre-cruise. The balance of any pre-cruise spend of Shore Excursion OBC, will be reconciled once onboard. Experience More Essentials Packages have no cash value, are not redeemable for cash, and are not transferable. Limit one Offer per stateroom. All other charges, including, but not limited to, cruise taxes, fees, and port expenses, are additional and apply to all guests. Offer is combinable with Back to Back Benefits, onboard booking savings and Azamara Circle Quarterly Savings, National Account Hosted and Amenity Programs, and one other OBC or value add. Unless stated otherwise, offer is not combinable with any other offer or promotion, including, but not limited to, Last Minute Voyages, Closed User Rates, Employee Rates, Interline Rates, Travel Agent Rates, and Net Rates. Offer is not applicable to 3rd and 4th guests in a stateroom. Offer is not applicable to incentive or contracted groups. After the Offer Period, the offer will be removed from the booking if the guest cancels and reinstates the booking, applies a fare change, or changes the ship or sail date of the booking, even if sailing date is within the sailing period highlighted above; certain other changes to the booking may also result in removal of the offer. Offer is subject to availability and change without notice and may be withdrawn at any time. Single occupancy guests paying 200% cruise fare are eligible for the full amount of the offer; single occupancy guests paying less than 200% cruise fare are eligible for a prorated amount of the offer. This offer is applicable to U.S., Canada, and select global markets only. Contact our travel agency for complete terms and conditions.
                </p>
                <p>
                    <strong>Backroads:</strong> Prices are valid at time of printing and may change. Prices are per person and based on double occupancy (two people per room), quoted in US dollars, and are set well in advance of the trip departure date. A US$600 deposit per person is required at the time of booking (US$1,000 per person on ships and special departures, and US$2,000 per person on private trips).
                </p>
                <p>
                    <strong>Crystal:</strong> Fares based on double occupancy (with exception of Solo Guest Room category) and vary by location on the ship. Solo Guest Rooms can only be booked on a single occupancy basis as fare shown. Fares include “destination fees” (i.e., fees, charges, tolls and taxes imposed on Crystal by governmental or quasi-governmental authorities as well as third party fees and charges arising from a ship’s presence in a harbor or port). The renderings, photographs, and specifications displayed are provided for convenience only. They should not be relied upon as representations, express or implied, of the final detail of the suites and guest rooms. Crystal expressly reserves the right to make modifications, revisions, and changes it deems desirable in its sole and absolute discretion.
                </p>
                <p>
                    <strong>Cunard®:</strong> Fares are per person, do not include air travel, are cruise only, based on double occupancy and apply to the first two guests in a stateroom. These fares do not apply to singles or third/fourth berth guests. Taxes, Fees and Port Expenses ranging from US$20 to US$1,330 are additional and subject to change. This offer is capacity controlled and subject to change. Offer is available to residents of the 50 United States, Canada, Bermuda, Puerto Rico, Mexico and the District of Columbia who are 21 years of age or older. Fares quoted in U.S. dollars. Certain restrictions apply, please refer to our agency for complete terms, conditions, and definitions that apply to all bookings. Advertisement was distributed by an independent travel agency, not by Cunard Line. © 2023 Carnival plc. Ships’ Registry: Bermuda. The Cunard logo and logotype, Queen Anne and Mareel are registered trademarks of Carnival plc, an English company trading as Cunard. All rights reserved in the United States and other countries.
                </p>
                <p>
                    <strong>Explora Journeys:</strong> Explora Early Booking Benefit: All journeys and all suite categories, including the Inaugural Journeys Collection, are eligible for this benefit. This benefit can be combined with: Flexible Journeys, Extended & Grand Journeys savings, Journeys for Solo Travelers, additional guests and younger traveler savings. Available on all journeys booked up to 105 days before departure in Ocean Terrace Suites and Ocean Penthouses, or up to 180 days in Ocean Residences. Expected full payment within 7 days. Our cancellation policy applies. Our Flexible Journeys policy applies. The benefit only applies to the journey fare and not on any additional components or add-ons of the journey experience. After the eligibility period, the benefit will be removed from the booking if the guest cancels or rebooks into a new booking on the same ship and sail date, applies a fare change, or changes the ship or sail date of the booking; certain other changes to the booking may also result in the removal of the offer. The benefit is subject to ship and sail date availability and may be withdrawn at any time. Journey Experience Credits are available on all journeys except on Distinctive Voyages sailings. Offer is EUR 300 per suite (EUR 150 per solo guests) for 1st & 2nd guest applicable to all suite categories on 7-night or longer Journeys. Extended Journeys would qualify for the same condition where each journey is 7-night or longer. Journey Experience Credits are not combinable with the Hosted Journeys nor Journey Together+ programs. Journey Experience Credits cannot be exchanged, redeemed, or deducted if used or partially used and are non-commissionable. Journey Experience Credits can only be used onboard (credited to guest onboard account) on shipboard expenses and Destination Experiences; and will be offered in Euro currency. Additional terms and conditions may apply. Please contact our agency for details.
                </p>
                <p>
                    <strong>Inclusive Collection:</strong> Product/offer may be available on select travel dates. Fees, taxes and other charges may apply. Additional terms and conditions may apply. Contact our agency for details.
                </p>
                <p>
                    <strong>Journese:</strong> Land prices are per person based on double occupancy for select travel through December 15, 2023. Prices are for check-in on October 15, 2023, prices for other dates may vary. Prices are current as of July 22, 2023; at the time you purchase your vacation, rates may be higher. Rates quoted include government-imposed fees and taxes. Airfare, taxes, surcharges, gratuities, transfers and excursions are additional. Advertised rates do not include any applicable daily resort or facility fees payable directly to the hotel at check-out; such fee amounts will be advised at the time of booking. Rates, terms, conditions, availability, itinerary, government taxes, surcharges, deposit, payment, cancellation terms/conditions and policies subject to change without notice at any time. Subject to availability; certain restrictions and black out dates may apply. Not responsible for errors or omissions. Journese acts only as an agent for tour providers listed. CST 1007939-10. Florida ST# 37983. Copyright©2023 Hawaii World, LLC. (dba Journese®). All Rights Reserved.
                </p>
                <p>
                    <strong>Oceania Cruises:</strong> Offers and fares are subject to change on 9/30/2023. Contact our agency for current pricing. All fares are per person in U.S. dollars, valid for residents of United States and Canada, based on double occupancy (unless otherwise noted) – except fares for Solo category are for a single traveler and are based on single occupancy – for new bookings only and may be withdrawn at any time. Free Internet amenity does not include streaming and includes a login for the first two devices per stateroom. Contact our agency for more details. simply MORE amenities are per stateroom, based on double occupancy and subject to change; except simply MORE amenities for single travelers who are booked in a Solo category, and are at the per guest rate. simply MORE free shore excursion credit varies by voyage and is up to US$1,600 per stateroom, except for Grand Voyages as amenity value varies according to voyage length and for single travelers booked in a Solo category as amenity is at the per-guest rate. simply MORE Champagne, Wine, and More amenity is the House Select beverage package and is valued up to US$2,800 per stateroom, except for Grand Voyages as amenity value varies according to voyage length and for single travelers booked in a Solo category as amenity is at the per-guest rate. simply MORE shore excursion credit has no cash value. Not all promotions are combinable. 2 for 1, simply MORE fares are based on published Full Brochure Fares; such fares may not have resulted in actual sales in all suite and stateroom categories and do not include optional charges as detailed in the Guest Ticket Contract. simply MORE without airfare does not include airfare or transfers. All fares include government fees & taxes. “Airfare” includes ground transfers, and offer applies to coach, roundtrip flights only from the following airports: ATL, BOS, CLT, DCA, DEN, DFW, DTW, EWR, IAD, IAH, JFK, LAX, LGA, MCO, MDW, MIA, ORD, PHL, PHX, SAN, SAV, SEA, SFO, TPA, YOW, YUL, YVR, YYZ. Oceania Cruises reserves the right to assign gateways based on availability for JFK, LGA and MIA. Gateways are subject to change at any time. Free Roundtrip Airport Transfer offer is only available when simply MORE Airfare is purchased through Oceania Cruises. Roundtrip Airport Transfer is included only from the above gateways. Airfare is available from all other U.S. and Canadian gateways for an additional charge. “Airfare” includes all airline fees, surcharges and government taxes. Airline-imposed personal charges such as baggage fees may apply. The privacy and protection of personal data is very important to us, and we collect, use, share and secure that data as described in our privacy policy, which is available through our agency. Oceania Cruises reserves the right to correct errors or omissions and to change any and all fares, fees, promotions and surcharges at any time. Ships’ Registry: Marshall Islands.
                </p>
                <p>
                    <strong>Paul Gauguin Cruises:</strong> New bookings only. Promotion is combinable with PG Bonus, National Account offers, Canadian residents discount, and two (2) SBC offers. Promotion is not combinable with PG Society Savings, groups, Interline, reduced rate or free of charge bookings. US$600 discount applies to double occupancy bookings. Single occupancy bookings receive a US$300 discount. Guests must be new to Paul Gauguin Cruises and Ponant. If they have previously sailed with either company, they will instead receive the PGC Society benefits. This offer is valid on all sailings and applies to first and second guest in stateroom only. Additional terms may apply. Call our agency for details. Ship’s registry: Wallis & Futuna.
                </p>
                <p>
                    <strong>Roadtrips Sports Travel:</strong> Upon payment of the deposit, the buyers and travelers agree to be bound by the following terms and conditions. Roadtrips and sponsoring representative(s) (collectively “Roadtrips”) are acting solely as agents. Roadtrips is responsible for making the arrangements for the accommodations, services and event tickets that constitute the travel package, except to the extent that those accommodations, services or event tickets cannot be supplied or become no longer available for reasons beyond Roadtrips’ control, including without limitation a Force Majeure event. Roadtrips shall not be liable to the traveler for loss or damage arising from prevention or delay in performance of its obligations where same is a result of a Force Majeure. For the avoidance of doubt, nothing shall excuse the traveler from any payment obligations under the agreement between Roadtrips and the traveler. Contact our agency for complete terms and conditions.
                </p>
                <p>
                    <strong>Rocky Mountaineer:</strong> Price for 2024 Journey through the Clouds Discovery Lake Louise package per person in CAD, for departure from Vancouver on September 29, 2024, in GoldLeaf Service with Superior accommodation, subject to availability. Accommodation is based on double occupancy. Hotel level applies to hotels in destinations only, not to midpoint hotels. Pricing includes applicable taxes. Flights are not included. Rates are subject to change without notice. Additional conditions apply.
                </p>
                <p>
                    <strong>Regent Seven Seas Cruises:</strong> Fares are subject to increase. All fares are per person in U.S. dollars, valid for residents of U.S. and Canada, based on double occupancy for new bookings only. All fares, special offers and inclusions maybe be changed or withdrawn at any time without notice. Not all promotions are combinable. 2-for-1 Fares are based on published Full Brochure Fares; such fares may not have resulted in actual sales in all suite categories and do not include optional charges as detailed in the Guest Ticket Contract. *Fres Business Class Air applies to intercontinental flights only from the following airports: ATL, BOS, CLT, DEN, DFW, DTW, EWR, FLL, IAD, IAH, JFK, LAX, LGA, MCO, MDW, MIA, MSP, ORD, PBI, PHL, PHX, SAN, SAV, SEA, SFO, TPA, YUL, YVR, YYZ. Airfare is available from all other U.S. and Canadian gateways for an additional charge. On domestic flights, free Economy Class Air, will be offered from the airports listed above. Ground transfers between airport and ship are included. All airline fees, surcharges and government taxes are included, however airline-imposed personal charges such as baggage fees may apply. Custom Air arrangements may be made 210 days prior to sailing as long as cruise has a paid deposit, and guests have completed in full the “Guest Information Form” (GIF), including their name as per passport and date of birth (custom air fees apply). Guests who elect not to participate in Regent Seven Seas Cruises® free Air Program or do not purchase transfer arrangements from Regent Seven Seas Cruises® will be responsible for their own transfer arrangements to and from the ship. Free 1-Night Pre-Cruise Hotel Package applies to guests 1 and 2 in Concierge Suites and higher, includes transfers from hotel to pier only and is not available for new bookings made within 60 days of departure. Single supplement savings are based on double occupancy 2-for-1 fares and are capacity-controlled on selected featured voyages on select categories. Guest sailings at a reduced single supplement that elect not to participate in free Air Program will receive an air credit only for one guest. FREE Unlimited Wi-Fi includes one log-in, one device, per suite. Concierge Suites and higher receive up to four logins, four devices, per suite. Free Valet Laundry Service includes wash, press and fold services for guests sailing in Deluxe Window/Veranda Suites through Master Suites; additionally, Regent Suite guests receive free unlimited dry cleaning service. Free Valet Laundry Service is not available on the final day of cruise prior to disembarkation.
                </p>
                <p>
                    <strong>Sandals Resorts:</strong> Get up to US$605 Instant Credit when you Book any qualifying Sandals Dunn’s River Resort vacation of 4 nights or longer. Booking window: through December 31, 2023. For travel May 24, 2023 – December 31, 2025. Offer: US$605 Instant Credit on 7-paid nights or longer; US$505 Instant Credit on 6-paid nights; US$405 Instant Credit 5-paid nights; US$305 Instant Credit on 4-paid nights. Offer is valid for new bookings only. Instant Credits are applied to the base fare and excludes government taxes and fees, which must be paid at time of booking and is fully non-refundable. Offer is combinable with other Sandals consumer saving promotions. Credit vouchers are subject to Terms & Conditions of any promotion and may or may not be combinable. Offers are combinable with Sandals Select Rewards Point promotions. Sandals Select Program Members are able to redeem up to 50% of their total booking price minus all the discounts. Offers are subject to availability throughout promotional period. Other restrictions and limitations may apply. The offer has no cash value and cannot be sold, exchanged, or transferred to another booking. This offer is not applicable to bookings with industry rates. Promotion exceptions will only be made on a case-by-case basis. Offer is subject to change or withdrawn at any time. Unique Vacations and Sandals Resorts are not responsible for errors and omissions. Get up to 55% off rack rates when you book a minimum of 3+ nights at this resort. For travel through December 31, 2025. Contact our agency for applicable room categories. Maximum 2 person limit for offer. Offer is based on double occupancy, minimum three paid nights stay. Promotion is combinable with certain Sandals savings promotions. Other percent-off savings depend on room category and time of travel. Blackout dates may apply. Group bookings may be subject to space availability and blackout dates. 
                </p>
                <p>
                    <strong>Seabourn:</strong> Featured prices are per guest based on double occupancy and are inclusive of Cruise Fare, Taxes, Fees & Port Expenses. Fares are in CAD. All savings amounts are included in the fares shown. All offers are capacity controlled and may be modified or withdrawn at any time without prior notice. Other restrictions may apply. Seabourn reserves the right to correct errors. Ships’ registry: Bahamas. ©2023 Seabourn.
                </p>
                <p>
                    <strong>Silversea Cruises:</strong> Terms and Conditions Apply: Air is not available in all countries and to all destinations. Not available in Asia, New Zealand, LATAM, and some countries in Europe. Should you book your air independently or should the desired air not be available, a non-use credit will be offered, that you can apply as extra savings to your cruise fare. Reduced Rates Special Business Class upgrades are available only in selected destinations, depending on Silversea’s air programme flight schedule. Included pre and post- cruise hotel nights are included depending on Silversea’s air programme flight schedule. Shore Excursions are included in all expedition and classic voyages. Classic voyages include one excursion per port, per day. Private Executive Transfers between home/airport(or port)/home are included for distance of up to 50 miles, and where provided by the operator. Service is not offered in all cities. While Silversea strives to serve guests all listed items, some items may be excluded in certain destinations, such as the Galapagos. General Exclusions: All fares, savings, offers, programmes, and itineraries are subject to change without notice. Any fares shown are per guest, based on double-occupancy. Additional restrictions may apply. This document may contain inadvertent technical or factual inaccuracies and typographical errors. Silversea reserves the right to correct errors and omissions at any time without prior notice, and to cancel any offered product, service, programme, reward, savings, credit, amenity, etc. in the event of any error or omission in the description, including pricing and availability. Contact our agency for full offer details and complete Terms and Conditions.
                </p>
                <p>
                    <strong>WestJet Vacations:</strong> Advance booking required. Non-refundable and non-transferable. Offer limited and subject to availability. Offer subject to change and expire without notice. New bookings only. Not valid on group bookings. Other restrictions may apply. Black-out dates apply, minimum length of stays apply to guaranteed upgrades during peak dates. Minimum 7-night stay for seventh night free at Garza Blanca Reserve Puerto Vallarta and Hotel Mousai Puerto Vallarta.
                </p>
                <p>
                    <strong>Windstar Cruises:</strong> For Windstar’s new 2025 & 2026 opening deployments, Windstar is offering a US$200 shipboard credit per stateroom and a free upgrade to our All-Inclusive package (valued at US$89 per guest per day). All fares mentioned are per person, in US dollars, cruise only, based on double occupancy in lowest category, and include non-discountable amounts. Single and Triple guests in a stateroom or suite are also eligible for this promotion, the shipboard credit will be awarded at US$100 per guest. All-inclusive fares include Wi-Fi, and all beer, wine, cocktails and gratuities. Taxes, Fees and Port Expenses are additional in the U.S., included in Canada. Offer is valid on new bookings only and subject to availability. Consult your Windstar representative for promotional offer or discount combinability. Bookings are non-transferable; no name changes can be made, nor can this offer be applied retroactively. Cancellation fees may apply. Fuel surcharges may be imposed or increased over time. Offer is capacity controlled and may be withdrawn or modified at Windstar’s discretion at any time. Information contained herein is accurate at time of publication and subject to change without notice. Contact our agency for complete terms & conditions. Cruises are provided subject to the terms and conditions of the Passage Contract. Offer is valid from September 12 to November 6, 2023. Ships’ registry: Bahamas.
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
