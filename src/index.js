import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import authReducer from './store/reducers/auth';

import topSecondBarReducer from './store/reducers/TopSecondBar/logo';
import allProductsReducer from './store/reducers/TopSecondBar/allProducts';
import searchCategoryOptionReducer from './store/reducers/TopSecondBar/searchCategoryOption';

import carouselReducer from './store/reducers/Home/carousel';
import categoryReducer from './store/reducers/Home/categories';
import bestPricesReducer from './store/reducers/Home/homeBestPrices';
import newArrivalsReducer from './store/reducers/Home/newArrivals';
import featuresReducer from './store/reducers/Home/features';

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    logoSupplyar: topSecondBarReducer,
    allProducts:allProductsReducer,
    searchCategoryOptionAll: searchCategoryOptionReducer,
    carouselAll: carouselReducer,
    categoryAll: categoryReducer,
    bestPricesAll: bestPricesReducer,
    newArrivalsAll: newArrivalsReducer,
    featuresAll: featuresReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();