import "./Menu.css";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/images/Logo2.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ImagemPerfil } from "../ImagemPerfil/ImagemPerfil";
import { FotoPerfilNav } from "../FotoPerfilNav/FotoPerfilNav";

export function Menu() {
  const navigate = useNavigate();

  const { usuarioLogado } = useContext(AuthContext);

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <Navbar bg="light" variant="light" expand="lg">
       
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoIcon} width="100" alt="Logo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link as={Link} to="/perfilUsuario">
              Meu Perfil
            </Nav.Link>

            <NavItem>
            
            <FotoPerfilNav />             
            
            </NavItem>

            <Nav.Link onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
