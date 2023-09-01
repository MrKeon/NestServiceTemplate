import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // You can create this file for styling
import Image1 from '../../media/logo-illustration-builder-sunrise-silhouette-house-deck (2).png';
import Image2 from '../../media/logo-illustration-builder-sunrise-silhouette-house-deck (3).png';
import Image3 from '../../media/logo-illustration-builder-sunrise-silhouette-house-deck (4).png';
import Image4 from '../../media/logo-illustration-builder-sunrise-silhouette-house-deck (1).png';
import Image5 from '../../media/logo-illustration-builder-sunrise-silhouette-house-deck.png';

const ImageCarousel = () => {
  return (
    <Carousel className={`Image-Carousel`} showThumbs={true} infiniteLoop={true} showArrows={true} interval={20}>
      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
      <div>
        <img src={Image3} alt="Image 3" />
      </div>
      <div>
        <img src={Image4} alt="Image 4" />
      </div>
      <div>
        <img src={Image5} alt="Image 5" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
