import {Col, Nav, Container, Button, Row, Tab } from 'react-bootstrap';
import AjudaDropdown from "../../components/AjudaDropdown/AjudaDropdown";
import './Ajuda.css'
import { Loader } from '../../components/Loader/Loader';
import { useRef, useState } from 'react';
import { CarouselAjuda } from '../../components/CarouselAjuda/CarouselAjuda';
import { CentralAjudaHome } from '../../components/CentalAjudaHome/CentralAjudaHome';



export function Ajuda() {
  const [activeKey, setActiveKey] = useState ('home');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const helpRef = useRef (null);

  return ( <>
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
            <section style={{ marginTop: '60px' }} className='container-md' >
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
              <AjudaDropdown/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </section>
    </> );
}

