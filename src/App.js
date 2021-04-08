

import './App.css';
import Wrapper from './components/Wrapper';
// import Landing from './components/Landing';
import logo from './logo.svg';

import { Router } from '@reach/router'



import Footer from './components/Footer';
import Header from './components/Header';

import Nike from "./components/Nike";
import ViewDetails from "./components/ViewDetails";
import Upload from "./components/Upload";

import './App.css';
import './scss/Card.scss';
import './scss/Style.scss';
import './scss/Form.scss';
// import './scss/Landing.scss';







function App() {
  return (
    <div className="App">
      {/* <Landing/> */}
     
     
     <Header/>
      <Router>
     <Wrapper path="/"/>
     <ViewDetails path="/product-details"/>
     <Nike path="/show-nike"/>
   <Upload path="/add-product"/>
   
     </Router>
     <Footer/>
      
    </div>
  );
}

export default App;
