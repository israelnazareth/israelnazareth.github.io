import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
