import React from "react";
import { Link } from "react-router-dom";
import { Button as Boton } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href}>
        <Boton
          variant={props.estilo}
          disabled={props.disabled}
          block={props.block}
        >
          {props.children}
        </Boton>
      </a>
    );
  }
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact}>
        <Boton
          variant={props.estilo}
          disabled={props.disabled}
          block={props.block}
        >
          {props.children}
        </Boton>
      </Link>
    );
  }
  return (
    <Boton
      onClick={props.onClick}
      variant={props.estilo}
      disabled={props.disabled}
      block={props.block}
      type={props.type}
    >
      {props.children}
    </Boton>
  );
};

export default Button;
