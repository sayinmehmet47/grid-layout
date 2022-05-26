import React from "react";

export default function Card(props) {
  return (
    <div className="card container">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <p>{props.description}</p>
      </div>

      <div className="card-footer">
        <a href={props.link}>{props.linkText}</a>
      </div>
    </div>
  );
}
