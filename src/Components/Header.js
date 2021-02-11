import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Menu, Image, Container, Header, Icon } from "semantic-ui-react";
import GoogleAuth from "../Services/GoogleAuth/GoogleAuth";
import PropTypes from "prop-types";
import "../AllCss/header.css";
import { Button } from "bootstrap";

const Headers = () => {
  return (
    <div className="header-container">
      <div className="navebar">
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/" className="Link">
                {" "}
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Streamlist" className="Link">
                {" "}
                All Streams
              </Link>
            </li>
            <li>
              <GoogleAuth />
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="col">
          <h1> Stream Now!</h1>
        </div>
        <div className="col">
          <div className="card card1 ">
            <h5> Gaming</h5>
          </div>
          <div className="card card2">
            <h5> Meeting stream</h5>
          </div>
          <div className="card card3">
            <h5> Movies streams</h5>
          </div>
          <div className="card card4">
            <h5> Coding streams</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headers;
