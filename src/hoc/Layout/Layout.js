import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

import TopSecondBar from '../../containers/TopSecondBar/TopSecondBar';
import TopFooter from '../../components/Home/TopFooter/TopFooter';
import Footer from '../../components/Home/Footer/Footer';

const Styled = styled.div`
  .jumbo {
        background-color: #f8f8f8;
        margin: 0;
        padding: 0;
  }
`;

const ProductBar = styled.div`
  .jumbo {
        background-color: #ededed;
        padding: 0;
        margin: 0;
        margin-top: 30px;
  }
`;

const UpperFooter = styled.div`
  .jumbo {
        background-color: #eeeeee;
        padding: 0;
        margin: 0;
        padding-top: 70px;
        padding-bottom: 70px;
  }
`;


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                />
                <ProductBar>
                    <Jumbo fluid className="jumbo">
                        <TopSecondBar />
                    </Jumbo>
                </ProductBar>
                <main>
                    <Styled>
                        <Jumbo fluid className="jumbo">
                            {this.props.children}
                        </Jumbo>
                    </Styled>
                </main>

                <UpperFooter>
                    <Jumbo fluid className="jumbo">
                        <TopFooter />
                    </Jumbo>
                </UpperFooter>
                <Footer />
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.access_token !== null
    };
};

// export default connect( mapStateToProps )( Layout );

export default withRouter( connect( mapStateToProps, null )( Layout ) );