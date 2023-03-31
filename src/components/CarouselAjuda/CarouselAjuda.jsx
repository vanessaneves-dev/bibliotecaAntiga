import React from 'react';
import { Carousel } from 'react-bootstrap';

export function CarouselAjuda() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Descrição do slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Descrição do slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Descrição do slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}