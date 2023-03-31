import React from 'react';
import { Dropdown } from 'react-bootstrap';

  const HelpDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-help">
        Precisa de ajuda?
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#login">Como fazer login</Dropdown.Item>
        <Dropdown.Item href="#cadastro">Como se cadastrar</Dropdown.Item>
        <Dropdown.Item href="#contato">Entre em contato</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HelpDropdown;