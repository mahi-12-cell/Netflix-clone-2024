// import React from "react";
// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// // import NetflixLogo from "../assets/netflix-logo.png"; // <--- put your logo here

// export default function Header() {
//   return (
//     <div className="header_container">
//       <div className="header_left">
//         {/* <img src={NetflixLogo} alt="Netflix Logo" className="netflix_logo" /> */}

//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>Latest</li>
//           <li>My List</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>

//       <div className="header_right">
//         <ul>
//           <li>
//             <SearchIcon />
//           </li>
//           <li>
//             <NotificationsNoneIcon />
//           </li>
//           <li>
//             <AccountBoxIcon />
//           </li>
//           <li>
//             <ArrowDropDownIcon />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Header.css";
// import NetflixLogo from "../../assets/images/NetflixLogo.png";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/NetflixLogo.svg";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* LEFT SECTION */}
        <div className="header_left">
          <ul>
            {
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
            }
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
