import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import styles from './Categories.module.css';

import * as actions from '../../../store/actions/Home/index';

import Category from './Category/Category';

class Categories extends Component {

    categorySelectedHandler = (id) => {
        this.props.history.push(`/categories/${id}`);
    }

    componentDidMount() {
        this.props.onFetchCategories();
    }
    
    render() {
        let categoriesOutput = <div>loading...</div>
        if ( !this.props.loading && this.props.categoriesHistory !== null ) {
            categoriesOutput = this.props.categoriesHistory.slice(0,6).map( (category) => 
                {
                    return (
                        <Col lg={2} md={2} sm={12} xs={12} className={styles.sizing} key={category.id}>
                            <div className={styles.categoriesCardBody}> 
                                    <Category 
                                        category={category}
                                        clicked={() => this.categorySelectedHandler(category.id)}  
                                    />
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
                                    <p className={styles.categoriesTitle}>Categories</p>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6} >
                                    <Link to="/categories" className={styles.categoriesShowmore} >Show more</Link>  
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Row>
                                {categoriesOutput}
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
        categoriesHistory: state.categoryAll.categoriesHistory,
        loading: state.categoryAll.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch( actions.fetchCategories() )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( Categories ));