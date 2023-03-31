import {Col, Nav, Container, Button, Row, Tab } from 'react-bootstrap';
import HelpDropdown from "../../components/HelpDropdown/HelpDropdown";
import './Ajuda.css'
import { Loader } from '../../components/Loader/Loader';
import { useState } from 'react';
import { CarouselAjuda } from '../../components/CarouselAjuda/CarouselAjuda';
import { DropLoginCadastro } from '../../components/DropLoginCadastro/DropLoginCadastro';



export function Ajuda() {
  const [activeKey, setActiveKey] = useState ('home');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return ( <>
  <section style={{ marginTop: '40px' }} className='container-md' >
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4}>
          <Nav variant="pills"  className="flex-column" onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="first" style={{ color: 'black',borderRadius: '12px', fontWeight: "bold", fontSize:"24px"}} className={activeKey === 'first' ? 'active-link' : ''}>CENTRAL DE AJUDA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" style={{ color: 'black', borderRadius: '12px' }} className={activeKey === 'second' ? 'active-link' : ''}>Acesso Geral</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" style={{ color: 'black', borderRadius: '12px' }} className={activeKey === 'third' ? 'active-link' : ''}> Duvidas mais frequentes</Nav.Link > 
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                 {/* <Container>
                  <Row>
                    <Col>
                      <h1>Central de ajuda</h1>
                      <p>Bem-vindo à nossa central de ajuda. Aqui você encontrará informações e recursos para ajudá-lo a usar nosso serviço.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2>Perguntas frequentes</h2>
                      <p>Confira algumas das perguntas frequentes que recebemos:</p>
                      <ul>
                        <li>Como faço para criar uma conta?</li>
                        <li>Como posso recuperar minha senha?</li>
                        <li>Quais são os requisitos de sistema para usar o serviço?</li>
                      </ul>
                      <Button variant="primary">Ver todas as perguntas frequentes</Button>
                    </Col>
                    <Col>
                      <h2>Categorias</h2>
                      <p>Veja algumas das principais categorias de ajuda:</p>
                      <ul>
                        <li>Login e cadastro</li>
                        <li>Configurações da conta</li>
                        <li>Pagamentos e faturamento</li>
                      </ul>
                      <HelpDropdown/>
                    </Col>
                  </Row>
                </Container> */}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <section style={{ marginTop: '40px' }} className='container-md' >
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={4}>
                      <Nav variant="pills"  className="flex-column" onSelect={handleSelect}>
                        <Nav.Item>
                          <Nav.Link eventKey="first2" style={{ color: 'black',borderRadius: '12px'}} className={activeKey === 'first2' ? 'active-link' : ''}>Cadastro</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second2" style={{ color: 'black', borderRadius: '12px' }} className={activeKey === 'second2' ? 'active-link' : ''}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third2" style={{ color: 'black', borderRadius: '12px' }} className={activeKey === 'third2' ? 'active-link' : ''}> Problemas com a senha</Nav.Link > 
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first2">
                        <h1>teste</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second2">
                        <h1>teste</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third2">
                        <h1>teste</h1>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </section>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Loader/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </section>
    </> );
}

