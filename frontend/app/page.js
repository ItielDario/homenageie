'use client'

import { useState } from "react";

const HomePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <header className="header-home-page">
      <section className="container-top-header">
        <h1 className="title-header">Celebre uma mulher incrível! 👑</h1>

        <h2 className="subtitle-header">Crie uma homenagem emocionante e mostre o quanto ela é especial.</h2>
        <h2 className="subtitle-header">Preencha o formulário e receba o QR Code para compartilhar.</h2>
      </section>

      <section className="container-main-header">
        <article className="box-plans">
          <p className={`plans-1 ${selectedPlan === 1 ? "plans-selected" : ""}`} onClick={() => setSelectedPlan(1)}>
            3 fotos - R$ 4,90
          </p>

          <p className={`plans-2 ${selectedPlan === 2 ? "plans-selected" : ""}`} onClick={() => setSelectedPlan(2)}>
            5 fotos, 1 mensagem e 1 música - R$ 9,90
          </p>
        </article>
      </section>
    </header>
  );
};

export default HomePage;


      
      
      



      {/*FONTES PARA TESTE

      <div className="font-box">
        <h3>Lora</h3>
        <p style={{ fontFamily: 'Lora, serif' }}>Exemplo de texto com a fonte Lora.</p>
      </div>
      <div className="font-box">
        <h3>Raleway</h3>
        <p style={{ fontFamily: 'Raleway, sans-serif' }}>Exemplo de texto com a fonte Raleway.</p>
      </div>
      <div className="font-box">
        <h3>Merriweather</h3>
        <p style={{ fontFamily: 'Merriweather, serif' }}>Exemplo de texto com a fonte Merriweather.</p>
      </div>
      <div className="font-box">
        <h3>Poppins</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif' }}>Exemplo de texto com a fonte Poppins.</p>
      </div>
      <div className="font-box">
        <h3>Quicksand</h3>
        <p style={{ fontFamily: 'Quicksand, sans-serif' }}>Exemplo de texto com a fonte Quicksand.</p>
      </div>
      <div className="font-box">
        <h3>Playfair Display</h3>
        <p style={{ fontFamily: 'Playfair Display, serif' }}>Exemplo de texto com a fonte Playfair Display.</p>
      </div>
      <div className="font-box">
        <h3>Roboto</h3>
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>Exemplo de texto com a fonte Roboto.</p>
      </div>
      <div className="font-box">
        <h3>Montserrat</h3>
        <p style={{ fontFamily: 'Montserrat, sans-serif' }}>Exemplo de texto com a fonte Montserrat.</p>
      </div>
      <div className="font-box">
        <h3>Nunito</h3>
        <p style={{ fontFamily: 'Nunito, sans-serif' }}>Exemplo de texto com a fonte Nunito.</p>
      </div>
      <div className="font-box">
        <h3>Josefin Sans</h3>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Exemplo de texto com a fonte Josefin Sans.</p>
      </*/}