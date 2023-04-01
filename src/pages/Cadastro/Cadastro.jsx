import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import { useForm } from "react-hook-form";
import { cadastrarEmailSenha, loginFacebook, loginGitHub, loginGoogle } from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export function Cadastro() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);


  function onSubmit(data) {
    const { email, senha } = data;
    cadastrarEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGoogle() {
    // then = quando der certo o processo
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGitHub() {
    // then = quando der certo o processo
    loginGitHub()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginFacebook() {
    // then = quando der certo o processo
    loginFacebook()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  return (
    <Container fluid className="my-5">
      <p className="text-center">
        <img src={logoIcon} width="256" alt="Logo do app" />
      </p>
      <h4>Faça parte da nossa plataforma</h4>
      <p className="text-muted">
        Já tem conta? <Link to="/login">Entre</Link>
      </p>
      <hr />
      <Button className="mb-3" variant="danger" onClick={onLoginGoogle} size="md">
      <i className="bi bi-google" width="32"></i> Entrar com o Google</Button>
      <br />
      <Button className="mb-3" onClick={onLoginGitHub} size="md" style={{gap: "30px", backgroundColor: "#24292F"}}>
        <i className="bi bi-github" width="32" ></i> Entrar com o GitHub</Button>
      <br />
      <Button className="mb-3" onClick={onLoginFacebook} size="md" style={{gap: "30px", backgroundColor: "#3578E5"}}>
        <i className="bi bi-facebook" width="32" ></i> Entrar com o Facebook</Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            className={errors.email && "is-invalid"}
            placeholder="Seu email"
            {...register("email", { required: "O email é obrigatório" })}
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>

          <div className="d-flex" style={{gap: "15px"}}>
          <Form.Control
            type={mostrar ? "text" : "password"} className={errors.senha && "is-invalid"}
            placeholder="Sua senha"
            {...register("senha", { required: "A senha é obrigatória" })}
          />

          <Button
            variant="secodary"
            className="p-2"
            onClick={() => setMostrar(!mostrar)}>
            {mostrar ? <AiOutlineEye />
              : <AiOutlineEyeInvisible />}
          </Button>
          </div>

          <Form.Text className="invalid-feedback">
            {errors.senha?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
