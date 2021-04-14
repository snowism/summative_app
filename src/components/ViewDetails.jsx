import React, { Component } from "react";
import Axios from "axios";
import SiteButton from "./SiteButton";
import { navigate } from "@reach/router";
import CommentsWrapper from "./CommentsWrapper";
import AddComment from "./AddComment";


var blackBtnStyle = {
    width: "120px",
    height: "26px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius:"20px",
}

var whiteBtnStyle = {
    width: "80px",
    height: "26px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius:"20px",
}

export default class ViewDetails extends Component {
  constructor(props) {
    super(props);
    console.log("ID = ", this.props.location.state.id);

    this.state = {
      id: this.props.location.state.id,
      sneaker: { name: "" },
      totalprice: "",
    };

    console.log(">>>> ", this.props.location.state.id);
    console.log(">>>> ", this.state.name);
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/sneakers/${this.state.id}`).then(
      (res) => {
        console.table(res);
        this.setState({ sneaker: res.data });
      }
    );
  }

  navigateBack = (e) => {
    navigate(-1);
  };

  clickedPrice = (e) => {
    this.setState({ totalprice: e.target.value });

    console.log(e.target.value);
  };

  render() {
    return (
      <div className="detail-wrapper">
        <div className="detail-box">
          <img
            className="detail-img"
            src={"./images/" + this.state.sneaker.filepath}
            alt="sneaker image"
          />
          <p>{this.state.sneaker.name}</p>
         <p>NZD $ {this.state.sneaker.newprice}</p>

        </div>

        <div className="comment">
          <AddComment />
          <CommentsWrapper/>
        </div>

      
        <div className="select-size">
          <div>
            <span className="size">8.5</span>{" "}
          </div>
          <div>
            <span className="size">9</span>{" "}
          </div>
          <div>
            <span className="size">9.5</span>{" "}
          </div>
          <div>
            <span className="size">10</span>{" "}
          </div>
          <div>
            <span className="size">10.5</span>{" "}
          </div>
        </div>

      

        <div className="button-box">
          <SiteButton message="Back" action={this.navigateBack} style={whiteBtnStyle}/>
          <SiteButton message="CheckOut" style={blackBtnStyle}/>
        </div>
      </div>
    );
  }
}
