import styles from "./App.module.css"
import Navbar from './components/Nav/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Servicos from './components/Servicos/Servicos.jsx'
import Conteudo from './components/Conteudo/Conteudo.jsx'
import Bandeiras from './components/Bandeiras/Bandeiras.jsx'
import Contato from './components/Contato/Contato.jsx'


function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Servicos/>
      <Conteudo/>
      <Bandeiras/>
      <Contato/>
    </div>
  )
}

export default App
