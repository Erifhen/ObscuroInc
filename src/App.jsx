import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import GamesSection from './sections/GamesSection'
import BooksSection from './sections/BooksSection'
import AppsSection from './sections/AppsSection'
import AboutCard from './components/AboutCard/AboutCard'
import ContactCard from './components/ContactCard/ContactCard'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app-content'>
      <Navbar/>
      <Header/>
      <AppsSection/>
      <GamesSection/>
      <BooksSection/>
      <AboutCard/>
      <ContactCard/>
      <Footer/>
    </div>      

  )
}

export default App
