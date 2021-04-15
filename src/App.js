
/* eslint-disable react/jsx-no-undef */
<<<<<<< HEAD
import ThankYou from './components/ThankYou';
import './scss/ThankYou.scss';
=======
import {} from 'react-router-dom';


import './App.css';
import { IconName } from "react-icons/fa";
import Wrapper from './components/Wrapper';
// import Landing from './components/Landing';
import logo from './logo.svg';

import { Router } from '@reach/router'
import ProfilePage from './components/ProfilePage';



import Footer from './components/Footer';
import Header from './components/Header';

import Nike from "./components/Nike";
import ViewDetails from "./components/ViewDetails";
import Upload from "./components/Upload";

import './App.css';
import './scss/Card.scss';
import './scss/Style.scss';
import './scss/Form.scss';
import './scss/Detailspage.scss';
// import './scss/Landing.scss';






>>>>>>> 936871c9d20dd4d1914bcee68daba672c61819a1

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <ThankYou/>
=======
      {/* <Landing/> */}
     
     
     <Header/>
      <Router>
     <Wrapper path="/"/>
     <ProfilePage path="/profile-page"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
   <Upload path="/add-product"/>
   
     </Router>
     <Footer/>
      
>>>>>>> 936871c9d20dd4d1914bcee68daba672c61819a1
    </div>
  );

}
export default App;
