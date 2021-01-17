import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Progress, Button, Menu } from "antd";
import "antd/dist/antd.css";
import "../components/home.css";
import SidebarExampleTransitions from "../shared/Navigation/SideBar";

const LayoutBasic = ({ routes }) => {
  const { Header, Footer, Content, Sider } = Layout;
  const [current, setCurrent] = useState("");
  const [login, setLogin] = useState(true);


  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        if (document.getElementById("header")) {
          document.getElementById("header").style.height = "70px";
          document.getElementById("header").style.backgroundColor = "#f2f2f2";
          document.getElementById("header").style.transition =
            "height 1.2s, background-color 1.2s";
          if (document.getElementById("header-title")) {
            document.getElementById("header-title").style.color = "grey";
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
          if (document.getElementById("header-title")) {
            document.getElementById("header-title").style.color = "white";
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
    <SidebarExampleTransitions>
      <Layout className="layout">
        <Header
          className="header"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
          id="header"
        >
          <div
            style={{ width: 256 }}
            style={{ position: "absolute", top: "0", left: "0" }}
          ></div>
          <Link to="/" onClick={() => setCurrent("HOME")}>
            <h1 className="header-title" id="header-title">
              OCTARI
            </h1>
          </Link>
          <Link to="/admin" className="header-link" id="header-link">
            {" "}
            {login ? "Octavio" : <Button type="primary">Ingresar</Button>}{" "}
          </Link>
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
        </Header>
        <Content style={{ marginTop: "80px" }}>
          <LoadRoutes routes={routes} />
        </Content>

        <Footer className="footer">
          Todos los derechos reservados. OCTARY 2020 &copy;
        </Footer>
      </Layout>
    </SidebarExampleTransitions>
  );
};

const LoadRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default LayoutBasic;
