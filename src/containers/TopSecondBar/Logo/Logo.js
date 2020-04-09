import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as actions from '../../../store/actions/TopSecondBar/index';

import styles from './Logo.module.css';

class Logo extends Component {

    componentDidMount() {
        this.props.onFetchLogo();
    }
    
    render() {
        let logoOutput = <h1>Logo</h1>;
        if ( !this.props.loading && this.props.logoHistory !== null ) {
            logoOutput = this.props.logoHistory.map( (logo) => 
                {
                    return (
                        <center key={logo.id}>
                            <Link to="/" >
                                <div >
                                    <Image 
                                        src={ 'http://localhost:3000/' + logo.img } 
                                        className={styles.logoPic} 
                                        style={{ MozBoxShadow: '6px 3px 5px 0px #ccc', WebkitBoxShadow: '6px 3px 5px 0px #ccc', boxShadow: '6px 3px 5px 0px #ccc' , maxHeight: '36px', 
                                        minHeight: '36px',
                                        height: '36px' }} 
                                    />
                                </div>
                            </Link>
                        </center>
                    );
                }
            );
        }
        
        return (
            <div>
                {logoOutput}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        logoHistory: state.logoSupplyar.logoHistory,
        loading: state.logoSupplyar.loading
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchLogo: () => dispatch( actions.fetchLogo() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Logo );