import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaLessThan } from "react-icons/fa";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Footer from "./Footer";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imagesArray: [props.pic1, props.pic2],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const imageMapper = this.state.imagesArray.map((image, index) => {
      return (
        <img src={image} onClick={() => this.props.handleImageChange(image)} 
        height='48px'/>
      );
    });
    return (
      <body>
        <div className="profile">
          <div class="button_previous1">
            <div class="icon_previous1">
              <FaLessThan />
            </div>
            <span>Previous</span>
          </div>
          <br></br>
          <div className="ptitle">
            <h2>My Profile</h2>
          </div>
          <div className="profilepic">
            <br></br>
            <Button className='edit' type="primary" onClick={this.showModal}>
              Edit Avatar
            </Button>
            <Modal
              title="Select Avatar"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              {imageMapper}
            </Modal>{" "}
            <br></br>
            <h1 className="profilename">Razif Perdana</h1>
            <h1 className="profilename">perdanarazif@gmail.com</h1>
          </div>
        </div>
      </body>
    );
  }
}
