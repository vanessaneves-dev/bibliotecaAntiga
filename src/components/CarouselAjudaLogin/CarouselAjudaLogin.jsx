import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import printLogin from "../../assets/images/loginp.png"
import printLogin2 from "../../assets/images/entrar1.png"
import printLogin3 from "../../assets/images/entrar2.png"
import printLogin4 from "../../assets/images/cadastroLogin.png"
import "./CarouselAjudaLogin.css"

export function CarouselAjudaLogin() {
  return (
   <Carousel variant="dark">
      <Carousel.Item className='p-1' >
         <Row>
              <img src={printLogin} className="d-block w-100" alt="First slide" />
           
          </Row>        
      </Carousel.Item>
      <Carousel.Item className='p-4' >
      <Row >   
              <img  src={printLogin2} className=" w-100" alt="First slide" />
          
      </Row>   
      </Carousel.Item>

      <Carousel.Item  >
      <Row >  
              <img  src={printLogin3} className=" w-100" alt="First slide" />
      </Row>   
      </Carousel.Item>
      <Carousel.Item  >
      <Row >
              <img  src={printLogin4} className=" w-100" alt="First slide" />
      </Row>   
      </Carousel.Item>
    </Carousel>
  );
}