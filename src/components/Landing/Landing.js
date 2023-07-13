import React from "react";
import "./Landing.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import graphic from "../../graphic.png";
import Navbar from "../Navbar/Navbar";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <Navbar />
        <div className="landing-main-section">
          <div className="landing-content">
            <section className="landing-section">
              <div className="landing-header">
                <div className="text-one">Diagnose Your</div>
                <ul className="text-two">
                  <li>
                    <span>Crops</span>
                  </li>
                  <li>
                    <span>Plants</span>
                  </li>
                  <li>
                    <span>Fruits</span>
                  </li>
                </ul>
              </div>
              <div className="landing-main">
              Welcome to our plant disease detection website. Using cutting-edge technology and advanced algorithms, we swiftly analyze uploaded images of plants to identify diseases accurately. With our user-friendly interface and expert guidance, you can make informed decisions to protect your crops and ensure their productivity. Join us today and safeguard the health of your plants for a sustainable future.
              </div>
            </section>
          </div>
          <div className="landing-graphic">
            <img
              className="landing-img"
              src={graphic}
              alt="bgImg"
              height="500px"
            />
          </div>
        </div>
        <div className="landing-socials">
          <div className="landing-icon">
            <InstagramIcon sx={{ fontSize: "larger" }} />
          </div>
          <div className="landing-icon">
            <FacebookIcon sx={{ fontSize: "larger" }} />
          </div>
          <div className="landing-icon">
            <GitHubIcon sx={{ fontSize: "larger" }} />
          </div>
          <div className="landing-icon">
            <EmailIcon sx={{ fontSize: "larger" }} />
          </div>
        </div>
        <div className="landing-scroll">
          <div className="landing-icon">
            <ArrowCircleDownIcon />
          </div>
        </div>
        <div className="landing-copyright">
          <div className="copyright-text">© Prabah Kunal Pragyan</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
