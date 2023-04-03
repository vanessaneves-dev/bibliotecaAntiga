import { useState } from 'react';
import {Col, Nav, Row, Tab } from 'react-bootstrap';
import { CarouselAjudaCadastro } from '../CarouselAjudaCadastro/CarouselAjudaCadastro';
import { CarouselAjudaLogin } from '../CarouselAjudaLogin/CarouselAjudaLogin';


export function AjudaAcessoGeral () {

  const [activeKey, setActiveKey] = useState ('home');

  const handleSelect = (key) => {
    setActiveKey(key);
  };


  return <>
  <section style={{ marginTop: '60px', marginLeft:'60px'}} className='container-md' >
    <Tab.Container id="left-tabs-example" defaultActiveKey="first2">
        <Row>
          <Col sm={4}>
            <Nav variant="pills"  className="flex-column" onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link eventKey="first2" style={{ color: 'black',borderRadius: '12px'}} className={activeKey === 'first2' ? 'active-link' : ''}>Cadastro</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second2" style={{ color: 'black', borderRadius: '12px' }} className={activeKey === 'second2' ? 'active-link' : ''}>Login</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first2">
              <CarouselAjudaCadastro/>
              </Tab.Pane>
              <Tab.Pane eventKey="second2">
              <CarouselAjudaLogin/>
              </Tab.Pane>              
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  </>
}

