import React, { Component } from 'react'
import { Link } from '@reach/router'
import Axios from "axios";


export default class SingleCard extends Component {

    

    
    render() {
        return (

            
               
            <div onClick={ navigate (`/product-details`+{state: {id:this.props.id}})
          className="card">
              
       
              <img src={"./images/" + this.props.filepath} className="product-img" alt=""/>
               <p>{this.props.name}</p>
               <p>{this.props.price}</p>
               <p></p>
          
              
            </div>
               
           
        )
    }
}
