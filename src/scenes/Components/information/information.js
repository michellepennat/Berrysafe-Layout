import React from 'react';
import { Card, Carousel, Row, Col } from 'antd';
import "./information.scss";

import Avatar from "../../../sass/assets/img/avatar.png";
import Checked from "../../../sass/assets/img/profile/checked.png";
import Info from "../../../sass/assets/img/profile/information.png";
import Verified from "../../../sass/assets/img/profile/verified.png";
import Instagram from "../../../sass/assets/img/profile/instagram.png";
import Facebook from "../../../sass/assets/img/profile/facebook.png";
import Twitter from "../../../sass/assets/img/profile/twitter.png";
import advisers from "../../../sass/assets/img/profile/advisers.png";
import Marker from "../../../sass/assets/img/profile/marker.png";

import Allianz from "../../../sass/assets/img/profile/allianz.png";
import Ana from "../../../sass/assets/img/profile/ana.png";
import Bnp from "../../../sass/assets/img/profile/bnp.png";
import Gnp from "../../../sass/assets/img/profile/gnp.png";
import Hdi from "../../../sass/assets/img/profile/hdi.png";
import Inbursa from "../../../sass/assets/img/profile/inbursa.png";
import Metlife from "../../../sass/assets/img/profile/metlife.png";
import Qualitas from "../../../sass/assets/img/profile/qualitas.png";
import Sura from "../../../sass/assets/img/profile/sura.png";

export function Information() {

    return (
        <section className="information">
            <Card className="information__cardProfile--desktop">
                <Row>
                    <Col lg={3} xl={4} className="image">
                        <img src={Avatar} />
                        <div className="image-agentLevel">
                            <img className="checked" src={Checked} />
                            <p>Berrymaster</p>
                            <img className="info" src={Info} />
                        </div>
                    </Col>
                    <Col lg={15} xl={13} className="informationAgent">
                        <Col className="informationAgent-name">
                            <h1 >Juan Andrés Ramirez Lopez
                            <img src={Verified} />
                            </h1>
                        </Col>
                        <Col className="informationAgent-data">
                            <p>Asesor Profesional De Seguros</p>
                            <img src={Marker} />
                            <p>Avenida Insurgentes Sur, código 2, Mexico</p>
                        </Col>
                        <Col className="informationAgent-contact">
                            <img src={Instagram} />
                            <img src={Facebook} />
                            <img src={Twitter} />
                        </Col>
                        <Col className="informationAgent-summary">
                            <p>Desde hace 16 años pertenecemos al sector afianzador y asegurador, teniendo como especialidad la intermediación, gestión, asesoría y emisión de garantías como fianzas y seguros de caución...
                                <a>Leer más</a>
                            </p>
                        </Col>
                    </Col>
                    <Col lg={2} xl={4} className="advisers">
                        <img src={advisers} />
                    </Col>
                </Row>
            </Card>

            <Card className="information__cardProfile--mobile">
                <Row>
                    <Col xs={12} sm={12} md={3} className="image">
                        <img src={Avatar} />
                        <div className="image-agentLevel">
                            <img className="checked" src={Checked} />
                            <p>Berrymaster</p>
                            <img className="info" src={Info} />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={3} className="advisers">
                        <img src={advisers} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={22} sm={22} md={22} offset={1} span={1} className="informationAgent">
                        <Col className="informationAgent-name">
                            <h1 >Juan Andrés Ramirez Lopez
                            <img src={Verified} />
                            </h1>
                        </Col>
                        <Col className="informationAgent-data">
                            <p>Asesor Profesional De Seguros</p>
                            <Row>
                                <img src={Marker} />
                                <p>Avenida Insurgentes Sur, código 2, Mexico</p>
                            </Row>
                        </Col>
                        <Col className="informationAgent-summary">
                            <p>Desde hace 16 años pertenecemos al sector afianzador y asegurador, teniendo como especialidad la intermediación, gestión, asesoría y emisión de garantías como fianzas y seguros de caución...
                            </p>
                            <a>Leer más</a>
                        </Col>
                        <Col className="informationAgent-contact">
                            <img src={Instagram} />
                            <img src={Facebook} />
                            <img src={Twitter} />
                        </Col>

                    </Col>
                </Row>

            </Card>

            <Card className="information__cardSponsor">
                <img src={Metlife} />
                <img src={Qualitas} />
                <img src={Gnp} />
                <img src={Hdi} />
                <img src={Ana} />
                <img src={Inbursa} />
                <img src={Allianz} />
                <img src={Bnp} />
                <img src={Sura} />
            </Card>
        </section>
    )
}
