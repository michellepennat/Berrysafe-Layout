import React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { Card, Row, Col } from 'antd';
import "./ubication.scss";

import Instagram from "../../../sass/assets/img/contact/instagram.png";
import Facebook from "../../../sass/assets/img/contact/facebook.png";
import Twitter from "../../../sass/assets/img/contact/twitter.png";
import Avatar from "../../../sass/assets/img/avatar.png";

class Ubications extends React.Component {
    render() {
        return (
            <section className="ubication">
                <Card className="ubication__card">
                    <Map google={this.props.google}
                        initialCenter={{
                            lat: 40.854885,
                            lng: -88.081807
                        }}
                        zoom={15}
                        onClick={this.onMapClicked}
                    />
                    <Row align="middle" justify="center">
                        <div className="ubication-information">
                            <Col>
                                <Row align="middle" style={{ margin: '0 0 21px 24px' }}>
                                    <img className="avatar" src={Avatar} />
                                    <p>Juan Andrés Ramirez Lopez</p>
                                </Row>
                                <Col style={{ margin: '0 0 18px 24px' }}>
                                    <h6>Avenida Insurgentes Sur, código 2 </h6>
                                    <span> Mexico City, CDMX, Mexico</span>
                                </Col>
                                <Row style={{ marginLeft: '24px' }}>
                                    <img className="social-media" src={Instagram} />
                                    <img className="social-media" src={Facebook} />
                                    <img className="social-media" src={Twitter} />
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Card>
            </section >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD_XyPl8VgDJhqi1OeEENulXNdPysk0dH4')
})(Ubications)