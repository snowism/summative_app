import React, { Component } from 'react'
import Axios from "axios";
import SiteButton from "./SiteButton";
import { navigate } from "@reach/router";

export default class ViewDetails extends Component {
    constructor (props){
        super (props);
        console.log ("ID = ", this.props.location.state.id)

        this.state = {
            id: this.props.location.state.id,
            sneaker: {name:""}
        }

        console.log(">>>> ", this.props.location.state.id);
        console.log(">>>> ", this.state.name);
    }

    componentDidMount(){
        Axios.get( `http://localhost:4000/api/sneakers/${this.state.id}`).then (
            res => {
                console.table(res);

                this.setState({sneaker:res.data})
            }
        )
    }

    navigateBack = e => {
        navigate(-1);
    };

    render() {
        return (
            <div className="detail-box">
               
                <img className="detail-img" src={"./images/" + this.state.sneaker.filepath} alt="sneaker image"/>
                <p>{this.state.sneaker.name}</p>
                <p>{this.state.sneaker.price}</p>
               
               
                <SiteButton message="Back" action={this.navigateBack}/>
            </div>
        )
    }
}
