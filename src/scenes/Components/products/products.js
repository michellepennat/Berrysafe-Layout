import React from 'react';
import { Card, Button, Row, Col, Divider, Carousel } from 'antd';
import "./products.scss";

import img1 from "../../../sass/assets/img/product/img1.png";
import img2 from "../../../sass/assets/img/product/img2.png";
import img3 from "../../../sass/assets/img/product/img3.png";
import img4 from "../../../sass/assets/img/product/img4.png";
import img5 from "../../../sass/assets/img/product/img5.png";

import img1m from "../../../sass/assets/img/product/img1-mobile.png";
import img2m from "../../../sass/assets/img/product/img2-mobile.png";
import img3m from "../../../sass/assets/img/product/img3-mobile.png";
import img4m from "../../../sass/assets/img/product/img4-mobile.png";

import picon1 from "../../../sass/assets/img/product/icon1.png";
import sponsor1 from "../../../sass/assets/img/product/sponsor1.png";
import sponsor2 from "../../../sass/assets/img/product/sponsor2.png";
import sponsor3 from "../../../sass/assets/img/product/sponsor3.png";
import back from "../../../sass/assets/img/product/back.png";
import arrow from "../../../sass/assets/img/product/arrow.png";

import icon1 from "../../../sass/assets/img/insurance/icon1.png";
import icon2 from "../../../sass/assets/img/insurance/icon2.png";
import icon3 from "../../../sass/assets/img/insurance/icon3.png";
import icon4 from "../../../sass/assets/img/insurance/icon4.png";

import icon1m from "../../../sass/assets/img/product/icon1-mobile.png";
import icon2m from "../../../sass/assets/img/product/icon2-mobile.png";
import icon3m from "../../../sass/assets/img/product/icon3-mobile.png";
import icon4m from "../../../sass/assets/img/product/icon4-mobile.png";

import imge1 from "../../../sass/assets/img/insurance/img1.png";
import imge2 from "../../../sass/assets/img/insurance/img2.png";
import imge3 from "../../../sass/assets/img/insurance/img3.png";

import icon5 from "../../../sass/assets/img/insurance/icon5.png";
import icon6 from "../../../sass/assets/img/insurance/icon6.png";
import icon7 from "../../../sass/assets/img/insurance/icon7.png";

import contact from "../../../sass/assets/img/contact.png";
import next from "../../../sass/assets/img/arrow-next.png";

export function Products() {

    return (
        <section className="products">
            <Card className="products__card--desktop">
                <div className="products--margin">
                    <h3>Productos</h3>
                    <Row>
                        <Col xl={16}>
                            <img src={img1} className="w-100 h-100" />
                            <Row className="principal__insurance w-100 h-100">
                                <Row>
                                    <Col xs={18} className="info">
                                        <div className="info-title">
                                            <h4>Seguro de Autos</h4>
                                            <img src={picon1} />
                                        </div>
                                        <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper nisl lectus facilisis erat maecenas. Blandit in vitae commodo tellus volutpat sed.</p>
                                        <button className="button button--secundary">
                                            <img className="icon" src={contact} />
                                    Quiero saber más de este producto</button>
                                    </Col>
                                    <Col xs={6} className="arrow">
                                        <img src={arrow} />
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xl={8}>
                            <Row className="others" >
                                <Col offset={1} xl={10} >
                                    <img src={img2} className="w-100 h-100" />
                                    <div className="others-family">
                                        <h6>Familiar</h6>
                                    </div>
                                </Col>
                                <Col offset={1} xl={10}>
                                    <img src={img3} className="w-100 h-100" />
                                    <div className="others-health">
                                        <h6>Salud</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="others others--margin">
                                <Col offset={1} xl={10} >
                                    <img src={img4} className="w-100 h-100" />
                                    <div className="others-life">
                                        <h6>Vida</h6>
                                    </div>
                                </Col>
                                <Col offset={1} xl={10}  >
                                    <img src={img5} className="w-100 h-100" />
                                    <div className="others-travel">
                                        <h6>Viaje</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={16} className="sponsor">
                            <p>+10 Años vendiendo seguros de Autos</p>
                            <div className="sponsor-img">
                                <span>Patrocinado por</span>
                                <img src={sponsor1} />
                                <img src={sponsor2} />
                            </div>
                        </Col>
                        <Col xl={8} className="sponsor-button">
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

            <Card className="products__card--mobile">
                <div className="banner">
                    <h2>Productos exclusivos Berrysafe</h2>
                    <Carousel >
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
                <Row className="sponsor--margin">
                    <Col xs={24} sm={24} xl={24} className="sponsor">
                        <p>+10 Años vendiendo seguros de Autos</p>
                        <div className="sponsor-img">
                            <span>Patrocinado por</span>
                            <img src={sponsor1} />
                            <img src={sponsor3} />
                        </div>
                    </Col>
                </Row>
                <Row align="middle" justify="center">
                    <button className="button button--secundary">
                        <img className="icon" src={contact} />
                                    Quiero saber más de este producto</button>
                </Row>
                <Col xs={24} sm={24}>
                    <h3>Otros productos</h3>
                </Col>
                <Row className="others__product">
                    <Col className="others__product--margin" xs={24} sm={24}>
                        <img src={imge1} />
                        <div className="content">
                            <h5>Seguro para mascotas</h5>
                            <img src={icon5} />
                        </div>
                    </Col>
                    <Col className="others__product--margin" xs={24} sm={24}>
                        <img src={imge2} />
                        <div className="content">
                            <h5>Seguro de Viajes</h5>
                            <img src={icon6} />
                        </div>
                    </Col>
                    <Col className="others__product--margin" xs={24} sm={24}>
                        <img src={imge3} />
                        <div className="content">
                            <h5>Seguro de Hogar</h5>
                            <img src={icon7} />
                        </div>
                    </Col>
                    <Col className="others__product--margin" xs={24} sm={24}>
                        <button className="button button--secundary">
                                   Ver más...
                        </button>
                    </Col>
                </Row>
            </Card>
        </section >
    )
}