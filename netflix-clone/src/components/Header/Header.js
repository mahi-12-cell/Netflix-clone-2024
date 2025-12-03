// import React from "react";
// import "./Header.css"; // make sure you create this file

// const Header = () => {
//   return (
//     <header className="header">
//       {/* Left Side - Logo */}
//       <div className="logo">
//         <h1>NETFLIX</h1>
//       </div>

//       {/* Center - Navigation Menu */}
//       <ul className="nav-menu">
//         <li>Home</li>
//         <li>TV Shows</li>
//         <li>Movies</li>
//         <li>New & Popular</li>
//         <li>My List</li>
//       </ul>

//       {/* Right Side - Icons / Profile */}
//       <div className="user-section">
//         <img
//           // src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//           // alt="profile"
//           // className="avatar"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;
// // import React from "react";
// // import "./Header.css";

// // const Header = () => {
// //   return (
// //     <header className="header">
// //       <div className="header__left">
// //         {/* Netflix Logo */}
// //         <div className="logo">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
// //             alt="Netflix Logo"
// //           />
// //         </div>

// //         {/* Navigation Links */}
// //         <nav className="nav">
// //           <ul className="nav__list">
// //             <li className="nav__item">
// //               <a href="/">Home</a>
// //             </li>
// //             <li className="nav__item">
// //               <a href="/tv-shows">TV Shows</a>
// //             </li>
// //             <li className="nav__item">
// //               <a href="/movies">Movies</a>
// //             </li>
// //             <li className="nav__item">
// //               <a href="/latest">Latest</a>
// //             </li>
// //             <li className="nav__item">
// //               <a href="/my-list">My List</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>

// //       <div className="header__right">
// //         {/* Profile Avatar */}
// //         <div className="profile">
// //           <img
// //             src="https://via.placeholder.com/32"
// //             alt="Profile"
// //             className="profile__avatar"
// //           />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// import React from "react";
// import "./Header.css"; // make sure you create this file

// const Header = () => {
// return (
//   <div className="header_container">
//     <div className="header_left">
//       <ul>
//         {/* <li><img src={Netflixlogo}alt="Netflix logo" width="100"/></li> */}
//         {/* <li>Netflix</li> */}
//         <li>Home</li>
//         <li>TV Shows</li>
//         <li>Movies</li>
//         <li>Latest</li>
//         <li>My List</li>
//         <li>Browse by Languages</li>
//       </ul>
//     </div>

//     <div className="header_right">
//       {/* <ul>
//         <li><SearchIcon /></li>
//         <li><NotificationsNoneIcon /></li>
//         <li><AccountBoxIcon /></li>
//         <li><ArrowDropDownIcon /></li>
//       </ul> */}
//     </div>
//   </div>
//   );  }
//  export default Header;
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import NetflixLogo from "../assets/netflix-logo.png"; // <--- put your logo here

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_left">
        {/* <img src={NetflixLogo} alt="Netflix Logo" className="netflix_logo" /> */}

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

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
  );
}
