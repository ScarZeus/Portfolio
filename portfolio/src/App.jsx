import './App.css'
import About from './component/about-me-component/About'
import Footer from './component/footer-Component/Footer'
import Header from './component/header-Component/Header'
import Home from './component/home-component/Home'

function App() {
  return (
    <div className='App'>
      <div className='App-bar'>
        <Header />
      </div>
    <Home />
    <About />
      <div className='Foot-bar'>
        <Footer />
      </div>
    </div>
  )
}

export default App
