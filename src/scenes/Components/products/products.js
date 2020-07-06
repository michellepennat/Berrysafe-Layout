import React from 'react';
import { Card, Button, Row, Col, Divider } from 'antd';
import "./products.scss";

import img1 from "../../../sass/assets/img/product/img1.png";
import picon1 from "../../../sass/assets/img/product/icon1.png";
import sponsor1 from "../../../sass/assets/img/product/sponsor1.png";
import sponsor2 from "../../../sass/assets/img/product/sponsor2.png";
import back from "../../../sass/assets/img/product/back.png";
import arrow from "../../../sass/assets/img/product/arrow.png";

import icon1 from "../../../sass/assets/img/insurance/icon1.png";
import icon2 from "../../../sass/assets/img/insurance/icon2.png";
import icon3 from "../../../sass/assets/img/insurance/icon3.png";
import icon4 from "../../../sass/assets/img/insurance/icon4.png";

import contact from "../../../sass/assets/img/contact.png";

export function Products() {

    return (
        <section className="products">
            <Card className="products__card">
                <div className="card--padding">
                    <h3 className="title">Productos</h3>
                    <Row>
                        <Col xl={16}>
                            <div className="imgInfo-information">
                                <div className="insurance">
                                    <div className="insurance-title">
                                        <h4>Seguro de Autos</h4>
                                        <img src={picon1} />
                                    </div>
                                    <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper nisl lectus facilisis erat maecenas. Blandit in vitae commodo tellus volutpat sed.</p>
                                    <button className="button button--secundary">
                                        <img className="icon" src={contact} />
                                    Quiero saber más de este producto</button>
                                </div>
                                <div className="insurance-icon">
                                    <img src={arrow} />
                                </div>
                            </div>
                        </Col>
                        <Col xl={7} offset={1} >
                            <Row gutter={[16, 0]}>
                                <Col xl={12} >
                                    <div className="product-family">
                                        <div className="product-content">
                                            <h6>Familiar</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12} >
                                    <div className="product-health">
                                        <div className="product-content">
                                            <h6>Salud</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '8px' }} gutter={[16, 0]}>
                                <Col xl={12} >
                                    <div className="product-life">
                                        <div className="product-content">
                                            <h6>Vida</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12} >
                                    <div className="product-travel">
                                        <div className="product-content">
                                            <h6>Viaje</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col xl={16} className="sponsor">
                            <p>+10 Años vendiendo seguros de Autos</p>
                            <div className="sponsor-img">
                                <span>Patrocinado por</span>
                                <img src={sponsor1} />
                                <img src={sponsor2} />
                            </div>
                        </Col>
                        <Col xl={7} offset={1} className="sponsor-button">
                            <button className="button button--primary">Ver más...</button>
                        </Col>
                    </Row>
                </div>
                <div className="products__cardInformation">
                    <Row align="middle" justify="center" gutter={[24, 24]}>
                        <Col xl={1}>
                            <img className="back" src={back} />
                        </Col>
                        <Col xl={7}>
                            <p className="title title--active">Seguro de Autos Clásico</p>
                        </Col>
                        <Col xl={7}>
                            <p className="title title--disabled">Seguro de Autos Básico</p>
                        </Col>
                        <Col xl={7}>
                            <p className="title title--disabled">Seguro de Autos Global</p>
                        </Col>
                    </Row>
                    <div className="divider--padding">
                        <Divider className="divider" />
                    </div>
                    <Row style={{ padding: '10px 35px 0 35px' }} gutter={[0, 24]}>
                        <Col xl={24}>
                            <h3>Seguro de Autos Clásico</h3>
                        </Col>
                        <Col xl={24}>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </Col>
                        <Col xl={24}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis. Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                        </Col>
                        <Col xl={24}>
                            <h3>Purus libero dictumst lorem</h3>
                        </Col>
                        <Row style={{ marginTop: '8px' }} gutter={[32, 48]}>
                            <Col xl={12} className="options">
                                <img src={icon1} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dignissim a sagittis vestibulum, duis.</p>
                            </Col>
                            <Col xl={12} className="options">
                                <img src={icon2} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dignissim a sagittis vestibulum, duis.</p>
                            </Col>
                        </Row>
                        <Row gutter={[32, 48]}>
                            <Col xl={12} className="options">
                                <img src={icon3} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dignissim a sagittis vestibulum, duis.</p>
                            </Col>
                            <Col xl={12} className="options">
                                <img src={icon4} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dignissim a sagittis vestibulum, duis.</p>
                            </Col>
                        </Row>
                        <Row>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis. Aliquet cursus proin gravida ut elementum volutpat nunc,</p>
                        </Row>
                    </Row>
                    <Row align="middle" justify="center">
                        <button className="button button--secundary">
                            <img className="icon" src={contact} />Quiero saber más de este producto
                        </button>
                    </Row>
                </div>
            </Card>
        </section >
    )
}