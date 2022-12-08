import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Techs from './components/Technologies/Techs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  mirror: true,
})

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Techs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
