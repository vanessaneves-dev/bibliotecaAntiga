import {Col, Nav, Container, Button, Row, Tab } from 'react-bootstrap';
import AjudaDropdown from "../../components/AjudaDropdown/AjudaDropdown";
import { useRef, useState } from 'react';
import { CarouselAjuda } from '../../components/CarouselAjudaCadastro/CarouselAjudaCadastro';
import { CentralAjudaHome } from '../../components/CentalAjudaHome/CentralAjudaHome';
import './Ajuda.css'
import { AjudaAcessoGeral } from '../../components/AjudaAcessoGeral/AjudaAcessoGeral';



export function Ajuda() {
  const [activeKey, setActiveKey] = useState ('home');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const helpRef = useRef (null);

  

  return ( <Container className="shadow p-5 mb-5 bg-body-tertiary rounded">
  <section  id='container-ajuda' className='container-md' >
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4}>
          <Nav variant="pills"  className="flex-column" onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link ref={helpRef} eventKey="first" style={{ color: '#4A67DF',borderRadius: '12px', fontWeight: "bold", fontSize:"24px"}} className={`${activeKey === 'first' ? 'active-link' : ''} ${activeKey === 'first' ? 'active' : ''}`}>CENTRAL DE AJUDA</Nav.Link>
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
                <CentralAjudaHome/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <AjudaAcessoGeral/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <AjudaDropdown/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </section>
    </Container> );
}

