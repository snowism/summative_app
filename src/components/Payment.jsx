import React, { Component } from 'react';

export default class Payment extends React.Component {
    state={ Name_on_card:'',
            Card_Number:'',
            Expiry_Date:'',
            CVV:''
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
            <div className="payment">
                <div class="payment_container">
                 <div className="button_previous">
                      <span> Back </span>
                  </div>    
                     
                     <h1>Payment Method</h1>

                     <form>

                      <div className="form_container">  
                     <h2>Name on card</h2>
                     <input type='Name on card'name='Name_on_card' 
                     placeholder='"e.g. john green"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                    <h2>Card Number</h2>
                     <input type='Card Number'name='Card_Number' 
                     placeholder='"8888-8888-8888-8888"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>Expiry Date</h2>
                     <input type='Expiry Date'name='Expiry_Date' 
                     placeholder='"MM/YY"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>CVV</h2>
                     <input type='CVV'name='CVV' 
                     placeholder='"564"' autoComplete='off' 
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