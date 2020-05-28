import React, { Component } from "react";
import "./Styles.css";

export default class PhotoWithText extends Component {
    
render() {

    return (
      <div className="PhotoWithText-Container">
        <div className="Text-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nisi sint dicta fugiat! Iste nisi facilis ab, porro unde reiciendis
            dolore sit sint tempore voluptatem hic cupiditate quaerat
            consequatur.
          </p>
        </div>
        <div className="Photo-box">
          <img src={require('../../img/Terreno_1.jpg')} alt="Humantay_1" />
        </div>
      </div>
    );
  }
}
