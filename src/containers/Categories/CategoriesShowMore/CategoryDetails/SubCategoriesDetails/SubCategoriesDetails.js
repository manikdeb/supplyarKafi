import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

import * as actions from '../../../../../store/actions/Home/index';

import styles from './SubCategoriesDetails.module.css';
import AdditionalCategory from './AdditionalCategory/AdditionalCategory.js';

class SubCategoryDetails extends Component {
    
    componentDidMount() {
        this.props.onFetchSubCategory(this.props.categoryId,this.props.subCategoryId);
    }

    additionalCategorySelectedHandler = (additionalId) => {
        this.props.history.push(`/categories/${this.props.match.params.id}/${this.props.match.params.subId}/${additionalId}`);
    }


    render() {   
        let myAdditionalCategory = <h1>loading...</h1>;
        if(this.props.subCategory !== null) {
            myAdditionalCategory = this.props.subCategory.map((additionalCategory) => {
                return (
                    <Col lg={4} md={4} sm={6} xs={6} className={styles.sizing}  key={additionalCategory.id} >
                        <div className={styles.categoriesCardBody}> 
                            <AdditionalCategory 
                                additionalCategory={additionalCategory}
                                clicked={() => this.additionalCategorySelectedHandler(additionalCategory.id)}
                            />
                        </div>
                    </Col>
                )
            })
        }

        let myAdditionalCategorySideBar = <h1>loading...</h1>;
        if(this.props.subCategory !== null) {
            myAdditionalCategorySideBar = this.props.subCategory.map((additionalCategory) => {
                return (
                    <div key={additionalCategory.id} >
                        <p className={styles.filterLink}  onClick={() => this.additionalCategorySelectedHandler(additionalCategory.id)}>
                            {additionalCategory.AdditionalCategoryName}
                        </p>
                    </div>
                )
            })
        }
            
        return (
            <div>
                <Container style={{padding: '30px 0px'}}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12} >
                                    <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{borderRadius: 'none !important', backgroundColor: '#cb0a12', color: 'white', outline: 'none', opacity: '0.7'}} >
                                           Product Categories
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body style={{ border: '1px solid black !important' }} >
                                                {myAdditionalCategorySideBar}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </Col>
                                <Col lg={8} md={8} sm={12} xs={12} >
                                    <Row>
                                        {myAdditionalCategory}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        categoryId: ownProps.match.params.id,
        subCategoryId: ownProps.match.params.subId,
        categoriesHistory: state.categoryAll.categoriesHistory,
        loading: state.categoryAll.loading,
        category: state.categoryAll.category,
        subCategory: state.categoryAll.subCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSubCategory: (categoryId, subCategoryId) => dispatch( actions.fetchSubCategory( categoryId,subCategoryId ) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( SubCategoryDetails )) ;