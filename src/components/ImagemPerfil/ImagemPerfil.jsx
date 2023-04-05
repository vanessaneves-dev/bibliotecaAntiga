import semFotoPerfil from "../../assets/images/perfilSemFoto.png"

export function ImagemPerfil({ imagem }) {
  
  return (
    <div className="aside">
      <img className="rounded-circle shadow w-100 p-1"
        src={imagem ? imagem : semFotoPerfil}
        alt="Foto de perfil do usuário"
        className="rounded-circle img-thumbnail img-fluid"
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      />                  
    </div>
  );
}