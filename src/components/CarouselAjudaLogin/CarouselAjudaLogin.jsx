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
            <Col xs={12} md={6}  style={{ display: 'flex', alignItems: 'center', alignContent:'center', marginBottom:'80px' }}>
              
          <h5 className='text-center' >Acesse nossa página de <b>LOGIN</b>. </h5>                 
        
         </Col>
            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={printLogin} className="d-block w-100" alt="First slide" />
            </Col>
          </Row>        
      </Carousel.Item>
      <Carousel.Item className='p-4' >
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        
            <Col xs={12} md={6} style={{ margin:'auto' }}  >
              <h5 className='text-center' >Preencha os campos de <b>E-MAIL</b> com seu e-mail cadastrado e o de  <b>SENHA</b> com sua senha do site.</h5>  
              <br />
              <p className='text-center' >Depois clique no botão <b>ENTRAR</b> e aproveite todos os nossos livros. </p>
              </Col>
              <div className="centralizar" >
            <Col xs={12} md={6} className='' >
              <img  src={printLogin2} className=" w-100" alt="First slide" />
            </Col>
            </div>
      </Row>   
      </Carousel.Item>

      <Carousel.Item  >
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        
            <Col xs={12} md={6} style={{ margin:'auto' }}  >
              <h5 className='text-center' >Cadastrou-se com sua <b>REDE SOCIAL</b>?</h5>  
              <br />
              <p className='text-center' >Você pode retornar o acesso a nossa pagina pela sua <b>REDE SOCIAL</b> cadastrada conosco, seja o <b>FACEBOOK</b> <b>GITHUB</b> ou sua conta <b>GOOGLE</b>. </p>
              </Col>
              <div className="centralizar" >
            <Col xs={12} md={6} className='' >
              <img  src={printLogin3} className=" w-100" alt="First slide" />
            </Col>
            </div>
      </Row>   
      </Carousel.Item>
      <Carousel.Item  >
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        
            <Col xs={12} md={6} style={{ margin:'auto' }}  >
              <h5 className='text-center' >Seu e-mail ainda não é cadastrado?</h5>  
              <br />
              <p className='text-center' >Clique no link de <br/> <b>CADASTRE-SE</b>  e faça seu cadastro na nossa <b>BIBLIOTECH</b>. </p>
              </Col>
              <div className="centralizar" >
            <Col xs={12} md={6} className='' >
              <img  src={printLogin4} className=" w-100" alt="First slide" />
            </Col>
            </div>
      </Row>   
      </Carousel.Item>
    </Carousel>
  );
}