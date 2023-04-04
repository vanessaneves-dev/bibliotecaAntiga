import semFotoPerfil from "../../assets/images/perfilSemFoto.png"

export function ImagemPerfil({ imagem }) {
  
  return (
    <div className="aside">
      <img
        src={imagem ? imagem : semFotoPerfil}
        alt="Foto de perfil do usuário"
      />                  
    </div>
  );
}