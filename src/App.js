/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import { Router } from '@reach/router'


import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper'
import Nike from "./components/Nike"
import ViewDetails from "./components/ViewDetails"
import UpdateCard from "./components/UpdateCard"
import Upload from "./components/Upload";

import './App.css';
import './scss/Card.scss'
import './scss/Style.scss'
import './scss/Form.scss'
import './scss/Detailspage.scss'






function App() {
  return (
    <div className="App">
     
     <Header/>
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
   <Upload path="/add-product"/>
   <UpdateCard path="update"/>
     </Router>
     <Footer/>
      
    </div>
  );
}

export default App;
