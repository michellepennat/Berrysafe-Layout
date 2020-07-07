import React from 'react';
import { Layout, Card, Button, Rate, Slider, Row, Col, Divider } from 'antd';
import "./ratings.scss";

import star from "../../../sass/assets/img/star.png";
import arrow from "../../../sass/assets/img/arrow.png";
import next from "../../../sass/assets/img/arrow-next.png";

const reviews =
    [
        {
            "name": "Milena Gutierrez",
            "date": "25 de Julio, 2020",
            "rate": 5,
            "comment": "Tortor est et vivamus in. Malesuada sapien montes, arcu, velit. Id morbi vulputate nibh ut dictum neque.",
        },
        {
            "name": "Jordan Rolón",
            "date": "25 de Octubre, 2020",
            "rate": 3,
            "comment": "Laoreet natoque velit et dolor lacus, viverra aliquam urna. Lectus sit venenatis vitae enim. Enim felis",

        }
    ]

export function Ratings() {

    return (
        <section className="ratings">
            <Card className="ratings__card">
                <h3>Calificaciones de Usuarios</h3>
                <Row align="middle" gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="summary">
                            <div className="summary__average">
                                <p>128 calificaciones</p>
                                <h1>4.6</h1>
                                <Rate allowHalf defaultValue={4.6} disabled />
                            </div>
                            <div className="summary__scopes">
                                <div className="scope">
                                    <p>5</p>
                                    <img src={star} />
                                    <Slider defaultValue={93} />
                                    <p>93</p>
                                </div>
                                <div className="scope">
                                    <p>4</p>
                                    <img src={star} />
                                    <Slider defaultValue={25} />
                                    <p>25</p>
                                </div>
                                <div className="scope">
                                    <p>3</p>
                                    <img src={star} />
                                    <Slider defaultValue={10} />
                                    <p>10</p>
                                </div>
                                <div className="scope">
                                    <p>2</p>
                                    <img src={star} />
                                    <Slider defaultValue={0} />
                                    <p>0</p>
                                </div>
                                <div className="scope">
                                    <p>1</p>
                                    <img src={star} />
                                    <Slider defaultValue={0} />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <button className="button button--secundary">Calificar agente</button>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="reviews">
                            <Row align="middle" justify="end">
                                <h5>Mejor y peor calificación</h5>
                                <img src={arrow} />
                            </Row>
                            {reviews.map((review, i) => (
                                <div key={i} className="reviews__review">
                                    <Row>
                                        <Col xs={12} md={14} xl={14}>
                                            <h4>{review.name}</h4>
                                            <h6>{review.date}</h6>
                                        </Col>
                                        <Col xs={12} md={10} xl={10}>
                                            <Rate value={review.rate} disabled />
                                        </Col>
                                    </Row>
                                    <p>
                                        <span className="quote quote--left">"</span>
                                        {review.comment}
                                        <span className="quote quote--right">"</span>
                                    </p>
                                    <Row align="middle" justify="end">
                                        <h5>Ver más calificaciones</h5>
                                        <img src={next} />
                                    </Row>
                                    {i < reviews.length - 1 &&
                                        <Divider className="divider" />
                                    }
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card>
        </section>
    )
}
