import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { updateUsuario, uploadFotoPefil } from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import semFotoPerfil from "../../assets/images/perfilSemFoto.png"
import { deleteUser } from "@firebase/auth";
import {ImagemPerfil} from "../../components/ImagemPerfil/ImagemPerfil";


export function PerfilUsuario() {

  
  const usuarioLogado = useContext(AuthContext);   
  const defaultValues = {
    displayName: usuarioLogado.displayName || "",
    email: usuarioLogado.email || "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const navigate = useNavigate();

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "90%",
  };
     
    const [imagem, setImagem] = useState(null);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Verificando se imagem está null, se sim, atribua a imagem de perfil padrão ou a imagem do usuário
    if (usuarioLogado.photoURL !== null) {
        setImagem(usuarioLogado.photoURL);
      } else {
        setImagem(semFotoPerfil);
      }
    }, [usuarioLogado]);
    
  function onSubmit(data) {
    // Atualizando usuário
    const onSuccess = () => {
      setShowModal(true);
      window.location.reload();
    };
    const onError = (e) => {
      toast.error(`Um erro aconteceu. Código: ${e.code}`);
    };
    updateUsuario(usuarioLogado, data).then(onSuccess).catch(onError);
    
    // Verificando se uma imagem foi enviada
    const img = data.imagem[0];
    if (img) {
      const toastId = toast.loading("Upload da imagem...", { position: "top-right" });

       // Carregando o toast de upload de imagem
      uploadFotoPefil(img).then((url) => {
        toast.dismiss(toastId);
        data.photoURL = url;
        delete data.imagem;

        // Atualizando usuário com a nova imagem de perfil
        updateUsuario(usuarioLogado, data).then(onSuccess).catch(onError);
      })
    }
    else {
  
      // Se não houver imagem, apenas atualize o usuário
      delete data.imagem;
      updateUsuario(usuarioLogado, data).then(onSuccess).catch(onError);
    }
  }

    // Função para deletar o usuário
  function onDelete() {
    deleteUser(usuarioLogado).then(() => {
      toast.success("Usuário deletado com sucesso");
    }).catch((e) => {
      toast.error(`Um erro aconteceu. Código: ${e.code}`);
    });
  }
  // Função para fechar o modal
  function handleCloseModal() {
    setShowModal(false);
  }
    

   
  return (         
    <Container className="shadow p-5 mb-5 bg-body-tertiary rounded">
      <div className="d-flex flex-wrap justify-content-center gap-5"> 
        <div style={{width:"200px"}} >         
         <ImagemPerfil  imagem={imagem} / >  
         </div> 

        <Form onSubmit={handleSubmit(onSubmit)} className="form">
       
          <Form.Group className="mb-3">
            <Form.Label>Imagem de Perfil</Form.Label>
            <Form.Control type="file" {...register("imagem")} />
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" size="lg" className={errors.displayName && "is-invalid"} {...register("displayName", { required: "Nome é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
            <Form.Text className="text-danger">
              {errors.displayName?.message}
            </Form.Text>
          </Form.Group>
         
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" size="lg" className={errors.email && "is-invalid"} {...register("email", { required: "Email é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="text" size="lg" placeholder="********" className={errors.senha && "is-invalid"} {...register("senha", { minLength: { value: 8, message: "Mínimo de 8 caracteres!" } })} />
            <Form.Text className="text-danger">
              {errors.senha?.message}
            </Form.Text>
          </Form.Group>
          
          <div className="mt-4">
            <Button type="submit" style={{backgroundColor:"rgb(36, 141, 173)"}}  className="me-2">Alterar</Button>
            <Button as={Link} to="/" style={{backgroundColor:"rgb(36, 141, 173)"}}>Cancelar</Button>
          </div>
          
          <div className="mt-5 d-flex justify-content-end">
            <Button variant="danger" onClick={onDelete}>Deletar perfil</Button>
          </div>
        </Form>
      </div>
      {showModal && (        
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h3>Usuário atualizado com sucesso</h3>
            
          </div>
        </div>
      )}

    </Container>
  )
}