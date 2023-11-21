import React, { useState, useEffect } from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';

export default function TravelLeadersCarousel() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = await Promise.all(
        Array.from({ length: 9 }, (_, index) => import(`../../../assets/carousel/luxury-magazine/LuxuryMagazine_Page_0${index + 1}.jpg`))
      );
      setImagePaths(images);
    };

    importImages();
  }, []);

  return (
    <Container id='top' className='text-center my-3' fluid>
      <Carousel className='mb-3'>
        {imagePaths.map((imagePath, index) => (
          <Carousel.Item key={index}>
            <Image
              src={imagePath.default}
              width='40%'
              alt={`Slide ${index + 1}`}
              className='carousel-fluid-image'
              style={{ maxHeight: '100vh' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}