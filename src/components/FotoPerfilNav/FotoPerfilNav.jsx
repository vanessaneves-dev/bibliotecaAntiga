import { useContext } from "react";
import { Image } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import semFotoPerfil from "../../assets/images/perfilSemFoto.png";


export function FotoPerfilNav() {
  const usuarioLogado = useContext(AuthContext);
  
  
  if (usuarioLogado) {
    const fotoPerfil = usuarioLogado.photoURL ? usuarioLogado.photoURL : semFotoPerfil;
    return (
      <Image
        src={usuarioLogado.photoURL || semFotoPerfil}
        roundedCircle
        width={32}
        height={32}
        alt="Foto de perfil do usuário"
        className="me-2"
      />
    );
  }

  return null;
}
