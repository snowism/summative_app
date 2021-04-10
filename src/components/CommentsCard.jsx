import React, { Component } from 'react';
import { navigate } from '@reach/router';
import Axios from "axios";
import SiteButton from './SiteButton';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class CommentsCard extends Component {

    

goToCommentEdit = e => {
    navigate (`/edit-comment`, {state: {id:this.props.id}});
        console.log("go to update")
}

onCommentDelete = e => {
    console.log("deleting", this.props.id);
    
    Axios.delete(`http://localhost:4000/api/comments/${this.props.id}`).then(
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

          className="comment-card">
              
       
             
               <p>{this.props.username}</p>
               <p>{this.props.item}</p>
               <p>{this.props.review}</p>
              
              
              <div className="icon-box">
               <SiteButton action={this.goToCommentEdit} icon={<EditIcon />}/>
                <SiteButton action={this.onCommentDelete} icon={<DeleteIcon />}/>
                </div>
              
            </div>
               
           
        )
    }
}
