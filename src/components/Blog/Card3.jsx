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
          src={getImgPath("trabalhos/blog3.jpg")}
          alt="Foto de josiane"
          className={styles.img}
        />
        <h3 className={styles.title}>Por que procurar por um tradutor?</h3>
        <p className={styles.description}>A tradução tem uma ampla gama de atuação, podendo se estender desde a documentos pessoais, contratos e questões jurídicas no geral e…</p>
        <button onClick={openModal} target="_blank" className={styles.seta}>
          <img src={getImgPath("trabalhos/seta.png")} alt="" />
        </button>
        <div className={styles.modalContainer}>
          <Modal
          isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal de Publicação" overlayClassName={styles.modalOverlay} className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Por que procurar por um tradutor?</h3>
            <hr />
            <div className={styles.modalDescription}>
              <p>A tradução tem uma ampla gama de atuação, podendo se estender desde a documentos pessoais, contratos e questões jurídicas no geral e até mesmo artigos científicos.</p>
              <img src={getImgPath("trabalhos/documentos-card.jpg")} className={styles.modalImg} />
              <p>Entre os documentos traduzidos mais comuns está a documentação civil, como certidões de nascimento, casamento e óbito e papéis de divórcio. Há também os documentos pessoais, como RG, CNH, passaportes, entre outros. Além disso, diplomas, históricos escolares, processos e procurações. Na parte financeira e administrativa, contratos sociais, estatutos de empresas e licitações.</p>
              <p>A seguir, uma lista:</p>
              <ul>
                <li>Contratos Sociais e Estatutos de Empresas;</li>
                <li>Contratos em Geral;</li>
                <li>Registro da Empresa;</li>
                <li>Passaporte;</li>
                <li>Processos;</li>
                <li>Procurações;</li>
                <li>Documentos para Imigração;</li>
                <li>Documentos Administrativos (contratos, licitações, acordos);</li>
                <li>Documentos Financeiros;</li>
                <li>Documentos Escolares (Certificados do Ensino Fundamental e do Ensino Médio, Diplomas Universitários e Históricos Escolares);</li>
                <li>Documentos Pessoais (RG, CNH);</li>
                <li>Certidão de Nascimento;</li>
                <li>Certidão de Casamento;</li>
                <li>Certidão de Óbito;</li>
                <li>Carteira de Identidade;</li>
                <li>Carteira de Motorista;</li>
                <li>Carteira de Registro Profissional (CRM, OAB etc.);</li>
                <li>Artigos Científicos;</li>
                <li>Entre outros.</li>
              </ul>
              <p>Caso você gostaria de se informar mais ou precise da tradução de algum dos documentos acima, entre em contato comigo para a realização de um orçamento ou para sanar as suas dúvidas.</p>
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
