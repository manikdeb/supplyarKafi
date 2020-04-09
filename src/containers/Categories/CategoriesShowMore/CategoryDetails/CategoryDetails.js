import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

import * as actions from '../../../../store/actions/Home/index';

import styles from './CategoryDetails..module.css';
import SubCategory from './SubCategory/SubCategory';

class CategoryDetails extends Component {
    componentDidMount() {
        this.props.onFetchCategory(this.props.categoryId);
    }

    subCategorySelectedHandler = (subId) => {
        this.props.history.push(`/categories/${this.props.match.params.id}/${subId}`);
    }

    render() {    
        let mySubCategory = <h1>Empty</h1>;
        if(this.props.category !== null) {
            mySubCategory = this.props.category.map((subCategory) => {
                return (
                    <Col lg={4} md={4} sm={6} xs={6} className={styles.sizing}  key={subCategory.id} >
                        <div className={styles.categoriesCardBody}> 
                            <SubCategory 
                                subCategory={subCategory}
                                clicked={() => this.subCategorySelectedHandler(subCategory.id)} 
                            />
                        </div>
                    </Col>
                )
            })
        }

        let mySubCategorySideBar = <h1>loading...</h1>;
        if(this.props.category !== null) {
            mySubCategorySideBar = this.props.category.map((subCategory) => {
                return (
                    <div key={subCategory.id} >
                        <p className={styles.fileterLink} onClick={() => this.subCategorySelectedHandler(subCategory.id)}>
                            {subCategory.SubCategoryName}
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
                                <Col lg={3} md={3} sm={12} xs={12} >
                                    <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{borderRadius: 'none !important', backgroundColor: '#cb0a12', color: 'white', outline: 'none', opacity: '0.7', border: '1px solid black !important'}} >
                                           <p className={styles.sideBarProductCategoriesTitle}>Product Categories</p>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0" >
                                            <Card.Body  style={{ border: '1px solid black !important' }}>
                                                {mySubCategorySideBar}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </Col>
                                <Col lg={9} md={9} sm={12} xs={12} >
                                    <Row>
                                        {mySubCategory}
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
        categoriesHistory: state.categoryAll.categoriesHistory,
        loading: state.categoryAll.loading,
        category: state.categoryAll.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategory: (id) => dispatch( actions.fetchCategory(id) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( CategoryDetails )) ;