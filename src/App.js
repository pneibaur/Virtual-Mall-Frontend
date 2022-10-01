import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
