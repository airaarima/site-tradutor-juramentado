import React from "react";
import styles from "./Card.module.css";
import { getImgPath } from "../../utils";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Card = () => {

  const[modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  return (
      <div>
        <a className={styles.cardContainer} onClick={openModal}>
          <img
            src={getImgPath("trabalhos/blog1.jpg")}
            alt="Foto de Josiane"
            className={styles.img}
          />
          <h3 className={styles.title}>O que é a tradução juramentada?</h3>
          <p className={styles.description}>A tradução juramentada (ou tradução pública) é realizada por um tradutor juramentado, o qual é concursado…</p>
          <button onClick={openModal} target="_blank" className={styles.seta}>
          <img src={getImgPath("trabalhos/seta.png")} alt="" />
          </button>
        </a>
        <div className={styles.modalContainer}>
          <Modal
          isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal de Publicação" overlayClassName={styles.modalOverlay} className={styles.modalContent}>
            <h3 className={styles.modalTitle}>O que é a tradução juramentada?</h3>
            <hr />
            <div className={styles.modalDescription}>
              <p>A tradução juramentada (ou tradução pública) é realizada por um tradutor juramentado, o qual é concursado, habilitado e matriculado na Junta Comercial do Estado. </p>
              <p>“Interessante… Mas qual é o diferencial de uma tradução juramentada?! Existe diferença entre uma tradução simples e juramentada?”</p>
              <p>A tradução juramentada é válida legalmente em todo o território brasileiro e é reconhecida na maior parte dos países estrangeiros. A principal diferença entre tradução simples e juramentada está na validade do documento. Enquanto a juramentada possui fé pública, a simples não tem validade legal.</p>
              <p>“Fé pública” significa que os atos do tradutor juramentado são considerados fidedignos, e é essa característica que faz com que traduções juramentadas sejam aceitas em todos os órgãos públicos. No Brasil, as traduções juramentadas são regidas pelo Decreto N° 13.609 (de 21 de outubro de 1943, capítulo III, artigo 18), que estabelece:</p>
              <div className={styles.divCitacao}>
                <p>Nenhum livro, documento ou papel de qualquer natureza que for exarado em idioma estrangeiro, produzirá efeito em repartições da União dos Estados e dos municípios, em qualquer instância, Juízo ou Tribunal ou entidades mantidas, fiscalizadas ou orientadas pelos poderes públicos, sem ser acompanhado da respectiva tradução feita na conformidade deste regulamento.</p>
              </div>
              <p>Existe também a versão juramentada.</p>
              <p>“Versão?! O que seria isso?”</p>
              <p>A versão juramentada tem a mesma função da tradução juramentada, mas o trâmite é o inverso, ou seja, quando um documento no idioma português necessita ser traduzido para o idioma estrangeiro requerido, deve ser realizada uma versão juramentada, a fim de garantir a validade legal desse documento. </p>
              <p>No caso do espanhol para o português, chama-se tradução juramentada; e do português para o espanhol, chama-se versão juramentada.</p>
              <p>Para saber mais sobre o trabalho de tradução/versão juramentada, acompanhe os outros conteúdos do nosso site. Qualquer dúvida, entre em contato comigo.</p>
            </div>
            <div className={styles.divBtn}>
              <button onClick={closeModal} className={styles.btnCloseModal}>Fechar</button>
            </div>
          </Modal>
        </div>
      </div>
  );
};

export default Card;
