import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { DatabaseTwoTone, DashboardTwoTone, RocketTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './home.css'
import ReactTyped from 'react-typed';


const Home = () => {
    const { Meta } = Card;
    return (
        <div>
            <div className="container-carousel">
                <div className="container">
                    <h3 className="text-center encabezado-header">
                        <ReactTyped
                            strings={["Contrata tu servidor de Counter Strike 1.6", "Contrata tu servidor de Counter Strike Global Offensive", "Contrata tu servidor de Farcry"]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                        />
                    </h3>
                    <h5 className="text-center textos-header"><i className="fas fa-check icon-check"></i>Impulsa tu negocio de la forma mas innovadora como lo es con un <span className="span-header">e-commerce.</span></h5>
                    <h5 className="text-center textos-header"><i className="fas fa-check icon-check"></i>Diseñamos tu tienda online para que puedas vender a traves de la web.</h5>
                    <h5 className="text-center textos-header"><i className="fas fa-check icon-check"></i>Ventas y envios <span className="span-header">seguros</span> proporcionados por Mercado Pago.</h5>
                    <Link to="#!" style={{ textDecoration: 'none' }} ><button className="btn btn-header" >LEER MÁS</button></Link>
                </div>
            </div>

            <div className="cards-section container">
                <h1 className="text-center cards-section__title">¿Por qué elegirnos?</h1>
                <div className="row cards-info ">
                    <div className="col-md-4">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<DashboardTwoTone style={{ fontSize: '50px', marginTop: '.8em' }} />}
                        >
                            <Meta title="Europe Street beat" className="text-center" description="www.instagram.com" />
                        </Card>
                    </div>
                    <div className="col-md-4">

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<DatabaseTwoTone style={{ fontSize: '50px', marginTop: '.8em' }} />}
                        >
                            <Meta title="Europe Street beat" className="text-center" description="www.instagram.com" />
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<RocketTwoTone style={{ fontSize: '50px', marginTop: '.8em' }} />}
                        >
                            <Meta title="Europe Street beat" className="text-center" description="www.instagram.com" />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;