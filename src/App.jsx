import styles from "./App.module.css"
import Navbar from './components/Nav/Navbar.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
