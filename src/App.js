<<<<<<< HEAD
/* eslint-disable react/jsx-no-undef */
=======


>>>>>>> stacey
import './App.css';
import { IconName } from "react-icons/fa";
import Wrapper from './components/Wrapper';
<<<<<<< HEAD
import Landing from './components/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import Nike from "./components/Nike";
import ViewDetails from "./components/ViewDetails";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
=======
// import Landing from './components/Landing';
import logo from './logo.svg';

import { Router } from '@reach/router'



import Footer from './components/Footer';
import Header from './components/Header';

import Nike from "./components/Nike";
import ViewDetails from "./components/ViewDetails";
import Upload from "./components/Upload";
>>>>>>> stacey

import './App.css';
import './scss/Card.scss';
import './scss/Style.scss';
<<<<<<< HEAD
import './scss/LoginPage.scss';
import './scss/SignUpPage.scss';
=======
import './scss/Form.scss';
import './scss/Detailspage.scss';
// import './scss/Landing.scss';
>>>>>>> stacey







function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <SignUpPage/>
=======
      {/* <Landing/> */}
     
     
     <Header/>
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
   <Upload path="/add-product"/>
   
     </Router>
     <Footer/>
      
>>>>>>> stacey
    </div>
  );
}

export default App;
