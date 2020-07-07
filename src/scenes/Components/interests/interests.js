import React from 'react';
import { Card, Row, Col, Carousel } from 'antd';
import "./interests.scss";

import arrow from "../../../sass/assets/img/interest/arrow.png";
import close from "../../../sass/assets/img/interest/close.png";
import next from "../../../sass/assets/img/arrow-next.png";

import img1 from "../../../sass/assets/img/interest/img1.png";
import img2 from "../../../sass/assets/img/interest/img2.png";
import img3 from "../../../sass/assets/img/interest/img3.png";
import img4 from "../../../sass/assets/img/interest/img4.png";
import img5 from "../../../sass/assets/img/interest/img5.png";

import img1m from "../../../sass/assets/img/interest/img1-mobile.png";
import img2m from "../../../sass/assets/img/interest/img2-mobile.png";
import img3m from "../../../sass/assets/img/interest/img3-mobile.png";
import img4m from "../../../sass/assets/img/interest/img4-mobile.png";

export function Interests() {

    return (
        <section className="interests">
            <Card className="interests__card--desktop">
                <h3>También te puede interesar</h3>
                <Row>
                    <Col xl={14}>
                        <img src={img1} className="h-100 w-100" />
                        <div className="interests__interest w-100 h-100">
                            <Row >
                                <Col>
                                    <h4>Accumsan urna sit bibendum nunc.</h4>
                                </Col>
                                <Col>
                                    <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper </p>
                                </Col>
                                <Row>
                                    <a>Ver artículo
                                        <img src={next} />
                                    </a>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={4} offset={1} >
                        <img src={img2} className="h-100 w-100" />
                        <div className="interests__interest w-100 h-100">
                            <Row>
                                <Col>
                                    <h4>Id consectetur sed purus accumsan.</h4>
                                </Col>
                                <Row>
                                    <a>Ver artículo
                                        <img src={next} />
                                    </a>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={4} offset={1} >
                        <img src={img3} className="h-100 w-100" />
                        <div className="interests--justify w-100 h-100">
                            <Row>
                                <Col>
                                    <img src={close} />
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row justify="space-between" style={{ marginTop: 20 }}>
                    <Col xl={8} >
                        <img src={img4} className="h-100 w-100" />
                        <div className="interests__interest w-100 h-100">
                            <Row>
                                <Col>
                                    <h4>Id consectetur sed purus accumsan.</h4>
                                </Col>
                                <Row>
                                    <a>Ver artículo
                            <img src={next} />
                                    </a>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={15} offset={1}>
                        <img src={img5} className="h-100 w-100" />
                        <div className="interests__interest w-100 h-100">
                            <Row>
                                <Col>
                                    <h4>Accumsan urna sit bibendum nunc.</h4>
                                </Col>
                                <Col>
                                    <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper </p>
                                </Col>
                                <Row>
                                    <a>Ver artículo
                                        <img src={next} />
                                    </a>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row align="middle" justify="center">
                    <button className="button button--secundary">Ver más
                        <img src={arrow} />
                    </button>
                </Row>
            </Card>

            <Card className="interests__card--mobile">
                <h3>También te puede interesar</h3>
                <div>
                    <Carousel>
                        <div>
                            <img src={img1m} />
                        </div>
                        <div>
                            <img src={img2m} />
                        </div>
                        <div>
                            <img src={img3m} />
                        </div>
                        <div>
                            <img src={img4m} />
                        </div>
                    </Carousel>
                </div>
                <div className="button--margin">
                    <button className="button button--secundary">Ver más
                        <img src={arrow} />
                    </button>
                </div>
            </Card>
        </section >

    )


}
