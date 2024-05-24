import React from 'react'
import styles from './Servicos.module.css'
import {getImgPath} from '../../utils'

const Servicos = () => {
  return (
    <section id="servicos" className={styles.container}>
        <h2 className={styles.title}>Serviços</h2>
        <div className={styles.content}>
            <img src={getImgPath("pessoal/bancada2.jpg")} alt="" className={styles.sobreImg}/>
            <ul className={styles.sobreItens}>
                <li className={styles.sobreItem}>
                    <img src={getImgPath("sobre/experiente-branco.png")} alt="Experience icon" />
                    <div className={styles.sobreItemText}>
                        <h3>Tradutora Juramentada Experiente</h3>
                        <p>Tradutora juramentada com vasta experiência em traduções públicas do espanhol para o português, assim como versões do português para o espanhol.</p>
                    </div>
                </li>
                <li className={styles.sobreItem}>
                    <img src={getImgPath("sobre/versatil-branco.png")} alt="Versatile icon" />
                    <div className={styles.sobreItemText}>
                        <h3>Versátil</h3>
                        <p>Tradutora de uma ampla gama de temas, desde traduções na área de máquinas agrícolas, artigos da área acadêmica, entre outros.</p>
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

export default Servicos