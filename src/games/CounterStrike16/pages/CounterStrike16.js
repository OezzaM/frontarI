import React from "react";
import { Carousel } from "react-bootstrap";
import "./CounterStrike16.css";

const CounterStrike16 = () => {
  return (
    <div className="home">
      <Carousel className="w-75 h-50 pb-4 m-auto">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-249-de_aztec.jpg"
            alt="aztec"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-236-de_inferno-2.jpg"
            alt="inferno"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-109-de_dust2-3.jpg"
            alt="dust2"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="aboutus">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nulla
          ipsum maiores corrupti aliquid soluta cupiditate vel voluptate
          mollitia assumenda, asperiores aspernatur sint quia quasi, excepturi
          ipsam impedit incidunt praesentium?
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit
          mollitia quisquam quos temporibus aliquam est repudiandae, odit
          impedit sunt veniam minus reiciendis distinctio amet possimus facere
          animi explicabo expedita.
        </p>
      </div>
      <div className="benefits">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nulla
          ipsum maiores corrupti aliquid soluta cupiditate vel voluptate
          mollitia assumenda, asperiores aspernatur sint quia quasi, excepturi
          ipsam impedit incidunt praesentium?
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit
          mollitia quisquam quos temporibus aliquam est repudiandae, odit
          impedit sunt veniam minus reiciendis distinctio amet possimus facere
          animi explicabo expedita.
        </p>
      </div>
    </div>
  );
};

export default CounterStrike16;
