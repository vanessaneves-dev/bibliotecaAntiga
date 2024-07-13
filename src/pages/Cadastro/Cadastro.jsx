import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import logoIcon from "../../assets/images/Logo3.svg";
import { useForm } from "react-hook-form";
import { cadastrarEmailSenha, loginFacebook, loginGitHub, loginGoogle } from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Cadastro.css";


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
  const usuarioLogado = useContext(AuthContext);

  // Se tiver dados no objeto, está logado
  if (usuarioLogado !== null) {
    return <Navigate to="/" />;
  }

  return (
    <section>
    <Container fluid className="my-3">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
        <div id="container-login" className="card border-0 shadow rounded-3  my-3 px-5">
          <div className="card-body  p-sm-2"></div>
      <p className="text-center">
        <img src={logoIcon} width="70%" alt="Logo do app" />
      </p>
      <h5 class="card-title mb-1 fw-light fs-5 text-muted">Faça parte da nossa plataforma</h5>
      <p className="text-muted mt-2 ">
        Já tem conta? <Link to="/login">Entre</Link>
      </p>
      <hr className="mt-0" />
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 " controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email"
          className={errors.email ? "form-control is-invalid" : "form-control "}
          placeholder="Seu email"
          {...register("email", { required: "O email é obrigatório" })}
        />
        <Form.Text className="invalid-feedback">
          {errors.email?.message}
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <div className=" input-group mb-3" >
          <Form.Control 
            type={mostrar ? "text" : "password"} className={errors.senha && "is-invalid" }
            placeholder="Sua senha"
            {...register("senha", { required: "A senha é obrigatória" })}
          />

          <Button
            variant="secondary"
            className="p-2 btn "
            onClick={() => setMostrar(!mostrar)}>
            {mostrar ? <AiOutlineEye />
              : <AiOutlineEyeInvisible />}
          </Button>
          </div>

          <div className="d-grid">
            <Button type="submit" className="btn btn-m btn-outline-secondary text-white text-uppercase fw-bold  " variant="primary">
            Cadastrar
            </Button>
          </div>
          <hr className="my-3" />

          <div className="d-grid mb-2">
            <Button
             className="btn-login text-uppercase fw-bold border-0 btn-m btn-outline-secondary" 
             variant="danger"
              onClick={onLoginGoogle}>
            <i className="bi bi-google" width="32"></i> Cadastrar com o Google
            </Button>
            </div>   
            <div className="d-grid mb-2">
            <Button 
              variant="secondary" 
              className="btn-login text-uppercase fw-bold border-1 btn-m btn-outline-secondary" 
              type="button" onClick={onLoginGitHub}> <i className="bi bi-github me-1" width="32" ></i>
                Cadastrar com o Github 
            </Button>
            </div>
            <div className="d-grid mb-4">
              <Button
               className="btn-login text-uppercase fw-bold border-0 btn-m btn-outline-secondary" 
               variant="primary"
                Cadastrar com o Facebook type="button" onClick={onLoginFacebook} >  <i className="bi bi-facebook" width="32" ></i> Cadastrar com o Facebook 
              </Button>
            </div>         
          <Form.Text className="invalid-feedback">
            {errors.senha?.message}
          </Form.Text>
        </Form.Group>
        
      </Form>
      </div>
      </div>
      </div>
    </Container>
    </section>
  );
}
