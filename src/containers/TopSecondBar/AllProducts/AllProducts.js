import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import * as actions from '../../../store/actions/TopSecondBar/index';

import styles from './AllProducts.module.css';

class AllProducts extends Component {

    myButton = (category) => {
        console.log(category);
    }

    componentDidMount() {
        this.props.onFetchAllProducts();
    }

    categorySelectedHandler = (id) => {
        this.props.history.push(`/categories/${id}`);
    }
    
    render() {
        let allProductsOutput = <div><h1>All Products</h1></div>
        if ( !this.props.loading && this.props.allProductsHistory !== null ) {
            allProductsOutput = this.props.allProductsHistory.map( (category) => 
                { 
                    return (
                        <div className={styles.myCategory} key={category.id}>
                            <ul>
                                <li>
                                    <p className={styles.categoriesText} onClick={() => this.categorySelectedHandler(category.id)} >
                                        {category.categoryName}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )
                }  
            );
        }
        
        return (
            <div>
                <Row>
                    <div className={styles.sizing}>
                        <div className={styles.allProducts}>
                            <Link to="/categories" className={styles.categoriesShowmore} >
                                <button className={ styles.dropbtn }>All Products 
                                    <FontAwesome
                                        className="fa fa-caret-down"
                                        name="caret"
                                        style={{color: 'black',marginLeft: '3px', opacity: '.8'}}
                                    />
                                </button>
                            </Link>  
                            
                            <div className={styles.dropdownContent}>
                                <Row>
                                    <Col md={12} >
                                        <h3 style={{ textAlign: 'center !important', fontFamily: 'Roboto Regular' }}>All Categories</h3>
                                        <hr style={{ color: 'red', width: '100%' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} >
                                        <div>              
                                            {allProductsOutput}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        categoryId: ownProps.match.params.id,
        // subCategoryId: ownProps.match.params.subId,
        allProductsHistory: state.allProducts.allProductsHistory,
        loading: state.allProducts.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchAllProducts: () => dispatch( actions.fetchAllProducts() )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( AllProducts ));