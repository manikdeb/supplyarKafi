import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {  Container, Row, Col, Image } from 'react-bootstrap';

import styles from './TopFooter.module.css';
import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames';

import apple from '../../../assets/images/1.Home/TopFooter/apple.png';
import google from '../../../assets/images/1.Home/TopFooter/google.png';
import facebook from '../../../assets/images/1.Home/TopFooter/facebook.png';
import youtube from '../../../assets/images/1.Home/TopFooter/youtube.png';
import twitter from '../../../assets/images/1.Home/TopFooter/twitter.png';
import inT from '../../../assets/images/1.Home/TopFooter/in.png';
import payment from '../../../assets/images/1.Home/TopFooter/payment.png';

const imgResponsive = className(globalStyles['img-responsive']);


class TopFooter extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} >
                            <Row>
                                <Col lg={3} md={3} sm={6} xs={6} className={styles.sizing} >
                                    <p className={styles.linkTitle} >Company Information</p>
                                    <ul className={styles.firstColumn}>
                                        <li><Link to="aboutus">About us</Link></li>
                                        <li><Link to="contactus">Contact us</Link></li>
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Supplier Overview</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6} className={styles.sizing}>
                                    <p className={styles.linkTitle} >Order Support</p>
                                    <ul className={styles.firstColumn}>
                                        <li><Link to="">Orders</Link></li>
                                        <li><Link to="">Auto-Reorder</Link></li>
                                        <li><Link to="">Returns & Cancellations</Link></li>
                                        <li><Link to="">Guarantee And Warranty</Link></li>
                                        <li><Link to="">Pick up</Link></li>
                                        <li><Link to="">Special Orders</Link></li>
                                    </ul>
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6} className={styles.sizing}>
                                    <p className={styles.linkTitle} >Online Resources</p>
                                    <ul className={styles.firstColumn}>
                                        <li><Link to="">Catalog</Link></li>
                                        <li><Link to="">Know How</Link></li>
                                        <li><Link to="">SupplyLink®</Link></li>
                                        <li><Link to="">Supplier overviews </Link></li>
                                    </ul>
                                </Col>
                                <Col lg={3} md={3} sm={6} xs={6} className={styles.sizing}>
                                    <p className={styles.linkTitle}>Questions? Call Us</p>
                                    <p className={styles.questions}>
                                        <span className={styles.contactShomoy}><b style={{ color: '#cb0a12' }}>Shomoy</b></span>  
                                        +880 195 8147 800
                                    </p>
                                </Col>
                            </Row>
                            <hr style={{borderBottom: 'thin #d7d7d7', width: '100%'}} />
                            <Row style={{ paddingTop: '20px' }}>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <div className={styles.menuOuter}>
                                        <div className={styles.table}>
                                            <ul className={styles.horizontalList}>
                                                <p className={styles.FacilitiesLinkTitle}>Connect with us!</p>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={facebook}  className={imgResponsive} />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={twitter}   className={imgResponsive} />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={inT}   className={imgResponsive} />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={youtube}   className={imgResponsive} />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} >
                                    <div className={styles.menuOuter}>
                                        <div className={styles.table}>
                                            <ul className={styles.horizontalList}>
                                                <p className={styles.FacilitiesLinkTitle}>Download our app!</p>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={apple} className={imgResponsive} style={{ marginLeft: '-3px' }} />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={google} className={imgResponsive}   />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12} >
                                    <div className={styles.menuOuter}>
                                        <div className={styles.table}>
                                            <ul className={styles.horizontalList}>
                                                <p className={styles.FacilitiesLinkTitle}>Payment Methods!</p>
                                                <li>
                                                    <Link to="" target="_blank">
                                                        <Image src={payment} className={imgResponsive} style={{ marginLeft: '-3px' }} />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TopFooter;