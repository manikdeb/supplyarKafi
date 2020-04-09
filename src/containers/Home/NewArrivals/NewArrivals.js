import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './NewArrivals.module.css';
import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames';


import * as actions from '../../../store/actions/Home/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';
// import classes from './Payment.css';

const imgResponsive = className(globalStyles['img-responsive']);

class NewArrivals extends Component {
    componentDidMount() {
        this.props.onFetchNewArrivals();
    }
    
    render() {
        let newArrivalsOutput = <div><Spinner /></div>
        if ( !this.props.loading && this.props.newArrivalsHistory !== null ) {
            newArrivalsOutput = this.props.newArrivalsHistory.slice(0,6).map( (newArrivalsOne,index) => 
                {
                    return (
                        <Col lg={2} md={4} sm={6} xs={6} className={styles.sizing} key={index} >
                            <div className={styles.newArrivalsCardBody}> 
                                <div className={styles.newArrivalsTitleBox}>
                                    <p className={styles.newArrivalsCompanyTitle}><span className={styles.secnodPart}>Supplyar</span></p>
                                </div>
                                <div className={styles.newArrivalsProductImage}>
                                    <center>
                                        <Image src={newArrivalsOne.img} className={imgResponsive} />
                                    </center>
                                </div>
                                <div className={styles.newArrivalsProductNameBox}>
                                    <p className={styles.newArrivalsProductName}>
                                        {newArrivalsOne.title}
                                    </p>
                                </div>
                                <div className={styles.newArrivalsSpecificationBox}>
                                    <p className={styles.newArrivalsProductSpecification}>
                                        Brand &nbsp;
                                        <span className={styles.specificationValue}>
                                            {newArrivalsOne.Brand}
                                        </span>
                                    </p>
                                    <p className={styles.newArrivalsProductSpecification}>
                                        Item# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {newArrivalsOne.Item}
                                        </span>
                                    </p>
                                    <p className={styles.newArrivalsProductSpecification}>
                                        Mfr. Model# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {newArrivalsOne.Model}
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
                                    <p className={styles.newArrivalsTitle}>New Arrivals</p>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6} >
                                    <Link to="/" className={styles.newArrivalsShowmore} >Show more</Link> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} >
                            <Row>
                                {newArrivalsOutput}
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
        newArrivalsHistory: state.newArrivalsAll.newArrivalsHistory,
        loading: state.newArrivalsAll.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchNewArrivals: () => dispatch( actions.fetchNewArrivals() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( NewArrivals );