import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="Winnie"
          className="card-img card-img-top"
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          {" "}
          Lorem ipsum dolor sit ametl.
        </p>
        <a href="" className="btn btn-outline">
          Click
        </a>
      </div>
    </div>
  );
}

export default Card;
