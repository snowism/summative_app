import React, { Component } from 'react';

export default class Shipping extends React.Component {
    state={ Full_Name:'',
            Email:'',
            Phone:'',
            Country_city:'',
            Address:'',
            Postal_Code:''
            
    }

    handleChange = (e) =>{
        const{name,value} =e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()

    }
    
    render() {
        return (
            <div className="shipping">
                <div class="shipping_container">
             
                     
                     <h1>Shipping Information</h1>

                     <form>

                      <div className="form_container">

                    <h2>Full Name</h2>
                     <input type='First Name'name='First_Name' 
                     placeholder='"e.g. john"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                    <h2>Email</h2>
                     <input type='Email'name='Email' 
                     placeholder='"example"hotmail.com"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                    <h2>Phone</h2>
                     <input type='Phone'name='Phone' 
                     placeholder='"+64 0000 000 000"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                    <h2>Country/city</h2>
                     <input type='Country/City'name='Country_city' 
                     placeholder='"NewZealand or Auckland"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>Address</h2>
                     <input type='Address'name='Address' 
                     placeholder='"26 john strt, Remeura"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>Postal Code</h2>
                     <input type='Postal Code'name='Postal_code' 
                     placeholder='"2838"' autoComplete='off' 
                     required onChange={this.handleChange}/>
                     </div> 

             </form>
                
     </div>   
                
                 <div className="buttons_container">
                     <button className="Return_button">Return</button>

                     <button className="Continue_button" onSubmit={this.handleSubmit}>Continue</button>
                 </div>

            </div>
        )
    }
}