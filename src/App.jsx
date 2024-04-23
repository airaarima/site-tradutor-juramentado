import styles from "./App.module.css"
import Navbar from './components/Nav/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Contato from './components/Contato/Contato.jsx'
import Bandeiras from './components/Bandeiras/Bandeiras.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Bandeiras/>
      <Contato/>
    </div>
  )
}

export default App
