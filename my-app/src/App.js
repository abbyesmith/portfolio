import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

// Come back to tsParticles


function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Services/>
      <Experience/>
      <Projects/>
      <Recommendations/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
