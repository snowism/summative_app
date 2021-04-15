import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal"
import { navigate } from "@reach/router";


var blackBtnStyle = {
  width: "120px",
  height: "26px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius:"20px",
}


export default class UpdateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      brand:"",
      newprice: "",
      usedprice: "",
      id: this.props.location.state.id,
      showmodal: false,
      
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/sneakers/${this.state.id}`).then(
      res => {
        console.table(res.data);
        this.setState({
            filepath: res.data.filepath,
          name: res.data.name,
          brand: res.data.brand,
          newprice: res.data.newprice,
          usedprice: res.data.oldprice,
         id: res.data.id,
         
        });
      }
    );
  }

  updateItem = e => {
    e.preventDefault();

    Axios.put(
      `http://localhost:4000/api/sneakers/${this.state.id}`,
      this.state
    ).then(res => {
      console.log(res);
      if (res.statusText === "OK") {
       alert("Success - this needs a pretty modal")
      } else {
        alert("Fail - this needs a pretty modal")
      }
    });
  };

  handleFilepath = e => {
    this.setState({ filepath: e.target.value });
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleBrand =(e) => {
    this.setState({ brand: e.target.value });
  }

  handlePrice = (e) => {
    this.setState({ newprice: e.target.value });
  };
  handleUsedPrice = (e) => {
    this.setState({ usedprice: e.target.value });
  };

  

onConfirm = e => {
  this.setState({ showmodal: false });
  navigate(-1);
};



  render() {

    return (
         <div className="form-wrapper">
        <h3>Update Product:</h3>
        <form className="special" onSubmit={this.updateItem}>

        <div>
            <label>Image file path</label>
            <input
              type="text"
              name="filepath"
              placeholder=".jpg, .png, .gif etc"
              value={this.state.filepath}
              onChange={this.handleFilepath}
            />
          </div>
        <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="artist name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>

          <div>
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder=""
              value={this.state.brand}
              onChange={this.handleAlbum}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="new item price"
              value={this.state.newprice}
              onChange={this.handlePrice}
            />
          </div>
          <div>
            <label>Used Price</label>
            <input
              type="text"
              name="Used Price"
              placeholder="used item price"
              value={this.state.usedprice}
              onChange={this.handleUsedPrice}
            />
          </div>
         
          <br />
          <button style={blackBtnStyle} type="submit">Update details</button>
        </form>

        <Modal showmodal={this.state.showmodal} title={"Update success"} message={"SWEET"} action={this.onConfirm}/>
      </div>
    );
  }
}
