/* eslint-disable react/jsx-no-undef */
<<<<<<< HEAD
import './App.css';
import Wrapper from './components/Wrapper';
import Landing from './components/Landing';
=======
import logo from './logo.svg';
import { Router } from '@reach/router'


>>>>>>> 30acdd815d28b5cfc728ae259580b8bb7a0b25c1
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper'
import Nike from "./components/Nike"
import ViewDetails from "./components/ViewDetails"

import './App.css';
import './scss/Card.scss'
import './scss/Style.scss'







function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Landing/>
     
     
=======
     
     <Header/>
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
   
   
     </Router>
     <Footer/>
      
>>>>>>> 30acdd815d28b5cfc728ae259580b8bb7a0b25c1
    </div>
  );
}

export default App;
