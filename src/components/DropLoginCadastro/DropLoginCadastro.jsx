import React, { useState } from 'react';
import { Dropdown, DropdownButton, Collapse, Carousel } from 'react-bootstrap';
import logoIcon from "../../assets/images/BIBLIOTECH Logo Footer.png";


export const DropLoginCadastro = () => {
  const [openCadastro, setOpenCadastro] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <DropdownButton title="Ajuda" id="dropdown-menu">
      <Dropdown.Item eventKey="1" onClick={() => setOpenCadastro(!openCadastro)}>Cadastro</Dropdown.Item>
      <Collapse in={openCadastro}>
        <div>
          <Carousel>
            <Carousel.Item>
            <img src={logoIcon} width="100" alt="Logo"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={logoIcon} width="100" alt="Logo"/>

            </Carousel.Item>
            <Carousel.Item>
            <img src={logoIcon} width="100" alt="Logo"/>

            </Carousel.Item>
          </Carousel>
        </div>
      </Collapse>

      <Dropdown.Item eventKey="2" onClick={() => setOpenLogin(!openLogin)}>Login</Dropdown.Item>
      <Collapse in={openLogin}>
        <div>
          <Carousel>
            <Carousel.Item>
              <p>Insira aqui o conteúdo referente ao primeiro slide do login.</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Insira aqui o conteúdo referente ao segundo slide do login.</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>Insira aqui o conteúdo referente ao terceiro slide do login.</p>
            </Carousel.Item>
          </Carousel>
        </div>
      </Collapse>

      <Dropdown.Divider />

      <Dropdown.Item eventKey="3">Problemas com o Acesso</Dropdown.Item>
    </DropdownButton>
  );
}