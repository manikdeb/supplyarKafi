// import axios from 'axios';
import { storeCategoryData } from '../../../apiDemoData/TopSecondNavbar/allProducts';


import * as actionTypes from './actionTypes';

export const allProductsStart = () => {
    return {
        type: actionTypes.ALLPRODUCTS_START
    };
};


export const allProductsSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.ALLPRODUCTS_SUCCESS,
        allProductsHistory: tempProducts
    };
};

export const allProductsFail = (error) => {
    return {
        type: actionTypes.ALLPRODUCTS_FAIL,
        error: error
    };
};


export const fetchAllProducts = () => {
    return dispatch => {
        dispatch(allProductsStart());
        // axios.defaults.headers.common = {'Authorization': `bearer ${access_token}`}
        // axios.post('https://cors-anywhere.herokuapp.com/http://marma.bdeducation.org.bd/api/fee-information')
        // .then(response => {
        //     const fetchedPayments = [];
        //         for ( let key in response.data ) {
        //             fetchedPayments.push( {
        //                 ...response.data[key]
        //             } );
        //         }
        //     // console.log(fetchedPayments);
        //     dispatch(bestPricesSuccess( fetchedPayments ));
        // })
        // .catch(err => {
        //     dispatch(bestPricesFail(err.response));
        // });

        let tempProducts = [];
        storeCategoryData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(allProductsSuccess( tempProducts ));

       
    };
};
