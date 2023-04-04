import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import printCadastro from "../../assets/images/cadastro_1.png"
import printCadastro2 from "../../assets/images/cadastrar1.png"
import printCadastro3 from "../../assets/images/cadastrar2.png"
import printCadastro4 from "../../assets/images/entreLogin.png"
import "./CarouselAjudaCadastro.css"

export function CarouselAjudaCadastro() {
  return (
   <Carousel variant="dark">
      <Carousel.Item className='p-1' >
         <Row>           
              <img src={printCadastro} className="d-block w-100" alt="First slide" />
          </Row>        
      </Carousel.Item>
      <Carousel.Item className='p-4' >
      <Row >
              <img  src={printCadastro2} className=" w-100" alt="First slide" />
      </Row>   
      </Carousel.Item>

      <Carousel.Item  >
      <Row >
              <img  src={printCadastro3} className=" w-100" alt="First slide" />
      </Row>   
      </Carousel.Item>
      <Carousel.Item  >
      <Row >
              <img  src={printCadastro4} className=" w-100" alt="First slide" />
      </Row>   
      </Carousel.Item>
    </Carousel>
  );
}