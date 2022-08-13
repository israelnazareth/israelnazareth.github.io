import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Techs from './components/Technologies/Techs';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Techs />
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
