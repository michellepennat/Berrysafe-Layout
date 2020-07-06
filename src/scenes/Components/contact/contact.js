import React from 'react';
import { Card, Divider, Row } from 'antd';
import "./contact.scss";

import Whatsapp from "../../../sass/assets/img/contact/whatsapp.png";
import Call from "../../../sass/assets/img/contact/call.png";
import Videocall from "../../../sass/assets/img/contact/videocall.png";
import msj from "../../../sass/assets/img/contact/msj.png";
import tips from "../../../sass/assets/img/tips.png";

export function Contact() {

    return (
        <section className="contact">
            <Card className="contact__card">
                <div className="content-contactMe">
                    <h2>¡Contáctame ya!</h2>
                    <button>
                        <img className="whatsapp" src={Whatsapp} />
                        Escríbeme por Whatsapp
                    </button>
                </div>
                <div className="content-status">
                    <Row justify="center" align="middle">
                        <div className="status"></div>
                        <h2>¡Estoy disponible!</h2>
                        <img className="videocall" src={Videocall} />
                        <Divider orientation="center" type="vertical" />
                        <img className="call" src={Call} />
                    </Row>
                    <a>¿Quieres agendar una llamada?</a>
                </div>
                <div className="content-email">
                    <Row style={{ margin:'26px 0 16px 0' }} justify="center" >
                        <h2>Escríbeme un correo</h2>
                        <button>
                            <img className="msj" src={msj} />
                        </button>
                    </Row>
                    <Divider />
                    <p> Vestibulum, amet, urna sit lorem. Tempor malesuada eleifend sodales quis et dui pulvinar. Urna, velit volutpat, nunc, augue scelerisque suscipit. Maecenas amet nibh sed faucibus blandit donec sed penatibus. Fringilla ultrices nisl adipiscing leo placerat. Non semper malesuada</p>
                    <img className="tips" src={tips} />
                </div>
            </Card>
        </section >
    )
}
