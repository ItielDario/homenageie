'use client'

import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa"; 

const HomePage = () => {

  // UseState
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [mensagem, setMensagem] = useState("");
  const [files, setFiles] = useState([]);
  const [musicaSelecionada, setMusicaSelecionada] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  // UseRef
  const alertMsg = useRef(null);
  const audioRef = useRef(null);
  
  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } 
    else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleMusicaChange = (e) => {
    const nomeMusica = e.target.value;

    if (nomeMusica === "Sem música") {
      setMusicaSelecionada(""); // para não tocar nada
      setIsPlaying(false);
    } 
    else {
      setMusicaSelecionada(nomeMusica);
      setIsPlaying(true);
    }
  };

  const planChange = (e) => {
    setFiles([]);
    setIsPlaying(false);
    setMusicaSelecionada("");
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
                      <label htmlFor="musicaSelecionada">Escolha uma música (opcional):</label>
                    <section className="form-group-music">
                      <select
                        id="musicaSelecionada"
                        name="musicaSelecionada"
                        className="select-musica"
                        onChange={handleMusicaChange}
                      >
                        <option value="Sem música">Sem música</option>
                        <option value="A_Verdadeira_Pascoa_CRISTO_JA_RESSUSCITOU_ALELUIA">A Verdadeira Páscoa</option>
                        <option value="Christ_the_Lord_Is_Risen_Today">Christ the Lord Is Risen Today</option>
                        <option value="Coelhinho_da_Pascoa">Coelhinho da Páscoa - Instrumental</option>
                        <option value="Cristo_Ressuscitou_Aleluia">Cristo Ressuscitou Aleluia</option>
                        <option value="Golpel_Instrumental_1">Gospel Instrumental - 1</option>
                        <option value="Instrumental_Alegre_1">Instrumental Alegre - 1</option>
                        <option value="Instrumental_Alegre_2">Instrumental Alegre - 2</option>
                        <option value="Instrumental_Alegre_3">Instrumental Alegre - 3</option>
                        <option value="Instrumental_Alegre_4">Instrumental Alegre - 4</option>
                        <option value="Instrumental_Alegre_5">Instrumental Alegre - 5</option>
                        <option value="JESUS_O_CORDEIRO">Jesus o Cordeiro</option>
                        <option value="Musical_Pascoal_1">Músical Pascoal - 1</option>
                        <option value="Musical_Pascoal_2">Músical Pascoal - 2</option>
                        <option value="Musical_Pascoal_3">Músical Pascoal - 3</option>
                        <option value="Pascoa_do_Senhor">Páscoa do Senhor</option>
                        <option value="PASCOA_E_ALEGRIA">Páscoa é Alegria</option>
                      </select>

                      {/* Reproduz a música selecionada automaticamente */}
                      {musicaSelecionada !== "" && musicaSelecionada !== "Sem música" && (
                        <section className="custom-audio-player">
                          <audio ref={audioRef} src={`/music/${musicaSelecionada}.mp3`} autoPlay/>
                          <img
                            onClick={handlePlayPause}
                            src={isPlaying ? "/image/play-sound.png" : "/image/no-sound.png"}
                            alt={isPlaying ? "Tocar" : "Pausar"}
                            className="btn-icon"
                          />
                        </section>
                      )}
                    </section>
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