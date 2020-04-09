import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

import Home from './containers/Home/Home';

// my imported links for toolbar
import MyAccount from './components/Home/Toolbar/LinkPages/MyAccount/MyAccount';
import GeneralCatelog from './components/Home/Toolbar/LinkPages/GeneralCatelog/GeneralCatelog';
import BulkOrderPad from './components/Home/Toolbar/LinkPages/BulkOrderPad/BulkOrderPad';
import Services from './components/Home/Toolbar/LinkPages/Services/Services';
import SignIn from './components/Home/Toolbar/LinkPages/SignIn/SignIn';

// my imported links for Categories
import ShowMore from './containers/Categories/CategoriesShowMore/CategoriesShowMore';
import CategoryDetails from './containers/Categories/CategoriesShowMore/CategoryDetails/CategoryDetails';
import SubCategoriesDetails from './containers/Categories/CategoriesShowMore/CategoryDetails/SubCategoriesDetails/SubCategoriesDetails';
import AdditionalCategoryDetails from './containers/Categories/CategoriesShowMore/CategoryDetails/SubCategoriesDetails/AdditionalCategoriesDetails/AdditionalCategoriesDetails';
import ProductDetails from './containers/Categories/CategoriesShowMore/CategoryDetails/SubCategoriesDetails/AdditionalCategoriesDetails/ProductDetails/ProductDetails';

// my imported links for TopFooter
import AboutUs from './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';


// const asyncAuth = asyncComponent(() => {
//   return import('./containers/Auth/Auth');
// });

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  
  render () {
    let routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myaccount"  exact component={MyAccount} />
          <Route path="/services" exact component={Services} />
          <Route path="/bulkorderpad" exact component={BulkOrderPad} />
          <Route path="/generalcatalog" exact component={GeneralCatelog} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/categories" exact component={ShowMore} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/categories/:id" exact component={CategoryDetails} />
          <Route path="/categories/:id/:subId" exact component={SubCategoriesDetails} />
          <Route path="/categories/:id/:subId/:additionalId" exact component={AdditionalCategoryDetails} />
          <Route path="/categories/:id/:subId/:additionalId/:productId" exact component={ProductDetails} />
        </Switch>
    );

    if ( this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/generalcatalog" component={GeneralCatelog} />
          <Route path="/bulkorderpad" component={BulkOrderPad} />
          <Route path="/services" component={Services} />
          <Route path="/" exact  component={MyAccount} />
        </Switch>
      );
    }

    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.access_token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );


