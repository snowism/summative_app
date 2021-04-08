import React, { Component } from 'react';



export default class Landing extends Component {
    render() {
        return (
            <body>
                <div class="landing-wrapper">
                    <div className="app-logo"><img src="./images/snkrszap_logo.png"/></div>
                </div>
                <div>
                <button class="button1" type="submit">
              <span class="loginbtn">Login</span>
            </button>
            <button class="button2" type="submit">
              <span class="loginbtn">Sign Up</span>
            </button>
                </div>
                
                </body>
            
        )
    }
}
