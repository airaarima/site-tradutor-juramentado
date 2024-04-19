import styles from "./App.module.css"
import Navbar from './components/Nav/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Contato from './components/Contato/Contato.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Contato/>
    </div>
  )
}

export default App
