// import axios from 'axios';
import { storeFeatureData } from '../../../apiDemoData/Home/Features/data';

import * as actionTypes from './actionTypes';

export const featuresStart = () => {
    return {
        type: actionTypes.FEATURES_START
    };
};


export const featuresSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.FEATURES_SUCCESS,
        featuresHistory: tempProducts
    };
};

export const featuresFail = (error) => {
    return {
        type: actionTypes.FEATURES_FAIL,
        error: error
    };
};



export const fetchFeatures = () => {
    return dispatch => {
        dispatch(featuresStart());
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
        storeFeatureData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(featuresSuccess( tempProducts ));

       
    };
};