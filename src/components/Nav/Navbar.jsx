import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import {getImgPath} from '../../utils'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <nav className={styles.navbar}>
        <a className={styles.title}href="#inicio">Josiane Schlosser</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn} src={menuOpen ? getImgPath("nav/closeIcon.png") : getImgPath("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#home" className={styles.menuItem}>Home</a></li>
                <li><a href="#servicos" className={styles.menuItem}>Serviços</a></li>
                <li><a href="#conteudo" className={styles.menuItem}>Conteúdo</a></li>
                <li><a href="#contato" className={styles.menuItem}>Contato</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar