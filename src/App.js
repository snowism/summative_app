/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/Card.scss';
import './scss/Style.scss';
import './scss/Landing.scss';

function App() {
  return (
    <div className="App">
      <Header/>
     <Wrapper/>
     <Footer/>
    </div>
  );
}

export default App;
