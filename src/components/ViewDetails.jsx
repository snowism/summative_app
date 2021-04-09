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
            sneaker: {name:""
            }
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
            <div className="detail-wrapper">
               
               <div className="detail-box">
                <img className="detail-img" src={"./images/" + this.state.sneaker.filepath} alt="sneaker image"/>
                <p>{this.state.sneaker.name}</p>
                </div>



               <div className="select-price">

               <label class="container">
              
  
 
 <span>New Item: NZD $ {this.state.sneaker.newprice}</span>
 
 <input type="radio" checked="checked" name="radio" value={this.state.sneaker.newprice}/>
</label>
<label class="container">
<span>Used Item: NZD $ {this.state.sneaker.oldprice}</span>
  
  
  <input type="radio" name="radio" value={this.state.sneaker.oldprice}/>
</label>


              
               </div>
               
<div className="select-size">
    
    <div><span className="size">8.5</span>  
           

    </div>
    <div><span className="size">9</span>  </div>
    <div><span className="size">9.5</span>  </div>
    <div><span className="size">10</span>  </div>
    <div><span className="size">10.5</span>  </div>

    </div>

<div className="total-price">
$
</div>

<div className="button-box">

<SiteButton className="return" message="Back" action={this.navigateBack}/>
                <SiteButton className="checkout" message="checkout"/>
</div>
                
            </div>
        )
    }
}
