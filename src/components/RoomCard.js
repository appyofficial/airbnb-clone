import React from "react";
import "../styles/roomcard.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

export default function RoomCard({
  img,
  location,
  title,
  summary,
  rating,
  price,
  total,
}) {
  return (
    <div className="roomcard">
      <img src={img} alt={title} />
      <FavoriteBorderIcon className="roomcard__heart" />
      <div className="roomcard__info">
        <div className="roomcard__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_________</p>
          <p>{summary}</p>
        </div>
        <div className="roomcard__infoBottom">
          <div className="roomcard__footerStar">
            <StarIcon />
            <strong>{rating}</strong>
          </div>
          <div className="roomcard__price">
            <h2>{price}</h2>
            <p>{total} total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
