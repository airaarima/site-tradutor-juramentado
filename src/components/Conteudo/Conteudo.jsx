import React from "react";
import styles from "./Conteudo.module.css";
import Card1 from "./Card1.jsx"
import Card2 from "./Card2.jsx"
import Card3 from "./Card3.jsx"

const Conteudo = () => {
  return (
    <section className={styles.container} id="conteudo">
      <h2 className={styles.title}>Conteúdo</h2>
      <div className={styles.publicacoes}>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
    </section>
  );
};

export default Conteudo;
