import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import "../styles/search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useHistory } from "react-router-dom";

export default function Search({ onClick }) {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearchButton = () => {
    history.push("/search");
    onClick();
  };

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
      />
      <div className="search__buttonContainer">
        <Button className="search__button" onClick={handleSearchButton}>
          Search
        </Button>
        <Button
          onClick={onClick}
          className="search__button"
          style={{ backgroundColor: "lightgrey" }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
