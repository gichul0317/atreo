import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Figure from './components/Figure';
import Aside from './components/Aside';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Figure />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
