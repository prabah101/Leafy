import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">Leafy.</div>
      <div className="navbar-main">
        <span className="navbar-element border">Home</span>
        <span className="navbar-element border">About</span>
        <span className="navbar-element">Contact Us</span>
      </div>
      <div className="navbar-right"><AccountCircleIcon className="navbar-profile" sx={{color: '#526015'}}/></div>
    </div>
  );
};

export default Navbar;
