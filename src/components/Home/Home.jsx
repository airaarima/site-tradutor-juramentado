import React from 'react'
import {getImgPath} from '../../utils'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.container} id="home">
        <div className={styles.content}>
            <h1 className={styles.title}>Olá, meu nome é Josiane!</h1>
            <p className={styles.description}>Comecei a traduzir em 2008 e em 2010 fiz o concurso para tradutora juramentada. Fui aprovada e desde então atuo na área realizando traduções do espanhol para o português, e versões do português para o espanhol.</p>
            <a href="#contato" className={styles.contatoBtn}>Contate-me</a>
        </div>
        <div className={styles.divImg}>
          <img src={getImgPath("pessoal/perfil2.jpg")} alt="Imagem pessoal" className={styles.pessoalImg}/>
          </div>
    </section>
  )
}

export default Home