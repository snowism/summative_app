/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
<<<<<<< HEAD
import { Router } from '@reach/router'

import Wrapper from './components/Wrapper'
import Nike from "./components/Nike"
import ViewDetails from "./components/ViewDetails"
import Landing from './components/Landing'
import Footer from "./components/Footer"

import './App.css';
import './scss/Card.scss'
import './scss/Style.scss'
=======
import './App.css';
import Wrapper from './components/Wrapper';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/Card.scss';
import './scss/Style.scss';
import './scss/Landing.scss';
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
     {/* <Landing/> */}
   
     </Router>
     <Footer/>
      
=======
      <Header/>
     <Wrapper/>
     <Footer/>
>>>>>>> main
    </div>
  );
}

export default App;
