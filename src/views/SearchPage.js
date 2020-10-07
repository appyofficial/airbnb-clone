import React from "react";
import "../styles/search_page.css";
import Button from "@material-ui/core/Button";
import RoomCard from "../components/RoomCard";
import stockholm from "../data/listenings/stockholm";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 days . 26 aug to 30 aug . 2 guest</p>
        <h2>Stay nearby</h2>
        {[
          "Cancellation Flexibility",
          "Type of place",
          "Price",
          "Rooms and beds",
        ].map((btn) => (
          <Button variant="outlined">{btn}</Button>
        ))}
      </div>
      <div>
        {stockholm.map((x) => (
          <RoomCard
            key={stockholm[0].id}
            title={x.name}
            img={x.picture_url}
            location={x.street}
            summary={x.summary}
            rating={x.review_scores_rating}
            price={x.price}
            total=""
          />
        ))}
      </div>
    </div>
  );
}
