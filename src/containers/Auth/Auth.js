import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Particles from 'react-particles-js';
// import disableScroll from 'disable-scroll';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/SpinnerLogin/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import burgerLogo from '../../assets/images/school_logo_big.png';

import Home from '../Home/Home';

// const imgMyimageexample = require('../../assets/images/back.jpg');

const divStyle = {
    // position: 'fixed',
    // width: '100%' ,
    // height: '100vh',
    // top: '56px',
    // left: 0,
    background: 'rgb(220, 220, 220)'
};

class Auth extends Component {
    state = {
        controls: {
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'id',
                    placeholder: 'Your Id'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 11
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( this.state.controls, {
            [controlName]: updateObject( this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            } )
        } );
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.id.value, this.state.controls.password.value);
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if ( this.props.loading ) {
            form = <Spinner />
        }

        let errorMessage = null;

        if ( this.props.error ) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if ( this.props.isAuthenticated ) {
            authRedirect = <Route path="/" exact  component={Home} />
        }

        return (
            <div style={divStyle}>
                <Particles 
                    params={{
                    particles: {
                        number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                        },
                        size: {
                            value: 3
                        },
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "lightblue",
                                blur: 1
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                    }}
                />
                <div style={{position: 'absolute', left: '50%', top: '25%',transform: 'translate(-50%, -25%)'}}>
                    <center>
                        <img src={burgerLogo} alt="MyLogo" className={classes.Logo} />
                    </center>

                    <h1 className={classes.Started}>Get Started</h1>
                    <h4 style={{textAlign: 'center',fontFamily: 'Ubuntu',fontSize: '16px'}}>Enter Your Id And Password</h4>
                    <div className={classes.Auth}>
                        {authRedirect}
                        {errorMessage}
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <center>
                                <Button btnType="Success">SUBMIT</Button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.access_token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( id, password ) => dispatch( actions.auth( id, password) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );