'use client'

import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa"; 

const HomePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [mensagem, setMensagem] = useState("");
  const [files, setFiles] = useState([]);
  const alertMsg = useRef(null);

  const planChange = (e) => {
    setFiles([]);
    if (alertMsg.current) {
      alertMsg.current.innerHTML = '';
    }
  };

  const handleMensagemChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 200) {
      setMensagem(inputText);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length <= (selectedPlan === 1 ? 3 : 5)) {
      if (alertMsg.current) {
        alertMsg.current.innerHTML = '';
      }
      setFiles(Array.from(selectedFiles));
    } 
    else {
      setFiles([]);
      if (alertMsg.current) {
        alertMsg.current.innerHTML = `Você pode escolher até ${selectedPlan === 1 ? 3 : 5} fotos.`;
      }
    }
  };

  return (
    <section className="page-container">
      <figure className="img-logo">
        <img src="image/logo-homenagem-rosa-pascoa.png"></img>
      </figure>

      <main className="header-home-page">
        <section className="container-top-header">
          <h1 className="title-header">Transforme o amor da páscoa em uma homenagem inesquecível 🕊️</h1>
          <h2 className="subtitle-header">Uma lembrança digital que toca o coração!</h2>
        </section>

        <section className="container-main-header">
          <section className="form-container">
            <article className="box-plans">
              <p className={`plans-0 ${selectedPlan === 0 ? "plans-selected" : ""}`} onClick={() => { setSelectedPlan(0); planChange() }}>
                Gratuito
              </p>

              <p className={`plans-1 ${selectedPlan === 1 ? "plans-selected" : ""}`} onClick={() => { setSelectedPlan(1); planChange() }}>
                3 fotos - R$ 4,90
              </p>

              <p className={`plans-2 ${selectedPlan === 2 ? "plans-selected" : ""}`} onClick={() => {setSelectedPlan(2); planChange()}}>
                5 fotos, 1 mensagem e 1 música - R$ 9,90
              </p>
            </article>

            <form className="form">
              <section className="form-group">
                <label htmlFor="nome">Nome da pessoa homenageada:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite o nome da pessoa homenageada" required />
              </section>  

              {(selectedPlan === 1 || selectedPlan === 2) && (
                <section className="form-group">
                  <label htmlFor="foto">Selecione as fotos:</label>
                  <section className="custom-file-upload">
                    <input
                      type="file"
                      id="foto"
                      name="foto"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                    <span className="file-placeholder">
                      <FaCamera className="FaCamera" />
                      {`${selectedPlan === 1 ? "Clique aqui e escolha até 3 fotos" : "Clique aqui e escolha até 5 fotos"}`}
                    </span>
                  </section>

                  <aside className="alert-msg" ref={alertMsg}></aside>

                  <section className="selected-files">
                    {files.length > 0 && (
                      <section className="file-preview">
                        {files.map((file, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Foto ${index + 1}`}
                            className="file-icon"
                          />
                        ))}
                      </section>
                    )}
                  </section>
                </section>
              )}

              {selectedPlan === 2 && (
                <>
                  <section className="form-group">
                    <label htmlFor="mensagem">Mensagem Personalizada:</label>
                    <section className="textarea-container">
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="4"
                        placeholder="Digite sua mensagem"
                        required
                        value={mensagem}
                        onChange={handleMensagemChange}
                      />
                      <span className="char-count">{mensagem.length}/200</span>
                    </section>
                  </section>

                  <section className="form-group">
                    <label htmlFor="musica">Escolha uma Música (opcional):</label>
                    <input type="file" id="musica" name="musica" accept="audio/*" />
                  </section>
                </>
              )}

              <section className="form-group">
                <label htmlFor="email">Seu email:</label>
                <input type="email" id="email" name="email" placeholder="Seu email para receber o QRcode" required />
              </section> 

              {selectedPlan === 1 && (
                <aside className={`msg-plan-1`}>
                  <h3>*Personalize sua homenagem com uma mensagem carinhosa e uma música. Troque agora de plano e torne o momento ainda mais especial.</h3>
                </aside>
              )}

              {selectedPlan === 0 && (
                <aside className={`msg-plan-1`}>
                  <h3>*Personalize sua homenagem com fotos, uma mensagem carinhosa e uma música. Troque agora de plano e torne o momento ainda mais especial.</h3>
                </aside>
              )}
  
              <button className="btn"> CRIAR HOMENAGEM
              </button>
            </form>
          </section>

          <aside className="tutorial-group">
            <figure className="video-result">
              <p>Exemplo de como vai ficar 👇</p>
              <iframe></iframe>
            </figure>
          </aside>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Homenagem.com.br Todos os direitos reservados.</p>
      </footer>
    </section>
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