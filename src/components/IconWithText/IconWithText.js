import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

export default class IconWithText extends Component {
  render() {
    const { iconColor, iconBackColor, title, description, faIcon } = this.props;

    return (
      <div className="InconsWithText-box">
        <div className="icon" style={{backgroundColor: iconBackColor}}>
          {faIcon ? (
            <FontAwesomeIcon icon={icons[faIcon]} color={iconColor} />
          ) : null}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
