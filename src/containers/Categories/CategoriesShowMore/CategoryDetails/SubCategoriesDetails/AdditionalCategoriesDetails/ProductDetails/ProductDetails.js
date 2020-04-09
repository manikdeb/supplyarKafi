import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


import * as actions from '../../../../../../../store/actions/Home/index';


import styles from './ProductDetails.module.css';
import ProductImage from '../../../../../../../assets/images/ProductDetails/1.png';
import Product from './Product/Product';

class ProductDetails extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          slidesToShow: 5,
          Previous: false
        };
      }
    
    componentDidMount() {
        this.props.onFetchProductDetails( this.props.categoryId, this.props.subCategoryId, this.props.additionalCategoryId, this.props.productId );
        this.props.onFetchAdditionalCategory( this.props.categoryId, this.props.subCategoryId, this.props.additionalCategoryId );
    }

    render() {  

        let myAllProduct = <h1>loading...</h1>;
        if(this.props.prouductDetails !== null) {
            myAllProduct = this.props.prouductDetails.map((Product) => {
                return (
                    <Row key={Product.id}>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <Row>
                                        <Col lg={5} md={5} sm={12} xs={12}>
                                            <div className={styles.imageBox}>
                                                <center>
                                                    <Zoom>
                                                        <img
                                                        alt="that wanaka tree"
                                                        src={ 'http://localhost:3000/' + Product.ProductImg}
                                                        />
                                                    </Zoom>
                                                </center>
                                            </div>
                                        </Col>
                                        <Col lg={7} md={7} sm={12} xs={12}>
                                            <div className={styles.detailsBox}>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12} >
                                                        <p>{Product.ProductTitle}</p>
                                                        <p className={styles.priceText}>Your Price Tk. {Product.Price} / each</p>
                                                        <p>Qty</p>
                                                        <ul>
                                                            <li>
                                                                <input type="text" placeholder="Qty #" className={styles.inputText}   /> 
                                                            </li>
                                                            <li>
                                                                <Button className={styles.addBtn}> Add </Button>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row style={{ padding: '20px 0px' }}> 
                                                    <Col lg={12} md={12} sm={12} xs={12} >
                                                        <center>
                                                            <Button className={styles.addToCartBtn}> + Add To List </Button>
                                                        </center>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <p className={styles.informationTitle}>Item Information</p>
                                                    </Col>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <p className={styles.infoTitle}>Product Name</p>
                                                            </Col>
                                                            <Col lg={8} md={8} sm={6} xs={6}>
                                                                <p className={styles.infoData}>{Product.ProductName}</p>
                                                            </Col>
                                                        </Row>
                                                         <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <p className={styles.infoTitle}>Country of origin</p>
                                                            </Col>
                                                            <Col lg={8} md={8} sm={6} xs={6}>
                                                                <p className={styles.infoData}>Japan</p>
                                                            </Col>
                                                        </Row>
                                                         <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <p className={styles.infoTitle}>Machine Brand</p>
                                                            </Col>
                                                            <Col lg={8} md={8} sm={6} xs={6}>
                                                                <p className={styles.infoData}>{Product.Brand}</p>
                                                            </Col>
                                                        </Row>
                                                         <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <p className={styles.infoTitle}>Compatible Models</p>
                                                            </Col>
                                                            <Col lg={8} md={8} sm={6} xs={6}>
                                                                <p className={styles.infoData}>{Product.CompatibleModels}</p>
                                                            </Col>
                                                        </Row>
                                                         <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                        <Row>
                                                            <Col lg={4} md={4} sm={6} xs={6}>
                                                                <p className={styles.infoTitle}>Item</p>
                                                            </Col>
                                                            <Col lg={8} md={8} sm={6} xs={6}>
                                                                <p className={styles.infoData}>{Product.Item}</p>
                                                            </Col>
                                                        </Row>
                                                        <hr style={{ borderBottom: 'thin #e1e1e1', width: '100%', margin: '0', padding: '0' }} />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )
            })
        }
        
        
        let relatedProductsOutput = null;
        if(this.props.additionalCategory !== null) {
            relatedProductsOutput = this.props.additionalCategory.map( (product) => {
                return (
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} key={product.id}>
                            <div className={styles.allProductsCardBody} > 
                                <div className={styles.allProductsTitleBox}>
                                    <p className={styles.allProductsCompanyTitle}><span className={styles.secnodPart}>Supplyar</span></p>
                                </div>
                                <div className={styles.allProductsProductImage}>
                                    <center>
                                        <Image src={ 'http://localhost:3000/' + product.ProductImg} />
                                    </center>
                                </div>
                                <div className={styles.allProductsProductNameBox}>
                                    <p className={styles.allProductsProductName}>
                                        {product.ProductTitle}
                                    </p>
                                </div>
                                <div className={styles.allProductsSpecificationBox}>
                                    <p className={styles.allProductsProductSpecification}>
                                        Brand &nbsp;
                                        <span className={styles.specificationValue}>
                                            {product.Brand}
                                        </span>
                                    </p>
                                    <p className={styles.allProductsProductSpecification}>
                                        Item# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {product.Item}
                                        </span>
                                    </p>
                                    <p className={styles.allProductsProductSpecification}>
                                        Mfr. Model# &nbsp;
                                        <span className={styles.specificationValue}>
                                            {product.MfrModel}
                                        </span>
                                    </p>
                                </div>
                            
                            </div>
                    </Col>
                )
            })
        }

        
        
        return (
            <div>
                <Container style={{padding: '30px 0px'}}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <p className={styles.Title}>Product Details</p>
                            {myAllProduct}
                        </Col>
                    </Row>
                    <br />
                    
                    <br /><br />
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                            <p className={styles.Title}>Related Products</p>
                            <Row>
                                <Carousel slidesToShow={this.state.slidesToShow} >
                                    {relatedProductsOutput}
                                </Carousel>
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
        productId: ownProps.match.params.productId,
        categoriesHistory: state.categoryAll.categoriesHistory,
        loading: state.categoryAll.loading,
        category: state.categoryAll.category,
        subCategory: state.categoryAll.subCategory,
        additionalCategory: state.categoryAll.additionalCategory,
        prouductDetails: state.categoryAll.prouductDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProductDetails: (categoryId, subCategoryId, additionalCategoryId, productId) => dispatch( actions.fetchProductDetails( categoryId, subCategoryId, additionalCategoryId, productId ) ),
        onFetchAdditionalCategory: (categoryId, subCategoryId, additionalCategoryId) => dispatch( actions.fetchAdditionalCategory( categoryId, subCategoryId, additionalCategoryId ) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( ProductDetails )) ;