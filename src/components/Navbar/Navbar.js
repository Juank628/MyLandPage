import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import './Styles.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-box">
        <h1>
          <span>
            <FontAwesomeIcon icon={faMountain} color="green" />
            Far lands
          </span>
        </h1>
      </div>
    );
  }
}
