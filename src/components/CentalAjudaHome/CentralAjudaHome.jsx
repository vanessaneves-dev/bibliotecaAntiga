import React, { useState } from 'react';
import logoIcon from "../../assets/images/BIBLIOTECH Logo Footer.png";
import logoHome from "../../assets/images/logo-nome-removebg-preview.png";
import "./CentralAjudaHome.css";



export const CentralAjudaHome = () => {
  return (
  <>
  <section style={{ marginLeft:'120px' }}>
    <div className="logo"  >
    <h1>central de ajuda </h1>
    <img  src={logoHome} alt="Logo da Bibliotech"  />
    </div>
    <hr />
    <p>Bem-vindo à central de ajuda da Bibliotech! Estamos aqui para ajudá-lo a aproveitar ao máximo nossa biblioteca online, fornecendo respostas rápidas e precisas para suas perguntas e problemas. <br /><br />

    Nossa equipe de especialistas em biblioteca e tecnologia está pronta para ajudá-lo em qualquer questão, desde como encontrar o livro certo para suas necessidades até como usar nossos recursos de pesquisa avançada para encontrar informações específicas.<br /><br />

    Não importa se você é um usuário iniciante ou experiente, nossa central de ajuda está aqui para ajudá-lo a aproveitar ao máximo sua experiência de biblioteca online. Nós fornecemos uma ampla gama de recursos, incluindo tutoriais em slides,respostas a perguntas frequentes e suporte online.<br /><br />

    Não hesite em explorar nossos recursos de ajuda para descobrir tudo o que a Bibliotech tem a oferecer. Se você tiver alguma dúvida ou problema, não hesite em entrar em contato conosco. Estamos aqui para ajudá-lo!</p>

  </section>
  </>)
}