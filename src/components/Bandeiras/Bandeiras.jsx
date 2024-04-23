import React from 'react'
import styles from "./Bandeiras.module.css"
import {getImgPath} from '../../utils'

const Bandeiras = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Josiane Schlosser</h2>
      <p className={styles.description}>Tradutora Pública - Juramentada em espanhol</p>
      <div className={styles.content}>
        <img src={getImgPath("bandeiras/espanha.png")} alt="" className={styles.contentImg}/>
        <img src={getImgPath("bandeiras/brasil.png")} alt="" className={styles.contentImg}/>
      </div>

    </section>
  )
}

export default Bandeiras