import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class SelectBrand extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
              <h3> Select by brand </h3>
            </div>
      <div className="select-box">
        <Link to="/show-nike"><div className="nike"><img src="./images/logo_n.png"/></div></Link>
        <Link to="/show-nike"><div className="nike"><img src="./images/logo_a.png"/></div></Link>
        <Link to="/show-nike"><div className="nike"><img src="./images/logo_j.png"/></div></Link>
      </div>
      </React.Fragment>
        )
    }
}
