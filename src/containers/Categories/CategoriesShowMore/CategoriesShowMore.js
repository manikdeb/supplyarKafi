import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Container, Row, Col } from 'react-bootstrap';

// import Breadcrumbs from '../../../components/Breadcrumbs';

import styles from './CategoriesShowMore.module.css';

import * as actions from '../../../store/actions/Home/index';

import Category from './Category';


class Categories extends Component {
    componentDidMount() {
        this.props.onFetchCategories();
    }

    categorySelectedHandler = (id) => {
        this.props.history.push(`/categories/${id}`);
    }

    render() {
        let categoryOutput = <h1>Loading...</h1>;
        if ( !this.props.loading && this.props.categoriesHistory !== null ) {
            categoryOutput = this.props.categoriesHistory.map( (category) => 
                {
                    return (
                        <Col lg={4} md={4} sm={6} xs={6} className={styles.sizing}  key={category.id} >
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

        return(
            <div>
                <Container style={{paddingBottom: '40px'}}> 
                    {/* <Row>
                        <Breadcrumbs />
                    </Row> */}

                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <p className={styles.categoriesTitle}>Product Categories</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <p className={styles.categoriesPara}>
                                        Shomoy is a leading provider of top-quality industrial supplies in Bangladesh.. We carry the brands you trust, along with money-saving alternatives to suit any budget. We add 
                                        new products nearly every day to make sure we offer the latest, high-quality products. We also provide product services such as lighting upgrades, lighting project management,
                                        hazardous recycling services, storage equipment/ installation and safety services, along with specific product resources for many of your operation's most pressing needs.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br /><br />
                       
                    <Row>
                        { categoryOutput }
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

export default connect( mapStateToProps, mapDispatchToProps )( Categories );

