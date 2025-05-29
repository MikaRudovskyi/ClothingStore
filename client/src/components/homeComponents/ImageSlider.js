import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const SliderContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const ImageSlider = ({ images }) => {
  return (
    <SliderContainer>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </SliderContainer>
  );
};

export default ImageSlider;
