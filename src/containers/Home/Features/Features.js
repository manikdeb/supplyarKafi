import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Features.module.css';
import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames';

import * as actions from '../../../store/actions/Home/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';

const imgResponsive = className(globalStyles['img-responsive']);

class Features extends Component {
    componentDidMount() {
        this.props.onFetchFeatures();
    }
    
    render() {
        let featuresOutput = <div><Spinner /></div>
        if ( !this.props.loading && this.props.featuresHistory !== null ) {
            featuresOutput = this.props.featuresHistory.map( (feature) => 
                {
                    return (
                        <Col lg={3} md={6} sm={6} xs={6} className={styles.sizing} key={feature.id}>
                            <div className={styles.featuresCardBody}> 
                                <Row>
                                    <Col lg={5} md={5} sm={12} xs={12}>
                                        <Image src={feature.FeatureImg} className={imgResponsive} />
                                    </Col>
                                    <Col lg={7} md={7} sm={12} xs={12}>
                                        <div className={styles.featuresLink}>
                                            <Link to="/">{feature.FeatureName}</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    );
                }
            );
        }
        
        return (
            <div>
                <Container style={{paddingBottom: '40px'}}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                        <p className={styles.featuresTitle}>Features</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                {featuresOutput}
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
        featuresHistory: state.featuresAll.featuresHistory,
        loading: state.featuresAll.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchFeatures: () => dispatch( actions.fetchFeatures() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Features );