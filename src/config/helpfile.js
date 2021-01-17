import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Progress, Button, Menu, Card } from "antd";
import {
  DatabaseTwoTone,
  DashboardTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";
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
        <h1 className="cards-section__title">
          ¿Por qué elegirnos?
        </h1>
        <div className="cards-section">
          <div className="col-md-4">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <DashboardTwoTone
                  style={{ fontSize: "50px", marginTop: ".8em" }}
                />
              }
            >
              <Meta
                title="Excelente rendimiento"
                className="text-center"
                description="Aprovecha nuestra infraestructura para crear servidores a gusto"
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <DatabaseTwoTone
                  style={{ fontSize: "50px", marginTop: ".8em" }}
                />
              }
            >
              <Meta
                title="Basado en Cloud"
                className="text-center"
                description="Aprovechando todos los beneficios de Cloud Computing, brindamos el mejor servicio a nivel regional"
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <RocketTwoTone
                  style={{ fontSize: "50px", marginTop: ".8em" }}
                />
              }
            >
              <Meta
                title="Sin complicaciones"
                className="text-center"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
