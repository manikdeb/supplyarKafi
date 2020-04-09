import React from 'react';
import { Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import styles from './Product.module.css';

const allProducts = (props) => {
    return (
        <Col lg={5} md={5} sm={12} xs={12} className={styles.sizing} >
            <div className={styles.allProductsCardBody} onClick={props.clicked}> 
                <div className={styles.allProductsTitleBox}>
                    <p className={styles.allProductsCompanyTitle}><span className={styles.secnodPart}>Supplyar</span></p>
                </div>
                <div className={styles.allProductsProductImage}>
                    <center>
                        <Image src={ 'http://localhost:3000/' + props.Product.ProductImg} />
                    </center>
                </div>
                <div className={styles.allProductsProductNameBox}>
                    <p className={styles.allProductsProductName}>
                        {props.Product.ProductTitle}
                    </p>
                </div>
                <div className={styles.allProductsSpecificationBox}>
                    <p className={styles.allProductsProductSpecification}>
                        Brand &nbsp;
                        <span className={styles.specificationValue}>
                            {props.Product.Brand}
                        </span>
                    </p>
                    <p className={styles.allProductsProductSpecification}>
                        Item# &nbsp;
                        <span className={styles.specificationValue}>
                            {props.Product.Item}
                        </span>
                    </p>
                    <p className={styles.allProductsProductSpecification}>
                        Mfr. Model# &nbsp;
                        <span className={styles.specificationValue}>
                            {props.Product.MfrModel}
                        </span>
                    </p>
                </div>
            </div>
        </Col>
    )
};

export default allProducts;

