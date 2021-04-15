import React, { Component } from 'react';

export default class ThankYou extends React.Component {
    state={ ThankYou:'',
            
            
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
            <div className="ThankYou">
                <div class="ThankYou_container">
             
                     
                   

                     <form>
                        <h1>Thank you!</h1>
                        <h1>For your order</h1>
                      <div className="form_container">

                          

                    <h2>Congratulations! Your order has been succesfully placed
                         and is being processed by SNKRS ZAP team.</h2>
                   

                    <h2>Your order number is : <h3>90210</h3></h2>
  

                    <h2>We have send you an email with all the details you need to know about your purchase.
                         You can also keep an eye on your order in MyAccount.</h2>

                     </div> 

             </form>
                
     </div>   
                
                 <div className="buttons_container">

                     <button className="Continue_button" onSubmit={this.handleSubmit}>Continue Shopping </button>
                 </div>

            </div>
        )
    }
}