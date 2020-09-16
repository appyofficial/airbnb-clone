import React from "react";
import "../styles/banner.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Get out and explore your imagination</h1>
        <h5>
          Let's explore the new places and share the best memories of our life
          together.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
