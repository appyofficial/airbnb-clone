import React from "react";
import "../styles/banner.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Get out and explore Stockholm</h1>
        <h5>
          From fika to small beautiful streets of old town, find yourself
          emerged in wonderful capital of Sweden.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Stay Nearby
        </Button>
      </div>
    </div>
  );
}
