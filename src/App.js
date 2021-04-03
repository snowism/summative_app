/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import { Router } from '@reach/router'

import Wrapper from './components/Wrapper'
import Nike from "./components/Nike"
import ViewDetails from "./components/ViewDetails"
import Landing from './components/Landing'
import Footer from "./components/Footer"

import './App.css';
import './scss/Card.scss'
import './scss/Style.scss'

function App() {
  return (
    <div className="App">
     
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
     {/* <Landing/> */}
   
     </Router>
     <Footer/>
      
    </div>
  );
}

export default App;
