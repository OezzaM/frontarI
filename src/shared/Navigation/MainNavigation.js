import React from "react";
import NavLinks from "./NavLinks";
import "bootstrap/dist/css/bootstrap.css";
import SidebarExampleTransitions from "./SideBar";

//import "./MainNavigation.css";

const MainNavigation = (props) => {
  return <NavLinks>{props.children}</NavLinks>;
};

export default MainNavigation;
