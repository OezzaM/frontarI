import React from "react";
import { Card, ListGroup, Col, Row, Container,Accordion, Button } from "react-bootstrap";
import "./CounterStrike16.css";
import logo from '../../../shared/images/portada.png'


const CounterStrike16 = () => {
  return (
    <div>
      <img src={logo} className="w-100"/>
      <Container className="container-prices">
        <h1 class="cards-text">Nuestro planes</h1>
        <Row style={{justifyContent:'space-around'}}>

        <Col xs={8} md={4}>
          <Card className="card-prices">
            <Card.Header className="text-center bg-white">
              <div className="card-header border-bottom-0 bg-transparent pt-4">
                      <h5 className="text-success">PLAN BASICO</h5>
              </div>
              <div class="card-body">
                <h1 class="card-body-price">$299</h1>
                <h5 class="text-muted mt-1" ><small>Taxes per Month</small></h5>
              </div>
            </Card.Header>
            <ListGroup variant="flush" >
              <ListGroup.Item className="hola p-3"><i class="fas fa-male text-success mx-2"></i>12 SLOTS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-venus text-success mx-2"></i>1000 FPS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-gavel text-success mx-2"></i>SOPORTE 24Hs.</ListGroup.Item>
            </ListGroup>
            <Card.Footer className="text-muted"><button class="btn btn-header btn-cards">
              <a href="#" class="text-muted text-uppercase"></a>CONTRATAR</button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={8} md={4}>
          <Card className="card-prices">
            <Card.Header className="text-center bg-white">
              <div class="card-header border-bottom-0 bg-transparent text-success pt-4">
                    <h5 className="text-success font-weight-bold">PLAN PREMIUM</h5>
              </div>
              <div class="card-body">
                <h1 class="card-body-price">$299</h1>
                <h5 class="text-muted mt-1"><small>Taxes per Month</small></h5>
              </div>
            </Card.Header>
            <ListGroup variant="flush" >
              <ListGroup.Item className="hola p-3"><i class="fas fa-male text-success mx-2"></i>12 SLOTS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-venus text-success mx-2"></i>1000 FPS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-gavel text-success mx-2"></i>SOPORTE 24Hs.</ListGroup.Item>
            </ListGroup>
            <Card.Footer className="text-muted"><button class="btn btn-header btn-cards">
              <a href="#" class="text-muted text-uppercase"></a>CONTRATAR</button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={8} md={4}>
          <Card className="card-prices">
            <Card.Header className="text-center bg-white">
              <div class="card-header border-bottom-0 bg-transparent text-success pt-4">
                    <h5 className="text-success">PLAN GOOOOOOOOOD</h5>
              </div>
              <div class="card-body">
                <h1 class="card-body-price">$299</h1>
                <h5 class="text-muted mt-1"><small>Taxes per Month</small></h5>
              </div>
            </Card.Header>
            <ListGroup variant="flush" >
              <ListGroup.Item className="hola p-3"><i class="fas fa-male text-success mx-2"></i>12 SLOTS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-venus text-success mx-2"></i>1000 FPS</ListGroup.Item>
              <ListGroup.Item className="hola p-3"><i class="fas fa-gavel text-success mx-2"></i>SOPORTE 24Hs.</ListGroup.Item>
            </ListGroup>
            <Card.Footer className="text-muted"><button class="btn btn-header btn-cards">
              <a href="#" class="text-muted text-uppercase"></a>CONTRATAR</button>
            </Card.Footer>
          </Card>
        </Col>

    </Row>
      </Container>

      <Container className="container-preguntas-frecuentes">
        <h1 class="cards-text">Preguntas frecuentes</h1>
        <Accordion defaultActiveKey="0">
          <Card className="cards-preguntas-frecuentes">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               ¿Si me compro un servidor voy a ser mas pro?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="cards-preguntas-frecuentes">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
               ¿Puedo ponerle surf?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="cards-preguntas-frecuentes">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
               ¿Como hago para abonar mi servidor con Mercado Pago?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="cards-preguntas-frecuentes">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
              ¿Por qué es mejor contratar un host CS 1.6 que un VPS?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default CounterStrike16;
