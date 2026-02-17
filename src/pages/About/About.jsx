import './About.css';
import NavBar from '../Home/NavBar/NavBar.jsx';
import Footer from '../Home/Footer/Footer.jsx';
import Hero from './HeroSec/Hero.jsx';
import Cards from '../Home/GridCards/Cards.jsx';
import Missions from './Missions/Missions.jsx';

function About() {
  return (
    <>
      <NavBar />
      <Hero />
      <Missions />
      <Cards />
      <Footer />
    </>
  )
}

export default About