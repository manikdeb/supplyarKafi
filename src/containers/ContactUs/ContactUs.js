import React , { Component } from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import {  Container, Row, Col, Image } from 'react-bootstrap';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../shared/utility';

import styles from './ContactUs.module.css';

import Banner from '../../assets/images/AboutUs/aboutBanner.png';

const percentage = 25;
const percentageTwo = 50;
const percentageThree = 65;


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));


class ContactUs  extends Component  {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tell us about your need'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Send</Button>
            </form>
        );
        return(
            <Container>
                <br/>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className={styles.sizing}>
                        <br/>
                        <p className={styles.contactTitle}>Summary</p>
                        
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12} >
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} >
                                        <Row>
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                                <Row>
                                                    <Col lg={4} md={4} sm={4} xs={4} >
                                                        <div className={styles.progressDiv}>
                                                            <div className={styles.progressCircle}>
                                                                <CircularProgressbar
                                                                    value={percentage}
                                                                    text={`${percentage}%`}
                                                                    styles={buildStyles({
                                                                    textColor: "red",
                                                                    pathColor: "#a9b3b7",
                                                                    trailColor: "#ad69ae"
                                                                    })}
                                                                />
                                                            </div>
                                                            <div className={styles.progressText}>
                                                                    Branches
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4} sm={4} xs={4} >
                                                        <div className={styles.progressDiv}>
                                                            <div className={styles.progressCircle}>
                                                                <CircularProgressbar
                                                                    value={percentageTwo}
                                                                    text={`${percentageTwo}%`}
                                                                    styles={buildStyles({
                                                                    textColor: "red",
                                                                    pathColor: "#a9b3b7",
                                                                    trailColor: "#46b9c1"
                                                                    })}
                                                                />
                                                            </div>
                                                            <div className={styles.progressText}>
                                                                Clients
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4} sm={4} xs={4} >
                                                        <div className={styles.progressDiv}>
                                                            <div className={styles.progressCircle}>
                                                                <CircularProgressbar
                                                                    value={percentageThree}
                                                                    text={`${percentageThree}%`}
                                                                    styles={buildStyles({
                                                                    textColor: "red",
                                                                    pathColor: "#a9b3b7",
                                                                    trailColor: "#14a3f9"
                                                                    })}
                                                                />
                                                            </div>
                                                            <div className={styles.progressText}>
                                                                    Products
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} >
                                        <MapWithAMarker
                                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNpDWHpjGLZC0hGMkODoH1GSbvLsJj3Tk&v=3.exp&libraries=geometry,drawing,places"
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `245px` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row>
                        <br/>
                        <hr/>

                        
                        <br/>
                        <p className={styles.contactTitle}>Contact Us</p>
                        <p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any question you may have.</p>
                        <br/>

                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Row>
                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Row>
                                                            <Col lg={8} md={8} sm={12} xs={12}>
                                                                {form}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>        
                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Row>
                                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                                <p className={styles.contactTitle}>Careers</p>
                                                                <p className={styles.paratext}>We are hiring</p>
                                                                <p className={styles.paratext}>Tell us about you</p>
                                                                <p className={styles.paratext}>phone: +880 1682 280434</p>
                                                                <p className={styles.paratext}>email: manik@supplyar.com</p>
                                                            </Col>
                                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                                <p className={styles.contactTitle}>Office</p>
                                                                <p className={styles.paratext}>Dawood Center</p>
                                                                <p className={styles.paratext}>42 Nawabpur Road</p>
                                                                <p className={styles.paratext}>Dhaka - 1100</p>
                                                            </Col>
                                                        </Row>
                                                        <br/>
                                                        <Row>
                                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                                <p className={styles.contactTitle}>General Enquiries</p>
                                                                <p className={styles.paratext}>Don’t like to fill up form?</p>
                                                                <p className={styles.paratext}>Send us an email or call us</p>
                                                                <p className={styles.paratext}>phone: +880 1682 280434</p>
                                                                <p className={styles.paratext}>email: manik@supplyar.com</p>
                                                            </Col>
                                                            <Col lg={6} md={6} sm={6} xs={6}>
                                                                <p className={styles.contactTitle}>Business Hours</p>
                                                                <p className={styles.paratext}>Saturday-Thursday: 8am - 6pm</p>
                                                                <p className={styles.paratext}>Friday: Closed</p>
                                                                <p className={styles.paratext}>support: 24/6</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>        
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            <br/>
            </Container>
        );
    }
}

export default ContactUs;