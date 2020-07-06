import React from 'react';
import { Card, Row, Col } from 'antd';
import "./interests.scss";

import arrow from "../../../sass/assets/img/interest/arrow.png";
import close from "../../../sass/assets/img/interest/close.png";
import next from "../../../sass/assets/img/arrow-next.png";

export function Interests() {

    return (
        <section className="interests">
            <Card className="interests__card">
                <h3>También te puede interesar</h3>
                <Row >
                    <Col xl={12} className="interest-one">
                        <h4>Accumsan urna sit bibendum nunc.</h4>
                        <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper </p>
                        <span>Ver artículo</span>
                        <img src={next} />
                    </Col>
                    <Col xl={6} className="interest-two">
                        <h4>Id consectetur sed purus accumsan.</h4>
                        <span>Ver artículo</span>
                        <img src={next} />
                    </Col>
                    <Col xl={6} className="interest-three">
                        <img src={close} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} className="interest-four">
                        <h4>Id consectetur sed purus accumsan.</h4>
                        <span>Ver artículo</span>
                        <img src={next} />
                    </Col>
                    <Col xl={18} className="interest-five">
                        <h4>Accumsan urna sit bibendum nunc.</h4>
                        <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper </p>
                        <span>Ver artículo</span>
                        <img src={next} />
                    </Col>
                </Row>
                <Row align="middle" justify="center">
                    <button className="button button--secundary">Ver más
                    <img src={arrow} />
                    </button>
                </Row>
            </Card>
        </section >
    )
}
