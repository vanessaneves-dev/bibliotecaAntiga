import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import printCadastro from "../../assets/images/cadastro_1.png"
import printCadastro2 from "../../assets/images/cadastrar1.png"
import printCadastro3 from "../../assets/images/cadastrar2.png"
import "./CarouselAjudaCadastro.css"

export function CarouselAjudaCadastro() {
  return (
   <Carousel variant="dark">
      <Carousel.Item className='p-1' >
         <Row>
            <Col xs={12} md={6}  style={{ display: 'flex', alignItems: 'center', alignContent:'center', marginBottom:'80px' }}>
              
          <h5 className='text-center' >Acesse nossa página de <b>CADASTRO</b> .</h5>                 
        
         </Col>
            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={printCadastro} className="d-block w-100" alt="First slide" />
            </Col>
          </Row>        
      </Carousel.Item>
      <Carousel.Item className='p-4' >
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        
            <Col xs={12} md={6} style={{ margin:'auto' }}  >
              <h5 className='text-center' >Preencha os campos de <b>EMAIL</b> e <b>SENHA</b> do nosso formulário.</h5>  
              <br />
              <p className='text-center'>Depois clique no botão <b>CADASTRAR</b>. </p>
              </Col>
              <div className="centralizar" >
            <Col xs={12} md={6} className='' >
              <img  src={printCadastro2} className=" w-100" alt="First slide" />
            </Col>
            </div>
      </Row>   
      </Carousel.Item>

      <Carousel.Item  >
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        
            <Col xs={12} md={6} style={{ margin:'auto' }}  >
              <h5 className='text-center' >Cadastre com sua <b>REDE SOCIAL</b> favorita.</h5>  
              <br />
              <p className='text-center'>Você pode usar suas redes socias para fazer seu cadastro, atráves do <b>FACEBOOK</b> <b>GITHUB</b> e também pela sua conta <b>GOOGLE</b>. </p>
              </Col>
              <div className="centralizar" >
            <Col xs={12} md={6} className='' >
              <img  src={printCadastro3} className=" w-100" alt="First slide" />
            </Col>
            </div>
      </Row>   
      </Carousel.Item>
    </Carousel>
  );
}