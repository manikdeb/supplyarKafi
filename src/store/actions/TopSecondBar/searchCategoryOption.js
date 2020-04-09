// import axios from 'axios';
import { Category } from '../../../apiDemoData/TopSecondNavbar/searchCategoryOption';


import * as actionTypes from './actionTypes';

export const searchCategoryOptionStart = () => {
    return {
        type: actionTypes.SEARCH_CATEGORY_OPTION_START
    };
};


export const searchCategoryOptionSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.SEARCH_CATEGORY_OPTION_SUCCESS,
        searchCategoryOptionHistory: tempProducts
    };
};

export const searchCategoryOptionFail = (error) => {
    return {
        type: actionTypes.SEARCH_CATEGORY_OPTION_FAIL,
        error: error
    };
};


export const fetchSearchCategoryOption = () => {
    return dispatch => {
        dispatch(searchCategoryOptionStart());
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
        Category.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(searchCategoryOptionSuccess( tempProducts ));

       
    };
};
