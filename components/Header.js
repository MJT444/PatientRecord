import React, { Component } from "react";
import { Menu, button } from "semantic-ui-react";
import { Link } from "../routes";
// import web3 from "../ethereum/web3";

const Header = () => {
  return (
    <Menu style={{ paddingTop: "10px", backgroundColor: "#ADD8E6" }}>
      <Link route="/">
        <a className="item">HealthRecord</a>
      </Link>
      <Link route="/dashboard">
        <a className="item">Dashboard</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/new">
          <a className="item">Register</a>
        </Link>
        <Link route="/allRecord">
          <a className="item">Record List</a>
        </Link>
      </Menu.Menu>
      {/* <Menu.Menu position="left">
        <Link route="/new">
          <a className="item">New</a>
        </Link>
      </Menu.Menu>
      <Menu.Menu position="left">
        <Link route="/allRecord">
          <a className="item">View</a>
        </Link>
      </Menu.Menu> */}
    </Menu>
  );
};

export default Header;
