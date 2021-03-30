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
        <Link to="/show-nike"><div className="nike">a</div></Link>
        <div className="nike">b</div>
        <div className="nike">c</div>
      </div>
      </React.Fragment>
        )
    }
}
