import { Carousel, Image } from 'react-bootstrap';
import Cover1 from '../../assets/images/cover_australia.jpg';
import Cover2 from '../../assets/images/cover_italy.jpg';
import Cover3 from '../../assets/images/cover_hawaii.jpg';
import Cover4 from '../../assets/images/cover_nz.jpg';
import Cover5 from '../../assets/images/cover_whycruise.jpg';
import Cover6 from '../../assets/images/cover_family.jpg';
import Cover7 from '../../assets/images/cover_wedding.jpg';
import Cover8 from '../../assets/images/cover_adventure.jpg';
import Cover9 from '../../assets/images/cover_wildlife.jpg';
import Cover10 from '../../assets/images/cover_romantic.jpg';
import Cover11 from '../../assets/images/cover_golf.jpg';
import Cover12 from '../../assets/images/cover_beach.jpg';
import Cover13 from '../../assets/images/cover_rivercruise.jpg';
import Cover14 from '../../assets/images/cover_european.jpg';
import Cover15 from '../../assets/images/cover_allinclusive.jpg';

const images = [Cover1, Cover2, Cover3, Cover4, Cover5, Cover6, Cover7, Cover8, Cover9, Cover10, Cover11, Cover12, Cover13, Cover14, Cover15];

export default function CarouselInspiration() {
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