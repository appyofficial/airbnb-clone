import React from "react";
import "../styles/search_page.css";
import Button from "@material-ui/core/Button";
import RoomCard from "../components/RoomCard";
import stockholm from "../data/listenings/stockholm";
console.log(stockholm.length);

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
        <RoomCard
          key={stockholm[0].id}
          title={stockholm[0].name}
          img={stockholm[0].picture_url}
          location={stockholm[0].street}
          summary={stockholm[0].summary}
          rating={stockholm[0].review_scores_rating}
          price={stockholm[0].price}
          total=""
        />
      </div>
    </div>
  );
}
