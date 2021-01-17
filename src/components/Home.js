import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Progress, Menu } from "antd";
import {
  DatabaseTwoTone,
  DashboardTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";
import { Card, ListGroup, Button } from "react-bootstrap";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import ReactTyped from "react-typed";

const Home = () => {
  const { Meta } = Card;
  return (
    <div className="layout">
      <div className="container-carousel">
        <div className="container">
          <h3 className="text-center encabezado-header">
            <h1 style={{ color: "white" }}>Contrata tu servidor de</h1>
            <ReactTyped
              strings={[
                "Counter Strike 1.6",
                "Counter Strike Global Offensive",
                "Age Of Empires II",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1}
              loop
              smartBackspace
            />
          </h3>
          <h5 className="text-center textos-header">
            <i className="fas fa-check icon-check"></i>
            <span className="span-header">Crea, modifica y configura </span>
            tu propio servidor a gusto
          </h5>
          <h5 className="text-center textos-header">
            <i className="fas fa-check icon-check"></i>Servidores de punta
            <span className="span-header"> con una alta disponibilidad </span>
          </h5>
          <h5 className="text-center textos-header">
            <i className="fas fa-check icon-check"></i> Compra monedas y
            consumilas a medida que utilizas nuestros servicios
          </h5>
          <Link to="#!" style={{ textDecoration: "none" }}>
            <button className="btn btn-header">LEER MÁS</button>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="cards-section__title">¿Por qué elegirnos?</h1>
        <ListGroup.Item className="border-0">
          <Card className="card text-center">
            <DatabaseTwoTone style={{ fontSize: "50px", marginTop: ".8em" }} />
            <Card.Body>
              <Card.Title>Basado en Cloud</Card.Title>
              <Card.Text>
                Aprovechando todos los beneficios de Cloud Computing, brindamos
                el mejor servicio a nivel regional
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card text-center">
            <DashboardTwoTone style={{ fontSize: "50px", marginTop: ".8em" }} />
            <Card.Body>
              <Card.Title>Excelente rendimiento</Card.Title>
              <Card.Text>
                Aprovecha nuestra infraestructura para crear servidores a gusto
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card text-center">
            <RocketTwoTone style={{ fontSize: "50px", marginTop: ".8em" }} />
            <Card.Body>
              <Card.Title>Sin complicaciones</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      </div>
    </div>
  );
};

export default Home;
