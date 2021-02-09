import React, { useEffect, useState } from "react";
import { Progress, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./header.css";
import Sidebarr from "../Sidebar/index";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {};

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        if (document.getElementById("header")) {
          document.getElementById("header").style.height = "70px";
          document.getElementById("header").style.backgroundColor = "#f2f2f2";
          document.getElementById("header").style.transition =
            "height 1.2s, background-color 1.2s";
          if (document.getElementById("navbar-logo")) {
            document.getElementById("navbar-logo").style.color = "grey";
          }
          if (document.getElementById("header-link")) {
            document.getElementById("header-link").style.color = "grey";
          }
          if (document.getElementById("header-servers")) {
            document.getElementById("header-servers").style.color = "grey";
          }
          if (document.getElementById("hola")) {
            document.getElementById("hola").style.color = "grey";
          }
        }
      } else {
        if (document.getElementById("header")) {
          document.getElementById("header").style.height = "80px";
          document.getElementById("header").style.backgroundColor =
            "transparent";
          document.getElementById("header").style.transition =
            "height 1.2s, background-color 1.2s";
          if (document.getElementById("navbar-logo")) {
            document.getElementById("navbar-logo").style.color = "white";
          }
          if (document.getElementById("header-link")) {
            document.getElementById("header-link").style.color = "white";
          }
          if (document.getElementById("header-servers")) {
            document.getElementById("header-servers").style.color = "white";
          }
          if (document.getElementById("hola")) {
            document.getElementById("hola").style.color = "white";
          }
        }
      }
    };

    let progressBar = document.getElementById("progress");
    function ScrollProgressBar() {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;

      let windowHeight = scrollHeight - clientHeight;
      let porcentaje = (scrollTop / windowHeight) * 100;

      progressBar.style.width = porcentaje + "%";
    }
    window.addEventListener("scroll", ScrollProgressBar);
  }, []);

  //SIDEBAR NAZI
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
  // SIDEBAR NAZI
  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "999" }}>
        <nav class="container-navbar navbar navbar-expand-lg" id="header">
          <Button onClick={buttonHandler}>
            <i class="outdent icon" />
          </Button>

          <h1 id="navbar-logo" class="navbar-text">
            Octari
          </h1>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ul">
              <li class="nav-item li">
                <a href="./index.html" id="navbar-inicio">
                  Inicio
                </a>
              </li>
              <li class="nav-item li">
                <a href="#" id="navbar-quienesSomos">
                  Quienes somos
                </a>
              </li>
              <li class="nav-item li">
                <a href="#" id="navbar-contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Progress
          id="progress"
          percent={100}
          size="small"
          status="exception"
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            marginBottom: "-5px",
            width: "0",
          }}
          showInfo={false}
        />
      </div>
      <div>
        {/* <Button onClick={buttonHandler}>Test</Button> */}

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
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          {/* <Sidebar.Pusher dimmed={dimmed && visible}> */}
          {props.children}
          {/* </Sidebar.Pusher> */}
        </Sidebar.Pushable>
      </div>
    </div>
  );
};

export default Header;
