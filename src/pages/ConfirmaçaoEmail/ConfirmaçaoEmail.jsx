import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export function ConfirmaçaoEmail() {
  useEffect(() => {
    sendEmailVerification(auth.currentUser).then(() => {
      toast.success(`Confirme o e-mail para finalizar o cadastro`, {
        position: "bottom-right",
        duration: 2500,
      });
      logout();
    });
  }, []);

  const resendEmail = () => {
    if (auth.currentUser) {
      auth.currentUser
        .sendEmailVerification()
        .then(() => {
          console.log("Email de confirmação reenviado com sucesso.");
          // Exibir uma mensagem para informar ao usuário que o email foi reenviado com sucesso
        })
        .catch((error) => {
          console.error("Erro ao reenviar email de confirmação: ", error);
          // Trate os erros aqui, como exibir uma mensagem de erro para o usuário
        });
    } else {
      console.error("Nenhum usuário autenticado para reenviar o email de confirmação.");
      // Trate essa situação conforme necessário, por exemplo, redirecionar o usuário para a página de login
    }
  };

  return (
    <Container className="mt-5">
{" "}

<Row>
  <Col md={{ span: 6, offset: 3 }}>
    <Card>
      <Card.Body>
        <Card.Title className="text-center mb-4 ">        
         <h2 style={{color:"#26333d"}} > Confirmação de Email </h2>
        </Card.Title>
        <Card.Text>
          Obrigado por se cadastrar! Enviamos um email de confirmação
          para o seu endereço de email. Por favor, verifique sua caixa de
          entrada e siga as instruções para concluir o processo de
          cadastro.
        </Card.Text>
        <div className="text-center mt-4">
          <Button style={{backgroundColor:"rgb(36, 141, 173)", marginRight:"20px"}} onClick={() => resendEmail()}>
            Reenviar Email
          </Button>
          <Button as={Link} to="/login" style={{backgroundColor:"rgb(36, 141, 173)", color:"#ffffff"}}>
          <Link style={{color:"#ffffff", textDecoration:"none"}} to="/login">Já verificou seu email</Link> </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
  );
}

