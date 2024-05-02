import React from 'react'
import styles from './Sobre.module.css'
import {getImgPath} from '../../utils'

const Sobre = () => {
  return (
    <section id="sobre" className={styles.container}>
        <h2 className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            <img src="" alt="" className={styles.sobreImg}/>
            <ul className={styles.sobreItens}>
                <li className={styles.sobreItem}>
                    <img src={getImgPath("sobre/experiente-branco.png")} alt="Experience icon" />
                    <div className={styles.sobreItemText}>
                        <h3>Experiente</h3>
                        <p>Tradutora juramentada com vasta experiência em traduções públicas do espanhol para o português, assim como do português para o espanhol.</p>
                    </div>
                </li>
                <li className={styles.sobreItem}>
                    <img src={getImgPath("sobre/versatil-branco.png")} alt="Versatile icon" />
                    <div className={styles.sobreItemText}>
                        <h3>Versátil</h3>
                        <p>Tradutora de uma ampla gama de temas, desde traduções na área de máquinas agrícolas, até trabalhos de versão para o espanhol de artigos da área acadêmica.</p>
                    </div>
                </li>
                <li className={styles.sobreItem}>
                    <img src={getImgPath("sobre/determinada-branco.png")} alt="Simple line globe icon" />
                    <div className={styles.sobreItemText}>
                        <h3>Determinada</h3>
                        <p>Baseada em Santa Maria, mas disposta a enviar traduções para todo o Brasil e exterior.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sobre