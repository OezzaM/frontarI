import React, { useEffect, useState  } from "react";
import { Progress, Button } from "antd";
import { MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import './header.css';
import Sidebarr from "../Sidebar/index";

const Header = () => {

  const [collapsed, setCollapsed ] = useState(false);

  const toggle = () => {

  }

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

  return ( 
    
    <div style={{position: 'sticky', top: '0', zIndex: '999'}}>
    <nav class="container-navbar navbar navbar-expand-lg" id="header">
      
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
              style: {fontSize:'25px', marginRight:'10px'}
            })}
        <h1 id="navbar-logo" class="navbar-text">Octari</h1>
        <button class="navbar-toggler navbar-light" type="button" style={{color:' rgba(0,0,0,.5)', borderColor: 'rgba(0,0,0,.1)'}} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ul">
          <li class="nav-item li"><a href="./index.html" id="navbar-inicio">Inicio</a></li>
          <li class="nav-item li"><a href="#" id="navbar-quienesSomos">Quienes somos</a></li>
          <li class="nav-item li"><a href="#" id="navbar-contacto">Contacto</a></li>
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
   );
}
 
export default Header;