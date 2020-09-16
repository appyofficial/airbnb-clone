import React from "react";
import "../styles/card.css";

export default function Card({ imgUrl, title, details, price }) {
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{details}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
