import React, { Component } from "react";
import Axios from "axios";
import CommentsCard from "./CommentsCard";


//all comments

export default class CommentsWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsArray: [],
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/comments/`).then((res) => {
      console.table(res.data);
      this.setState({
        commentsArray: res.data,
      });
    });
  }
  
  render() {
    return (
     
      <React.Fragment>
      
        
      <h3 className="title">User Comments</h3>
     
     <div className="card-box">
        {this.state.commentsArray.map((item, index) => {
          return (
           
            

            <CommentsCard
              key={index}
              username={item.username}
              item={item.item}
              review={item.review}
              
            />
            
          );
        })}
       </div>
      </React.Fragment>
    );
  }
}