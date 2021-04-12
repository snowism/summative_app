<<<<<<< HEAD
/* eslint-disable react/jsx-no-undef */
<<<<<<< HEAD
import "./App.css";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { IconName } from "react-icons/fa";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nike from "./components/Nike";
import ViewDetails from "./components/ViewDetails";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ProfilePage from "./components/ProfilePage";
import Pic1 from "./components/Pics/1.jpg";
import Pic2 from "./components/Pics/2.jpg";

import "./App.css";
import "./scss/Card.scss";
import "./scss/Style.scss";
import "./scss/LoginPage.scss";
import "./scss/SignUpPage.scss";
import "./scss/ProfilePage.scss";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ""
    };
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage
    });
  };

  render() {
    return (
      <div className="App">
        <div className='pfp'>
          <Avatar
              size={160}
              icon='user'
              src={this.state.profileImage}
            />
            </div>
        <ProfilePage
          handleImageChange={this.handleImageChange}
          pic1={Pic1}
          pic2={Pic2}
        />
      </div>
    );
  }
=======
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
>>>>>>> 64ff451cb3d9d49e692e9efcd8936dd9366270a4
}
export default App;
