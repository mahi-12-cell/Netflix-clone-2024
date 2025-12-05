// import React from "react";
// import "./Footer.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// function Footer() {
//   return (
//     <div className="footer_container">
//       <div className="footer_content">
//         {/* Social Media Icons */}
//         <div className="footer_socials">
//           <FacebookIcon className="footer_icon" />
//           <InstagramIcon className="footer_icon" />
//           <YouTubeIcon className="footer_icon" />
//         </div>

//         {/* Links */}
//         <div className="footer_links">
//           <ul>
//             <li>Audio Description</li>
//             <li>Investor Relations</li>
//             <li>Legal Notices</li>
//             <li>Help Center</li>
//           </ul>
//           <ul>
//             <li>Jobs</li>
//             <li>Media Center</li>
//             <li>Privacy</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>

//         {/* Service code & copyright */}
//         <p className="footer_service_code">Service Code</p>
//         <p className="footer_copyright">&copy; 1997-2024 Netflix, Inc.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      {/* ICONS SECTION */}
      <div className="footer-icons">
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
        <YouTubeIcon className="icon" />
      </div>

      <div className="footer-row">
        <div className="footer-col">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Service Code</li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <p className="footer-copy">&copy; 2025 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;