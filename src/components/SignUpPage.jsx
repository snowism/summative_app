import React, { Component } from "react";
import { FaLessThan } from "react-icons/fa";


export default class SignUpPage extends React.Component {
    state={
        fname:'',
        lname:'',
        email:'',
        pwd:''
    }


    handleChange = (e) =>{
        const{name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

    }
    render(){
        return(
            <div className='signup'>
                <div className='signup_container'>
                <div class="button_previous">
          <div class="icon_previous"><FaLessThan/></div>
          <span>Previous</span>
        </div>

                <h1>Sign Up</h1>
                <form>
                <h2>First Name</h2>
                    <input type='firstname' name='fname' placeholder=' John' autoComplete='off' required onChange={this.handleChange}/>
                    <h2>Last Name</h2>
                    <input type='lastname' name='lname' placeholder=' Doe' autoComplete='off' required onChange={this.handleChange}/>
                    <h2>Email</h2>
                    <input type='email' name='email' placeholder=' example@gmail.com' autoComplete='off' required onChange={this.handleChange}/>
                    <h2>Password</h2>
                    <input type='password' name='pwd' placeholder=' password...' autoComplete='off' required onChange={this.handleChange}/>
                    <p>By continuing you agree to our Terms of 
                        <br></br>Service and Privacy Policy.</p>
                    <button className='bttn' onSubmit={this.handleSubmit}>Sign Up</button>
                </form>
                </div>
            </div>
        )
    }
}