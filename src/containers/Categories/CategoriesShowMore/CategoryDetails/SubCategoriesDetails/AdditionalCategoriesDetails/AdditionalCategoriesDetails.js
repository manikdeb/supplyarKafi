import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import styled from 'styled-components'

import * as actions from '../../../../../../store/actions/Home/index';

import styles from './AdditionalCategoriesDetails.module.css';
import AllProducts from './AllProducts/AllProducts';


class AdditionalCategoriesDetails extends Component {

    constructor(props){
        super(props);
        this.state =  {
            // purchasing: false,
            visible: 4
        } 
    }

    
   
    // purchaseHandler = (allProducts) => {
    //     this.setState( { 
    //         purchasing: true,
    //         ProductName: allProducts.ProductName,
    //         ProductTitle: allProducts.ProductTitle,
    //         ProductImg: allProducts.ProductImg,
    //         Price: allProducts.Price,
    //         Brand: allProducts.Brand,
    //         Item: allProducts.Item,
    //         MfrModel: allProducts.MfrModel,
    //         CatalogPage: allProducts.CatalogPage,
    //     } );
    // }

    // purchaseCancelHandler = () => {
    //     this.setState( { purchasing: false } );
    // }

    loadMoreHandler = () => {
        this.setState((old) => {
            return { visible: old.visible + 4 }
        });
    }
    
    componentDidMount() {
        this.props.onFetchAdditionalCategory( this.props.categoryId, this.props.subCategoryId, this.props.additionalCategoryId );
    }

    productDetailsSelectedHandler = (productId) => {
        this.props.history.push(`/categories/${this.props.match.params.id}/${this.props.match.params.subId}/${this.props.match.params.additionalId}/${productId}`);
    }

   

    render() { 

        let myAllProducts = <h1>loading...</h1>;
        if(this.props.additionalCategory !== null) {
            myAllProducts = this.props.additionalCategory.slice(0,this.state.visible).map((allProducts) => {
                return (
                    <AllProducts 
                        key={allProducts.id}
                        allProducts={allProducts}
                        clicked={() => this.productDetailsSelectedHandler(allProducts.id)}
                    />
                )
            })
        }

        let myAdditionalCategorySideBar = <h1>loading...</h1>;
        if(this.props.subCategory !== null) {
            myAdditionalCategorySideBar = this.props.additionalCategory.map((allProducts) => {
                return (
                    <div key={allProducts.id} >
                        <p className={styles.filterLink} >
                            {allProducts.ProductName}
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
                                            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ borderRadius: 'none !important', backgroundColor: '#cb0a12', color: 'white', outline: 'none' }} >
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
                                        {myAllProducts}
                                    </Row>
                                    <Row style={{ marginTop: '30px' }} >
                                        <Col lg={12} md={12} sm={12} xs={12} >
                                            { this.state.visible < this.props.additionalCategory.length && 
                                                <center>
                                                    <LoadMore onClick={()=>this.loadMoreHandler()}>Load More</LoadMore>
                                                </center>
                                            }
                                        </Col>
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
        additionalCategoryId: ownProps.match.params.additionalId,
        categoriesHistory: state.categoryAll.categoriesHistory,
        loading: state.categoryAll.loading,
        category: state.categoryAll.category,
        subCategory: state.categoryAll.subCategory,
        additionalCategory: state.categoryAll.additionalCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAdditionalCategory: (categoryId, subCategoryId, additionalCategoryId) => dispatch( actions.fetchAdditionalCategory( categoryId, subCategoryId, additionalCategoryId ) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( AdditionalCategoriesDetails )) ;

export const LoadMore = styled.button`
  border-radius: 3px;
  width: 100px;
  min-height: 30px;
  background: #cb0a12;
  color: #ffffff;
  border: none;
  font-family: 'Roboto Regular', 'Arial', 'Helvetica', sans-serif;
  font-size: 12px;
  font-weight: normal;
  cursor: pointer;
  display: inline-block;
  outline: none;
  vertical-align: baseline;
  margin: 0 0 0 0;
  text-transform: none;
  text-shadow: none;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: none !important;
  border: none !important;
  -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
  &:hover{
    color: white;
    background: #ed1e24;
  }
  &:focus{
    outline: none;
  }
`