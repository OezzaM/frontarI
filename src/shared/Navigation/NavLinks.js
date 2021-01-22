import React, { useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ExpandContext } from "../context/expand-context";
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Dropdown,
} from "semantic-ui-react";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import { API_ENDPOINT } from "../Util/API_CONSTANTS";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";
import "./NavLink.css";

const NavLinks = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(API_ENDPOINT.USER_INFO);
        console.log("responseData");
        console.log(responseData);
        if (!_.isEmpty(responseData)) {
          auth.asignUser(responseData);
          auth.login();
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [sendRequest]);

  const _handleSignInClick = () => {
    window.open(API_ENDPOINT.USER_LOGIN, "_self");
  };

  const _handleLogoutClick = () => {
    auth.logout();
    window.open(API_ENDPOINT.USER_LOGOUT, "_self");
  };

  function exampleReducer(state, action) {
    switch (action.type) {
      case "CHANGE_ANIMATION":
        return {
          ...state,
          animation: action.animation,
          visible: !state.visible,
        };
      case "CHANGE_DIMMED":
        return { ...state, dimmed: action.dimmed };
      case "CHANGE_DIRECTION":
        return { ...state, direction: action.direction, visible: false };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: false,
  });

  const { animation, dimmed, direction, visible } = state;

  const buttonHandler = () => {
    dispatch({ type: "CHANGE_ANIMATION", animation: "push" });
    console.log(state);
  };
  //
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Button onClick={buttonHandler}>Menu</Button>
        <Link to="/" className="navbar-brand pt-0">
          ATI App
        </Link>
        <NavLink to="/servers" exact className="nav-link all-upper">
          Servidores
        </NavLink>
        <NavLink to="/test" exact className="nav-link all-upper">
          Auth
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav>
            {auth.isLoggedIn && (
              <Nav.Link>
                <NavLink to="/create" className="nav-link all-upper">
                  Crear Sala
                </NavLink>
              </Nav.Link>
            )}
            {!auth.isLoggedIn && (
              <Nav.Link>
                <Button
                  onClick={_handleSignInClick}
                  className="nav-link all-upper"
                >
                  Ingresar
                </Button>
              </Nav.Link>
            )}
            {auth.isLoggedIn && (
              <Nav.Link>
                <Button
                  onClick={_handleLogoutClick}
                  className="nav-link all-upper"
                >
                  Salir
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
        <Sidebar
          as={Menu}
          animation={animation}
          direction={direction}
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
        >
          {/* <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item> */}
          {/* <Dropdown item text="Counter Strike">
            <Dropdown.Menu>
              <Dropdown.Item icon="edit" text="1.6 Steam" />
              <Dropdown.Item icon="edit" text="1.6 No Steam" />
              <Dropdown.Item icon="edit" text="Gobal Offensive" />
            </Dropdown.Menu>
          </Dropdown> */}
          <Menu.Item as="a">
            <Link to="/counterStrike16">Counter Strike</Link>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={dimmed && visible}>
          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default NavLinks;
