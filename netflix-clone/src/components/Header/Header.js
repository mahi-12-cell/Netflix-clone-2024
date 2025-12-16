import React, { useState } from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/NetflixLogo.svg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotify, setShowNotify] = useState(false);

  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* LEFT */}
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="header_right">
          <ul>
            {/* SEARCH */}
            <li onClick={() => setShowSearch(!showSearch)}>
              <SearchIcon />
            </li>

            {/* NOTIFICATION */}
            <li onClick={() => setShowNotify(!showNotify)}>
              <NotificationsNoneIcon />
            </li>

            {/* PROFILE */}
            <li>
              <AccountBoxIcon />
            </li>

            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>

      {/* SEARCH INPUT */}
      {showSearch && (
        <div className="search_box">
          <input type="text" placeholder="Search titles..." />
        </div>
      )}

      {/* NOTIFICATION BOX */}
      {showNotify && (
        <div className="notification_box">
          <p>No new notifications</p>
        </div>
      )}
    </div>
  );
};

export default Header;
