import React from 'react';
import {  Row, Col, Image } from 'react-bootstrap';

import styles from '../Categories.module.css';

const category = (props) => (
        <div>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <Image src={props.category.categoryImg}   />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                    <div className={styles.categoriesLink} onClick={props.clicked}>
                        <p>{props.category.categoryName}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );

export default category;