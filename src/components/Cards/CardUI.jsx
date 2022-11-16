import React, { Component } from "react";
import Card from "./Cards.jsx";
import img1 from "./card-images/cropwinnie.jpg";
import img2 from "./card-images/cropsharpie.jpg";
import img3 from "./card-images/rolo.jpeg";

class Cards extends Component {
  render() {
    return (
      <div className="dog-star-section container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Card One" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Card Two" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="Card Three" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
