import React from "react";
import { Header, Segment, Menu } from "semantic-ui-react";
import logo from "../asserts/logo.png";

const NavBar = () => (
  <Segment style={{ margin: 0 }}>
    <Header as="h3" textAlign="center">
      <img src={logo} style={{ width: 140, height: 30 }} />
    </Header>
    <Header as="h3" textAlign="center">
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li
          style={{
            listStyleType: "none",
            marginRight: 50,
            padding: 5,
          }}
        >
          <a href="">How it works</a>
        </li>
        <li style={{ listStyleType: "none", marginRight: 50, padding: 5 }}>
          <a href="">About Us</a>
        </li>
        <li style={{ listStyleType: "none", marginRight: 50, padding: 5 }}>
          <a href="">FAQ</a>
        </li>
        <li
          style={{
            listStyleType: "none",
            marginRight: 50,
            border: "1px solid black",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <a href="">Book Scan</a>
        </li>
      </ul>
    </Header>
  </Segment>
);

export default NavBar;
