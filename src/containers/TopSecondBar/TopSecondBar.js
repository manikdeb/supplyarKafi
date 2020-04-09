import React, { Component } from 'react';
import {  Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './TopSecondBar.module.css';

import Logo from './Logo/Logo';
import AllProducts from './AllProducts/AllProducts';
import Search from './Search/Search';

import CartPic from '../../assets/images/1.Home/TopSecondNavbar/cart.png';

class TopSecondBar extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: '8px 0px' }}> 
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={3} md={3} sm={12} xs={12} >
                                    <Logo />
                                </Col>
                                <Col lg={1} md={1} sm={12} xs={12} >
                                    <AllProducts />
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} className={styles.sizing} >
                                    <div className={ styles.myLeft} >
                                        <Search />
                                    </div>
                                </Col>
                                <Col lg={2} md={2} sm={12} xs={12}  className={styles.sizing} >
                                    <ul className={styles.cart} >
                                        <li>
                                            <Link to="">
                                                <Image src={CartPic} /> &nbsp; <span> Cart </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default TopSecondBar;