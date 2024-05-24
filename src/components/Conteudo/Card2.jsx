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
    <div className={styles.cardContainer}>
        <img
          src={getImgPath("trabalhos/blog2.jpg")}
          alt="Foto de josiane"
          className={styles.img}
        />
        <h3 className={styles.title}>Eu preciso de uma tradução juramentada?</h3>
        <p className={styles.description}>A tradução juramentada é obrigatória para que os documentos redigidos em língua estrangeira produzam efeito em repartições…</p>
        <button onClick={openModal} target="_blank" className={styles.seta}>
          <img src={getImgPath("trabalhos/seta.png")} alt="" />
        </button>
        <div className={styles.modalContainer}>
          <Modal
          isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal de Publicação" overlayClassName={styles.modalOverlay} className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Eu preciso de uma tradução juramentada?</h3>
            <hr />
            <div className={styles.modalDescription}>
              <p>A legislação brasileira exige a tradução juramentada de documentos em língua estrangeira para que estes tenham validade no Brasil. No caso de versão juramentada do português para uma língua estrangeira, a validade é determinada pela legislação do país de destino.</p>
              <p>A tradução juramentada é obrigatória para que os documentos redigidos em língua estrangeira produzam efeito em repartições dos Municípios, dos Estados ou da União, em qualquer instância, juízo, tribunal ou entidade mantida, fiscalizada ou orientada pelos poderes públicos.</p>
              <p>Dessa forma, a tradução juramentada é muito mais do que apenas a transposição de um texto de um idioma para outro; é a produção de um outro documento que tem a capacidade de surtir os devidos efeitos legais nas repartições públicas brasileiras e do exterior.</p>
              <img src={getImgPath("trabalhos/traducao-card.jpg")} className={styles.modalImg} />
              <p>A tradução juramentada em espanhol é um serviço necessário durante o processo para obter documentos no Brasil ou em outros países, ou para a participação em processos de bolsas de estudos de nações que falam o espanhol, por exemplo.</p>
              <p>Para saber mais sobre porquê procurar um tradutor, acompanhe os outros conteúdos do nosso site. Qualquer dúvida, entre em contato comigo.</p>
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
