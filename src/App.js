import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/";
import Footer from './components/Footer';
import Header from './components/Header';
import MainNavigation from "./shared/Navigation/MainNavigation";

import ServersCreated from "./games/CounterStrike16/pages/ServersCreated";
import Formulario from "./games/CounterStrike16/pages/Formulario";
import ServerInfo from "./games/CounterStrike16/pages/ServerInfo";

import CounterStrike from "./games/CounterStrike16/pages/CounterStrike16";
import { AuthContext } from "./shared/context/auth-context";
import { useHttpClient } from "./shared/hooks/http-hook";
import AuthForm from "./user/pages/AuthForm";
import "./App.css";
import { Sidebar } from "semantic-ui-react";
const App = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const asignUser = useCallback((usuario) => {
    setUser(usuario);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/counterStrike16" exact>
          <CounterStrike />
        </Route>
        <Route path="/servers" exact>
          <ServersCreated />
        </Route>
        <Route path="/create" exact>
          <Formulario />
        </Route>
        <Route path="/test" exact>
          <AuthForm />
        </Route>
        <Route path="/:serverId">
          <ServerInfo />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/counterStrike16" exact>
          <CounterStrike />
        </Route>
        <Route path="/servers" exact>
          <ServersCreated />
        </Route>
        <Route path="/create" exact>
          <Formulario />
        </Route>
        <Route path="/test" exact>
          <AuthForm />
        </Route>
        <Route path="/:serverId">
          <ServerInfo />
        </Route>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        user: user,
        asignUser: asignUser,
      }}
    >
      <Router>
      <Header />
        {routes}
      </Router>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;
