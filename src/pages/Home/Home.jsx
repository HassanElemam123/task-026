import './Home.css';
import NavBar from './NavBar/NavBar.jsx';
import Hero from './HeroSec/Hero.jsx';
import Cards from './GridCards/Cards.jsx';
import Recommended from './Recommended/Recommended.jsx';
import Footer from './Footer/Footer.jsx';

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Cards />
      <Recommended />
      <Footer />
    </>
  )
}

export default Home
