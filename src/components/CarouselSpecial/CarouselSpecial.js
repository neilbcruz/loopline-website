import { Carousel, Image } from 'react-bootstrap';
import Cover1 from '../../assets/images/cruise_images/cover_silversea.jpg';
import Cover2 from '../../assets/images/cruise_images/cover_holland.jpg';
import Cover3 from '../../assets/images/cruise_images/cover_norwegian.jpg';
import Cover4 from '../../assets/images/cruise_images/cover_celebrity.jpg';
import Cover5 from '../../assets/images/cruise_images/cover_crystal.jpg';
import Cover6 from '../../assets/images/cruise_images/cover_caribbean.jpg';
import Cover7 from '../../assets/images/cruise_images/cover_seabourn.jpg';
import Cover8 from '../../assets/images/cruise_images/cover_amawayerways.jpg';
import Cover9 from '../../assets/images/cruise_images/cover_travelleaders.jpg';
import Cover10 from '../../assets/images/cruise_images/cover_vvoyages.jpg';
import Cover11 from '../../assets/images/hotel_images/cover_sandals-curacao.jpg';
import Cover12 from '../../assets/images/hotel_images/cover_westjet-vacation.jpg';
import Cover13 from '../../assets/images/hotel_images/cover_sandals-dunnriver.jpg';
import Cover14 from '../../assets/images/hotel_images/cover_palace-vacation.jpg';
import Cover15 from '../../assets/images/hotel_images/cover_sandals-dunnriver.jpg';
import Cover16 from '../../assets/images/vacation_images/cover_westjet-secretresorts.jpg';
import Cover17 from '../../assets/images/vacation_images/cover_westjet-upgrade.jpg';
import Cover18 from '../../assets/images/vacation_images/cover_roadtrips-ultimate.jpg';
import Cover19 from '../../assets/images/vacation_images/cover_travelleaders-singapore.jpg';
import Cover20 from '../../assets/images/vacation_images/cover_funjet-honeymoons.jpg';
import Cover21 from '../../assets/images/vacation_images/cover_cosmos-tours.jpg';

const images = [Cover1, Cover2, Cover3, Cover4, Cover5, Cover6, Cover7, Cover8, Cover9, Cover10, Cover11, Cover12, Cover13, Cover14, Cover15, Cover16, Cover17, Cover18, Cover19, Cover20, Cover21];

export default function CarouselSpecial() {
    return (
        <Carousel className='mb-3'>
            {images.map((image, index) => (
                <Carousel.Item key={index} itemId={index}>
                    <Image
                        src={image}
                        className='carousel-fluid-image'
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}