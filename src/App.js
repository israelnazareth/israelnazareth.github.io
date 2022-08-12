import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
