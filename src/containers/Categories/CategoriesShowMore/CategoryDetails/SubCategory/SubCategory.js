import React from 'react';
import {  Row, Col, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import styles from './SubCategory.module.css';

const subCategory = (props) => {
    return (
        <div>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <center>
                        <Image src={ 'http://localhost:3000/' + props.subCategory.subCategoryImg} />
                    </center>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                    <div onClick={props.clicked}>
                        <p className={styles.categoriesLink}>{props.subCategory.SubCategoryName}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default withRouter(subCategory);

