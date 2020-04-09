// import axios from 'axios';
import { storeNewArrivalsData } from '../../../apiDemoData/Home/newArrivals/data';


import * as actionTypes from './actionTypes';

export const newArrivalsStart = () => {
    return {
        type: actionTypes.NEWARRIVALS_START
    };
};


export const newArrivalsSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.NEWARRIVALS_SUCCESS,
        newArrivalsHistory: tempProducts
    };
};

export const newArrivalsFail = (error) => {
    return {
        type: actionTypes.NEWARRIVALS_FAIL,
        error: error
    };
};



export const fetchNewArrivals = () => {
    return dispatch => {
        dispatch(newArrivalsStart());
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
        storeNewArrivalsData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(newArrivalsSuccess( tempProducts ));

       
    };
};