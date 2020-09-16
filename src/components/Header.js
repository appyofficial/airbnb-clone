import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Search from "./Search";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__icon" src={logo} alt="airbn logo" />
        </Link>

        {!showSearch && (
          <div
            className="header__center"
            role="search"
            data-testid="little-search"
            aria-labelledby="littleSearchLabel"
          >
            <button
              className="header__centerbtn"
              onClick={() => setShowSearch(!showSearch)}
              variant="outlined"
            >
              <div className="header__centerbtnText">
                <p className="header__searchText">Start your search</p>
              </div>
              <SearchIcon className="header__centerbtnIcon" />
            </button>
          </div>
        )}
        <div className="header__right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <AccountCircleIcon />
        </div>
      </div>
      {showSearch && <Search onClick={() => setShowSearch(false)} />}
    </>
  );
}
