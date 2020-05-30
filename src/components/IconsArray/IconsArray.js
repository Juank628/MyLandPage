import React, { Component } from "react";
import "./Styles.css";
import IconsWithText from "../IconWithText/IconWithText";

export default class IconsArray extends Component {
  render() {
    return (
      <div className="IconsWithText-Container">
        <IconsWithText
          faIcon="faHome"
          iconColor="#ffffff"
          iconBackColor="#28a745"
          title="icono 1"
          description="this is the icon 1"
        />
        <IconsWithText
          faIcon="faTree"
          iconColor="#ffffff"
          iconBackColor="#28a745"
          title="icono 2"
          description="this is the icon 2"
        />
        <IconsWithText
          faIcon="faHorse"
          iconColor="#ffffff"
          iconBackColor="#28a745"
          title="icono 3"
          description="this is the icon 3"
        />
      </div>
    );
  }
}
