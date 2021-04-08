import React, { Component } from "react";
import { FaLessThan } from "react-icons/fa";


export default class LoginPage extends React.Component {
    state={
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
            <div className='login'>
                <div className='login_container'>
                <div class="button_previous">
          <div class="icon_previous"><FaLessThan/></div>
          <span>Previous</span>
        </div>

                <h1>Login</h1>
                <form>
                    <h2>Email</h2>
                    <input type='email' name='email' placeholder=' example@gmail.com' autoComplete='off' required onChange={this.handleChange}/>
                    <h2>Password</h2>
                    <input type='password' name='pwd' placeholder=' password...' autoComplete='off' required onChange={this.handleChange}/>
                    <p>Forgotten your password?</p>
                    <button className='bttn' onSubmit={this.handleSubmit}>Login</button>
                </form>
                </div>
            </div>
        )
    }
}