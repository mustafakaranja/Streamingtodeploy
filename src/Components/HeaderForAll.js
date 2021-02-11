import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Menu, Image, Container } from "semantic-ui-react";
import GoogleAuth from "../Services/GoogleAuth/GoogleAuth";

const HeaderForAll = () => {
  return (
    <>
      <Menu pointing primary>
        <Container>
          <div className="item">
            <Image src={logo} width="80px" />
          </div>

          <Menu.Menu position="right">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/Streamlist" className="item">
              All Streams
            </Link>

            <div className="item">
              <GoogleAuth />
            </div>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
};
export default HeaderForAll;
