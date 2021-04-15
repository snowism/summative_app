<<<<<<< HEAD
/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import { Router } from '@reach/router'


import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Nike from "./components/Nike";
import Adidas from "./components/Adidas";
import Jordan from "./components/Jordan";
import ViewDetails from "./components/ViewDetails";
import UpdateCard from "./components/UpdateCard";
import Upload from "./components/Upload";

import CommentsWrapper from "./components/CommentsWrapper";

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
     <Adidas path="/show-adidas"/>
     <Jordan path="/show-jordan"/>
   <Upload path="/add-product"/>
   <UpdateCard path="update"/>
     </Router>
     <Footer/>
      
    </div>
  );
}

export default App;
=======
/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import { Router } from '@reach/router'


import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Nike from "./components/Nike";
import Adidas from "./components/Adidas";
import Jordan from "./components/Jordan";
import ViewDetails from "./components/ViewDetails";
import UpdateCard from "./components/UpdateCard";
import Upload from "./components/Upload";

import CommentsWrapper from "./components/CommentsWrapper";

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
     <Adidas path="/show-adidas"/>
     <Jordan path="/show-jordan"/>
   <Upload path="/add-product"/>
   <UpdateCard path="update"/>
     </Router>
     <Footer/>
      
    </div>
  );
}

export default App;
>>>>>>> 75848c3e46825f41c48b47e4fcf6c6a73586cb25
