import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Axios from "axios";


export default class SingleCard extends Component {

    goToDetails = e => {
        
        navigate (`/product-details`, {state: {id:this.props.id}});
        console.log("go to single info")
}

    
    render() {
        return (

            
               
            <div onClick={this.goToDetails}  

          className="card">
              
       
              <img src={"./images/" + this.props.filepath} className="product-img" alt=""/>
               <p>{this.props.name}</p>
               <p>{this.props.price}</p>
               <p></p>
          
              
            </div>
               
           
        )
    }
}
