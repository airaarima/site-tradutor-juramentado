import React from 'react'
import {getImgPath} from '../../utils'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.container} id="home">
        <div className={styles.content}>
            <h1 className={styles.title}>Olá, me chamo Josiane!</h1>
            <p className={styles.description}>Comecei a traduzir em 2008 e em 2010 fiz o concurso para tradutora juramentada. Fui aprovada e desde então atuo na área realizando traduções tanto do espanhol para o português, como do português para o espanhol.</p>
            <a href="#contato" className={styles.contatoBtn}>Contate-me</a>
        </div>
        <img src={getImgPath("pessoal/myImage.png")} alt="" className={styles.pessoalImg}/>
    </section>
  )
}

export default Home