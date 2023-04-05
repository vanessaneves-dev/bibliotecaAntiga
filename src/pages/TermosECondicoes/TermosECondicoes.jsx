import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

 export function TermosECondicoes() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  return (
    <div className={`shadow p-5 mb-5 bg-body-tertiary rounded ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`}>
    <Container className="shadow p-5 mb-5 bg-body-tertiary rounded">
    <Row>
      <Col>
    
      <h1>Termos e Condições de Uso da Bibliotech</h1>
      <p>A Bibliotech é um serviço online que fornece acesso a livros e recursos educacionais gratuitos para usuários em todo o mundo. Ao usar nossos serviços, você concorda com os termos e condições descritos abaixo.</p>
      <h2>Conteúdo</h2>
      <p>Todos os livros e recursos disponíveis na Bibliotech são de propriedade de seus respectivos autores e editores. A Bibliotech não reivindica nenhum direito de propriedade sobre o conteúdo que disponibiliza.</p>
      <p>A Bibliotech se esforça para fornecer conteúdo de alta qualidade e preciso, mas não pode garantir que todo o conteúdo esteja correto ou atualizado. Os usuários devem verificar a precisão das informações antes de usá-las.</p>
      <h2>Uso dos serviços</h2>
      <p>Os usuários da Bibliotech concordam em usar nossos serviços apenas para fins legais e não infringir os direitos autorais ou outros direitos de propriedade intelectual. Os usuários também concordam em não usar nossos serviços para fins ilegais ou imorais.</p>
      <p>A Bibliotech reserva-se o direito de cancelar a conta de qualquer usuário que viole esses termos e condições ou qualquer lei aplicável.</p>
      <h2>Privacidade</h2>
      <p>A Bibliotech leva a privacidade de seus usuários a sério. Todas as informações coletadas dos usuários são usadas apenas para fornecer nossos serviços e não são compartilhadas com terceiros, exceto quando exigido por lei.</p>
      <h2>Alterações nestes termos e condições</h2>
      <p>A Bibliotech reserva-se o direito de alterar estes termos e condições a qualquer momento, sem aviso prévio. O uso continuado dos nossos serviços após a publicação das alterações constitui sua aceitação dos novos termos e condições.</p>
      <p>Se você tiver alguma dúvida sobre estes termos e condições, entre em contato conosco por meio do formulário de contato em nosso site.</p>
      </Col>
      </Row>
    </Container>
    </div>
  );
}


