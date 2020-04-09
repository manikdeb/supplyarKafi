import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './BestPrices.module.css';
import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames';

import * as actions from '../../../store/actions/Home/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';

const imgResponsive = className(globalStyles['img-responsive']);

class BestPrices extends Component {
    componentDidMount() {
        this.props.onFetchBestPrices();
    }
    
    render() {
        let bestPricesOutput = <div><Spinner /></div>
        if ( !this.props.loading && this.props.bestPricesHistory !== null ) {
            bestPricesOutput = this.props.bestPricesHistory.slice(0,6).map( (bestPriceOne,index) => 
                {
                    return (
                        <Col lg={2} md={4} sm={6} xs={6} className={styles.sizing}   key={index}>
                            <div className={styles.bestPricesCardBody}> 
                                <div className={styles.bestPricesTitleBox}>
                                    <p className={styles.bestPricesCompanyTitle}><span className={styles.secnodPart}>Supplyar</span></p>
                                </div>
                                <div className={styles.bestPricesProductImage}>
                                    <center>
                                        <Image src={bestPriceOne.img} className={imgResponsive} />
                                    </center>
                                </div>
                                <div className={styles.bestPricesProductNameBox}>
                                    <p className={styles.bestPricesProductName}>
                                        {bestPriceOne.title}
                                    </p>
                                </div>
                                <div className={styles.bestPricesSpecificationBox}>
                                    <p className={styles.bestPricesProductSpecification}>
                                        Brand &nbsp;
                                        <span className={styles.specificationValue}>
                                            {bestPriceOne.Brand}
                                        </span>
                                    </p>
                                    <p className={styles.bestPricesProductSpecification}>
                                        Item# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {bestPriceOne.Item}
                                        </span>
                                    </p>
                                    <p className={styles.bestPricesProductSpecification}>
                                        Mfr. Model# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {bestPriceOne.Model}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    );
                }
            );
        }
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6} >
                                    <p className={styles.bestPricesTitle}>Best Prices</p>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6} >
                                    <Link to="/" className={styles.bestPricesShowmore} >Show more</Link>  
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                {bestPricesOutput}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bestPricesHistory: state.bestPricesAll.bestPricesHistory,
        loading: state.bestPricesAll.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchBestPrices: () => dispatch( actions.fetchBestPrices() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( BestPrices );