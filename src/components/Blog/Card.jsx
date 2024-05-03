import React from "react";
import styles from "./Card.module.css";
import { getImgPath } from "../../utils";

const Card = ({ trabalho: { title, imageSrc, description, link } }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImgPath(imageSrc)}
        alt={`Imagem do trabalho ${title}`}
        className={styles.img}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} target="_blank" className={styles.seta}>
        <img src={getImgPath("trabalhos/seta.png")} alt="" />
      </a>
    </div>
  );
};

export default Card;
