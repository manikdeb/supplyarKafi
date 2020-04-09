import React from 'react';
import { Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// import FontAwesome from 'react-fontawesome';

import styles from './AllProducts.module.css';

const allProducts = (props) => {
    return (
        <Col lg={3} md={3} sm={6} xs={6} className={styles.sizing} >
            <div className={styles.allProductsCardBody} onClick={props.clicked}> 
                <div className={styles.allProductsTitleBox}>
                    <p className={styles.allProductsCompanyTitle}><span className={styles.secnodPart}>Supplyar</span></p>
                </div>
                <div className={styles.allProductsProductImage}>
                    <center>
                        <Image src={ 'http://localhost:3000/' + props.allProducts.ProductImg} />
                    </center>
                </div>
                <div className={styles.allProductsProductNameBox}>
                    <p className={styles.allProductsProductName}>
                        {props.allProducts.ProductTitle}
                    </p>
                </div>
                <div className={styles.allProductsSpecificationBox}>
                    <p className={styles.allProductsProductSpecification}>
                        Brand &nbsp;
                        <span className={styles.specificationValue}>
                            {props.allProducts.Brand}
                        </span>
                    </p>
                    <p className={styles.allProductsProductSpecification}>
                        Item# &nbsp;
                        <span className={styles.specificationValue}>
                            {props.allProducts.Item}
                        </span>
                    </p>
                    <p className={styles.allProductsProductSpecification}>
                        Mfr. Model# &nbsp;
                        <span className={styles.specificationValue}>
                            {props.allProducts.MfrModel}
                        </span>
                    </p>
                </div>
              
            </div>
        </Col>
    )
};

export default withRouter(allProducts);

