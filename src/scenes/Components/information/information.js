import React from 'react';
import { Card, Carousel, Row } from 'antd';
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
            <Card className="information__cardProfile">
                <div className="image">
                    <img src={Avatar} />
                    <div className="image-agentLevel">
                        <img className="checked" src={Checked} />
                        <p>Berrymaster</p>
                        <img className="info" src={Info} />
                    </div>
                </div>
                <div className="informationAgent">
                    <div className="informationAgent-name">
                        <h1>Juan Andrés Ramirez Lopez</h1>
                        <img src={Verified} />
                    </div>
                    <div className="informationAgent-data">
                        <p>Asesor Profesional De Seguros</p>
                        <img src={Marker} />
                        <p>Avenida Insurgentes Sur, código 2, Mexico</p>
                    </div>
                    <div className="informationAgent-contact">
                        <img src={Instagram} />
                        <img src={Facebook} />
                        <img src={Twitter} />
                    </div>
                    <div className="informationAgent-summary">
                        <p>Desde hace 16 años pertenecemos al sector afianzador y asegurador, teniendo como especialidad la intermediación, gestión, asesoría y emisión de garantías como fianzas y seguros de caución...
                        <a>Leer más</a>
                        </p>
                    </div>
                </div>
                <div className="advisers">
                    <img src={advisers} />
                </div>
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
