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
    <div className="listening">
      <div className="listening__img">
        <img src={img} alt={title} width="100%" height="100%" />
      </div>
      <div className="listening__content">
        <div className="listening__details">
          
        </div>
        <div class="listening__price">{`From ${price} kr/night`}</div>
      </div>
    </div>
  );
}

/*

 <div className="roomcard">
      <div className="roomcard__image">
        <img src={img} alt={title} />
      </div>

      <FavoriteBorderIcon className="roomcard__heart" />
      <div className="roomcard__info">
        <div className="roomcard__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <hr />
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

*/
