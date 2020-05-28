import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

export default class IconWithText extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={icons["faMountain"]} color="green" />
        <div>
          <h3>xxxxx</h3>
          <p>aasdasdadasfv asfaf awa faf</p>
        </div>
      </div>
    );
  }
}
