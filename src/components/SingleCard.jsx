import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Axios from "axios";
import SiteButton from './SiteButton';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class SingleCard extends Component {

    goToDetails = e => {
        
        navigate (`/product-details`, {state: {id:this.props.id}});
        console.log("go to single info")
}

goToUpdate = e => {
    navigate (`/update`, {state: {id:this.props.id}});
        console.log("go to update")
}

onDelete = e => {
    console.log("deleting", this.props.id);
    
    Axios.delete(`http://localhost:4000/api/sneakers/${this.props.id}`).then(
        res => {
            console.log(res)
            if (res.data.deletedCount >= 1){
                console.log (">>>>> successful deletion, reload items to see changes");
            }
                else {
                    console.log (">>>> nothing deleted");
                }
            }
    );
        }

    


    render() {
        return (

            
               
            <div 

          className="card">
              
       
              <img onClick={this.goToDetails} src={"./images/" + this.props.filepath} className="product-img" alt=""/>
               <p>{this.props.brand}</p>
               <p>{this.props.name}</p>

               <p>NZD $ {this.props.price}</p>
              
              <div className="icon-box">
               <SiteButton action={this.goToUpdate} icon={<EditIcon />}/>
                <SiteButton action={this.onDelete} icon={<DeleteIcon />}/>
                </div>
              
            </div>
               
           
        )
    }
}
