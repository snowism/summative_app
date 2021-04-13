import React, { Component } from "react";


var modalStyle = {
    position:"absolute",
    bottom:"70%",
    left:"0%",
    backgroundColor: "gray",
    width:"100vw",
    height:"20vh",
    color:"snow",
}


class Modal extends Component {
  render() {
    if (this.props.showmodal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
    }
    return (
      <div className="my-modal" style={modalStyle}>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.action} >{this.props.message}</button>
        <div>{this.props.children}</div>
     
      </div>
    );
  }
}

export default Modal;