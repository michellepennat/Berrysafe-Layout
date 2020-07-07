import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Information } from './Components/information/information';
import { Products } from './Components/products/products';
import { Ratings } from './Components/ratings/ratings';
import { Interests } from './Components/interests/interests';

import Logo from "../sass/assets/img/logo.png";
import Ubication from './Components/ubication/ubication';
import { Contact } from './Components/contact/contact';

export function Principal() {

    return (
        <div>
            <header className="header">
                <div className="header__img">
                    <img src={Logo} />
                </div>
                <div className="header__information">
                    <a>¿Qué es Berrysafe?</a>
                </div>
            </header>
            <div className="content">
                <button className="button--fixed">¡Contáctame ya!</button>
            </div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16} xl={15} xxl={15}>
                    <Information />
                    <Products />
                    <Ratings />
                    <Interests />
                    <Ubication />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={7}>
                    <Contact />
                </Col>
            </Row>
        </div>
    )
}
