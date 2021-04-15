import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Axios from "axios";
import SiteButton from './SiteButton';

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
               <p>{this.props.brand}</p>
               <p>{this.props.name}</p>

               <p>NZD $ {this.props.price}</p>
              
               {/* <SiteButton action={this.goToUpdate} message={"Update"}/>
                <SiteButton action={this.onDelete} message={"Delete"}/> */}
          
              
            </div>
               
           
        )
    }
}
