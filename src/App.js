import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Figure from './components/Figure';
import Aside from './components/Aside';
import Shop from './components/Shop';
import Client from './components/Client';
import Footer from './components/Footer';
import initFontAwesome from './initFontAwesome';
initFontAwesome();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Figure />
      <Aside />
      <Shop />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
