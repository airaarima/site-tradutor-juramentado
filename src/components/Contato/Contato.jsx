import React from 'react'
import styles from './Contato.module.css'
import {getImgPath} from '../../utils'

const Contato = () => {
  return (
    <section className={styles.container} id="contato">
        <div className={styles.contentText}>
            <h1 className={styles.title}>Contato</h1>
            <p className={styles.description}>Sinta-se a vontade para entrar em contato comigo!</p>
        </div>
        <div>
            
            <a className={styles.contentContact}>
                <img src={getImgPath('contato/emailIcon.png')} alt="" />
                joschlosser@gmail.com
            </a>
            
            <a href="https://www.linkedin.com/in/josiane-nicoloso-schlosser-a2a16846/?originalSubdomain=br " target='_blank' className={styles.contentContact}>
                <img src={getImgPath('contato/linkedinIcon.png')} alt="" />

                LinkedIn
            </a>

            <a href="https://wa.me/5555996578731?text=Olá, Josiane. Gostaria de fazer um orçamento para a tradução/versão de um documento." target='_blank' className={styles.contentContact}>
                <img src={getImgPath('contato/whatsIcon.png')} alt="" /> 

                WhatsApp
                    
            </a>
        </div>
    </section>
  )
}

export default Contato