import React , { Component } from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import {  Container, Row, Col, Image, Tabs, Tab, Nav } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

import styles from './AboutUs.module.css';

import Banner from '../../assets/images/AboutUs/aboutBanner.png';
import icon_1 from '../../assets/images/AboutUs/1.png';
import icon_2 from '../../assets/images/AboutUs/2.png';
import icon_3 from '../../assets/images/AboutUs/3.png';
import icon_4 from '../../assets/images/AboutUs/4.png';
import icon_5 from '../../assets/images/AboutUs/5.png';
import icon_6 from '../../assets/images/AboutUs/6.png';
import icon_7 from '../../assets/images/AboutUs/7.png';
import icon_8 from '../../assets/images/AboutUs/8.png';

import maaz  from '../../assets/images/AboutUs/maaz.png';
import tashin  from '../../assets/images/AboutUs/tashin.png';
import imad  from '../../assets/images/AboutUs/imad.png';
import safwanSir  from '../../assets/images/AboutUs/safwanSir.png';




class AboutUs  extends Component  {
    constructor() {
        super(...arguments);
        this.state = {
          slidesToShow: 4,
          key: 'home',
        };
    }

    render(){
        return(
            <Container>
                <br/>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing}>
                        <br/>
                        <p className={styles.aboutTitle}>About Us</p>
                        <hr/>
                    </Col>
                </Row>
                <br/>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" style={{ background: '#eee', color: 'black' }} >
                                <Nav.Item>
                                    <Nav.Link eventKey="first" style={{ color: 'black' }}>ABOUT SUPPLYAR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" style={{ color: 'black' }}>WHY CHOOSE SUPPLYAR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" style={{ color: 'black' }}>SUPPLYAR TEAM</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <center>
                                                    <Image src={icon_8} className={styles.banner} />
                                                </center>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Row>
                                                            <Col lg={5} md={5} sm={6} xs={6}>
                                                                <center>
                                                                    <Image src={icon_7} style={{ width: '95%' }} />
                                                                </center>
                                                            </Col>
                                                            <Col lg={7} md={7} sm={6} xs={6}>
                                                                <p className={styles.thirdDivTitle} >SOME INFO ABOUT COMPANY</p>
                                                                <p className={styles.thirdDivPara}>
                                                                    Supplyar uses an enhanced bulk buying system that optimizes sourcing and logistic operations, enabling
                                                                    clients to get the best price for their required products with prompt delivery.
                                                                </p>
                                                                <p className={styles.thirdDivPara}>
                                                                    Using vendor management and logistics software with complex algorithms, Supplyar has been gathering
                                                                    product data and enlisting vendors all over Bangladesh. Our business process is simple, find the
                                                                    requirement of the client, use our proven system to optimize and deliver the product on time at the best
                                                                    price. Our diversified bulk buying product range makes us the one-stop shop for our clients who can
                                                                    outsource all the headaches that goes into procuring their required products at the best value
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                        </Col>
                                        </Row>
                                        <br/><br/><br/>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                        <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_1} />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>FREE 24/7 SUPPORT</p>
                                                                                <hr/>
                                                                                <p>The tough, compact and simple Verte 15 is a minimalist climber's dream come true when you want to count every gram</p>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                    <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_5} />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>NDEPENDED DELIVERY</p>
                                                                                <hr/>
                                                                                <p>We handle shipping, customs clearance and final delivery to your desired destination.</p>
                                                                            </Col>
                                                                    </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                        <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_3} />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>BULK BUYING SOLUTION</p>
                                                                                <hr/>
                                                                                <p>
                                                                                    Supplyar sells bulk buying solution to all businesses in
                                                                                    Bangladesh. Our service enables companies to place an order
                                                                                    online or offline. On confirmation, products are sent directly to
                                                                                    the customer’s desired locations.
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <br/><br/>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                        <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_4}  />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>ARTIFICIAL INTELLIGENCE SOLUTION</p>
                                                                                <hr/>
                                                                                <p>
                                                                                    Does your company need Business Intelligence to help predict
                                                                                    your regular procurements as well as compare the performance of similar products in your industry? Shomoy uses a
                                                                                    complex algorithm to track product performance through its
                                                                                    customer sales that will predict and recommend product based
                                                                                    on industry usage.
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                        <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_2} />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>AWESOME ITEMS</p>
                                                                                <hr/>
                                                                                <p style={{ textAlign: 'justify'}}>
                                                                                    Supplyar offers borderless logistics to its clients. With a list of
                                                                                    over 140 local partners, the company has a huge variety of
                                                                                    product offerings but sometimes companies need specialty
                                                                                    items that are not available in Bangladesh. Supplyar’s Borderless Logistic solution is the answer to companies with this
                                                                                    problem. Bulk imports as well as specialty imports from
                                                                                    countries like China, India, Singapore and other parts of the
                                                                                    world, are provided by Shomoy. 
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <Row>
                                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                                    <Row>
                                                                            <Col lg={3} md={3} sm={12} xs={12}>
                                                                                <Image src={icon_6}  />
                                                                            </Col>
                                                                            <Col lg={9} md={9} sm={12} xs={12}>
                                                                                <p>99.9% HAPPY CLIENTS</p>
                                                                                <hr/>
                                                                                <p>
                                                                                    All our customers are important to us which is why we thrive to
                                                                                    provide a complete 360 service to our clients. Whether you
                                                                                    need consultation or need assistance with any products you
                                                                                    have ordered, our dedicated Relationship Managers are here to
                                                                                    help you. 
                                                                                </p>
                                                                            </Col>
                                                                    </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">

                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12} >
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <p className={styles.teamTitle}>MEET OUR TEAM</p>
                                                        <br/>
                                                        <Row>
                                                            <Col lg={4} md={4} sm={12} xs={12} >
                                                                <div className={styles.container}>
                                                                    <Image src={maaz} className={styles.imgResponsive} />
                                                                    <div className={styles.overlay}>
                                                                        <div className={styles.text}>
                                                                            <p className={styles.memberName}>Mohammad Maaz</p>
                                                                            <p className={styles.memberDesgination}>Chairman</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col lg={4} md={4} sm={12} xs={12} >
                                                                <div className={styles.container}>
                                                                    <Image src={tashin} className={styles.imgResponsive} />
                                                                    <div className={styles.overlay}>
                                                                        <div className={styles.text}>
                                                                            <p className={styles.memberName}>Tahseen Ahmed Khan</p>
                                                                            <p className={styles.memberDesgination}>Managing Director</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col lg={4} md={4} sm={12} xs={12} >
                                                                <div className={styles.container}>
                                                                    <Image src={imad} className={styles.imgResponsive} />
                                                                    <div className={styles.overlay}>
                                                                        <div className={styles.text}>
                                                                            <p className={styles.memberName}>Imaad Chowdhury</p>
                                                                            <p className={styles.memberDesgination}>CEO</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                    </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <br/>
            </Container>
        );
    }
}

export default AboutUs;