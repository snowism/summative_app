import React, { Component } from "react";
import Axios from "axios";
import SingleCard from "./SingleCard";



export default class Nike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sneakersArray: [],
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/sneakers/`).then((res) => {
      console.table(res.data);
     

      this.setState({
        sneakersArray: res.data,
        
      });
    });
  }
  

  render() {
    return (
     
      <React.Fragment>
      
        
     <h3>NIKE</h3>

     <div className="card-box">
        {this.state.sneakersArray.map((item, index) => {
          return (
           
            

            <SingleCard
              key={index}
              name={item.name}
              price={item.newprice}
              usedPrice={item.oldprice}
              
             id={item.id}
             filepath = {item.filepath}
            />
            
          );
        })}
       </div>
      </React.Fragment>
    );
  }
}