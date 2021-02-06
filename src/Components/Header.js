import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Menu, Image, Container } from "semantic-ui-react";
import GoogleAuth from "../Services/GoogleAuth/GoogleAuth";

const Headers = () => {
  return (
    <>
      <Menu pointing primary>
        <div className="item">
          <Image src={logo} width="80px" />
        </div>

        <Menu.Menu position="right" inverted>
          <Link to="/" className="item" inverted>
            Home
          </Link>
          <Link to="/streamlist" className="item" inverted>
            All Streams
          </Link>

          <div className="item" inverted>
            <GoogleAuth />
          </div>
        </Menu.Menu>
      </Menu>
    </>
  );
};
export default Headers;
