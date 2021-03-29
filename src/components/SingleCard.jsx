import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Axios from "axios";


export default class SingleCard extends Component {

    

    
    render() {
        return (
            <div className="card">
              
               <p>{this.props.name}</p>
               <p>{this.props.price}</p>
             
               <p>{this.props.Price}</p>
            </div>
        )
    }
}
