import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Search from './Search/Search';

import styles from './ProductMenu.module.css';
import globalStyles from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames';

import LogoPic from '../../../assets/images/1.Home/TopSecondNavbar/logo.png';
import CartPic from '../../../assets/images/1.Home/TopSecondNavbar/cart.png';

const imgResponsive = className(globalStyles["img-responsive"]);
const productsDropdownIcon = className(globalStyles["fa fa-caret-down"]);

// const s131 = className(formStyles["s131"]);
// const innerForm  = className(formStyles["inner-form"]);
// const inputField = className(formStyles["input-field"]);
// const firstWrap = className(formStyles["first-wrap"]);
// const secondWrap = className(formStyles["second-wrap"]);
// const thirdWrap = className(formStyles["third-wrap"]);
// const inputSelect = className(formStyles["input-select"]);
// const buttonSearch = className(formStyles["btn-search"]);
 

export default class ProductMenu extends Component {
    state = {
        Category: [
            {
                Id: 1,
                CategoryName: 'Apparel Industry',
                CategoryDetail: [
                    {
                        id: 1,
                        SubCategoryName: 'SR Cyllindrical Roller Bearing'
                    },
                    {
                        id: 2,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 3,
                        SubCategoryName: 'Insert Bearing'
                    },
                    {
                        id: 4,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 5,
                        SubCategoryName: 'Miscelleneous'
                    },
                    {
                        id: 6,
                        SubCategoryName: 'SR Angular Contact Ball Bearing'
                    }
                ]
            },
            {
                Id: 2,
                CategoryName: 'Bearings',
                CategoryDetail: [
                    {
                        id: 1,
                        SubCategoryName: 'SR Cyllindrical Roller Bearing'
                    },
                    {
                        id: 2,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 3,
                        SubCategoryName: 'Insert Bearing'
                    },
                    {
                        id: 4,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 5,
                        SubCategoryName: 'Miscelleneous'
                    },
                    {
                        id: 6,
                        SubCategoryName: 'SR Angular Contact Ball Bearing'
                    }
                ]
            },
            {
                Id: 3,
                CategoryName:  'Industry',
                CategoryDetail: [
                    {
                        id: 1,
                        SubCategoryName: 'SR Cyllindrical Roller Bearing'
                    },
                    {
                        id: 2,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 3,
                        SubCategoryName: 'Insert Bearing'
                    },
                    {
                        id: 4,
                        SubCategoryName: 'Adapter Sleeve'
                    },
                    {
                        id: 5,
                        SubCategoryName: 'Miscelleneous'
                    },
                    {
                        id: 6,
                        SubCategoryName: 'SR Angular Contact Ball Bearing'
                    }
                ]
            },
       ]
    }

    myButton = (perCategory) => {
        console.log(perCategory);
        // {
        //     perCategory.CategoryDetail.map( (i) => {
        //         return(
        //             <div key={i}  className={styles.mySubCategory}>
        //                 <ul>
        //                     <li>
        //                         <p >
        //                             {i.SubCategoryName}
        //                         </p>
        //                     </li>
        //                 </ul>
        //             </div>
        //         )
        //     })
        // }
    }

  render() {
    return (
      <Container style={{ padding: '8px 0px' }}> 
        <Row>
            <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing} >
                <Row>
                    <Col lg={3} md={3} sm={12} xs={12} >
                        <center>
                            <Link to="/">
                                <Image src={LogoPic} className={imgResponsive, styles.logoPic} />
                            </Link>
                        </center>
                    </Col>
                    <Col lg={1} md={1} sm={12} xs={12} >
                        <Row>
                            <div className={styles.sizing}>
                                <div className={styles.allProducts}>
                                    <button className={styles.btn, styles.dropbtn}>All Products 
                                        <FontAwesome
                                            className="fa fa-caret-down"
                                            name="caret"
                                            style={{color: 'black',marginLeft: '5px', opacity: '.8'}}
                                        />
                                    </button>
                                    <div className={styles.dropdownContent}>
                                        <Row>
                                            <Col md={12} >
                                                <div>              
                                                    {
                                                        this.state.Category.map((perCategory,k) =>{
                                                            return (
                                                                <div   className={styles.myCategory}>
                                                                    <ul>
                                                                        <li>
                                                                            <p className={styles.categoriesText}>
                                                                                {perCategory.CategoryName}
                                                                            </p>
                                                                        </li>
                                                                    </ul> 
                                                                    {
                                                                        perCategory.CategoryDetail.map( (i) => {
                                                                            return(
                                                                                <div  className={styles.mySubCategory}>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <p key={k+i}>
                                                                                                <a onClick={this.myButton.bind(this,perCategory)} >
                                                                                                    {i.SubCategoryName}
                                                                                                </a>
                                                                                            </p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className={styles.sizing} >
                        <div className={styles.sizing, styles.myLeft} >
                                <Search />
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12}  className={styles.sizing} >
                        <ul className={styles.cart} >
                            <li>
                                <Link to="">
                                    <Image src={CartPic} /> &nbsp; <span> Cart </span>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    );
  }
}

// ProductMenu;


