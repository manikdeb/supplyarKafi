// import axios from 'axios';
import { storeBestPriceData } from '../../../apiDemoData/Home/bestPrices/data';

import * as actionTypes from './actionTypes';

export const bestPricesStart = () => {
    return {
        type: actionTypes.BESTPRICES_START
    };
};


export const bestPricesSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.BESTPRICES_SUCCESS,
        bestPricesHistory: tempProducts
    };
};

export const bestPricesFail = (error) => {
    return {
        type: actionTypes.BESTPRICES_FAIL,
        error: error
    };
};



export const fetchBestPrices = () => {
    return dispatch => {
        dispatch(bestPricesStart());
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
        storeBestPriceData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(bestPricesSuccess( tempProducts ));

       
    };
};