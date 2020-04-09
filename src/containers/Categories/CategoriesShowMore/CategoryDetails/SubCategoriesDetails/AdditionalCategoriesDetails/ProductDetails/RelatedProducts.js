import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import styles from './Carousel.module.css';
// import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import className from 'classnames';

// import * as actions from '../../../store/actions/Home/index';
import * as actions from '../../../../../../../store/actions/Home/index';
// import Spinner from '../../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios';

// const imgResponsive = className(globalStyles['img-responsive']);

class MyCarousel extends Component {
    componentDidMount() {
        this.props.onFetchCarousel();
    }
    
    render() {
        let carouselOutput = <div><Spinner /></div>
        if ( !this.props.loading && this.props.carouselHistory !== null ) {
            carouselOutput = this.props.carouselHistory.map( (carousel,index) => 
                {
                    return (
                        <Image src={carousel.carouselImg} key={carousel.id} />
                    );
                }
            );
        }
        
        return (
            <div>
                 <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} >
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                                    <Carousel>
                                        {carouselOutput}
                                    </Carousel>
                                </Col>
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
        // carouselHistory: state.carouselAll.carouselHistory,
        // loading: state.carouselAll.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchCarousel: () => dispatch( actions.fetchCarousel() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( MyCarousel );



