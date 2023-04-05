import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

 export function Cookies() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  return (
    <div className={`shadow p-5 mb-5 bg-body-tertiary rounded ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`}>
    <Container className="shadow p-5 mb-5 bg-body-tertiary rounded">
    <Row>
      <Col>
    
      <h1>Política de Cookies da Bibliotech</h1>
      <p>A Bibliotech usa cookies para melhorar a experiência do usuário e fornecer serviços personalizados. Ao usar nossos serviços, você concorda com o uso de cookies conforme descrito abaixo.</p>
      <h2>O que são cookies?</h2>
      <p>Os cookies são pequenos arquivos de texto que um site ou serviço envia para o seu navegador quando você o visita. Os cookies permitem que o site ou serviço lembre-se de suas preferências e interações anteriores e forneça uma experiência mais personalizada e eficiente.</p>
      <h2>Que tipos de cookies usamos?</h2>
      <p>A Bibliotech usa dois tipos de cookies: cookies de sessão e cookies persistentes.</p>
      <p>Os cookies de sessão são temporários e são excluídos automaticamente quando você fecha o navegador. Eles são usados para rastrear sua sessão de login e fornecer serviços personalizados.</p>
      <p>Os cookies persistentes permanecem no seu dispositivo por um período de tempo específico, mesmo depois que você fecha o navegador. Eles são usados para lembrar suas preferências e fornecer serviços personalizados em visitas futuras ao site.</p>
      <h2>Como gerenciar cookies?</h2>
      <p>Os usuários podem optar por não aceitar cookies ou limitar os tipos de cookies que são permitidos pelo navegador da web. Isso pode afetar a funcionalidade e a personalização dos serviços da Bibliotech.</p>
      <p>Os usuários também podem excluir os cookies armazenados em seus dispositivos a qualquer momento. As instruções para fazer isso variam de acordo com o navegador e o dispositivo que você está usando.</p>
      <h2>Alterações nesta política de cookies</h2>
      <p>A Bibliotech reserva-se o direito de alterar esta política de cookies a qualquer momento, sem aviso prévio. O uso continuado dos nossos serviços após a publicação das alterações constitui sua aceitação da nova política de cookies.</p>
      <p>Se você tiver alguma dúvida sobre esta política de cookies, entre em contato conosco por meio do formulário de contato em nosso site.</p>
      </Col>
      </Row>
    </Container>
    </div>
  );
}


