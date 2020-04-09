import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import supplyarLogo from '../../../assets/images/1.Home/Footer/footerLogo.png';
const footer = ( props ) => (
    <footer className={styles.footer}>
        <Container className={styles.container}>
            <div className={styles.myPadding}>
                <Row>
                    <Col lg={2} md={2} sm={12} xs={12}>
                        <Image src={supplyarLogo} className={styles.footerLogo} />
                    </Col>
                    <Col lg={10} md={10} sm={12} xs={12}>
                        <ul className={styles.listAll}>  
                            <li><Link to="">Terms of Access </Link></li>
                            <li><Link to="">Term of Sale  </Link></li>
                            <li><Link to="">Privacy Policy </Link></li>
                            <li><Link to="">Fraud Alert </Link></li>
                            <li><Link to="">Accessibility Statement </Link></li>
                        </ul>
                        <p className={styles.para}>&copy;&nbsp;2018-2019, shomoy.online, All Rights Reserved</p>
                    </Col>
                </Row>
            </div>
        </Container>
    </footer>
);

export default footer;