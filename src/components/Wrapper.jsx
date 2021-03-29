import React, { Component } from "react";
import Axios from "axios";
import SingleCard from "./SingleCard";

export default class Wrapper extends Component {
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
        <div>
              <h3> Select by brand </h3>
            </div>
      <div>
        <div className="nike">a</div>
        <div className="nike">b</div>
        <div className="nike">c</div>
      </div>
      <h3>Featured</h3>
        {this.state.sneakersArray.map((item, index) => {
          return (
           
            
            <SingleCard
              key={index}
              name={item.name}
              price={item.newprice}
             id={item.id}
             filepath = {item.filepath}
            />
            
          );
        })}
      </React.Fragment>
    );
  }
}