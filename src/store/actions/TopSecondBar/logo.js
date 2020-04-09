// import axios from 'axios';
import { storeLogoData } from '../../../apiDemoData/TopSecondNavbar/logo';


import * as actionTypes from './actionTypes';

export const logoStart = () => {
    return {
        type: actionTypes.LOGO_START
    };
};


export const logoSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.LOGO_SUCCESS,
        logoHistory: tempProducts
    };
};

export const logoFail = (error) => {
    return {
        type: actionTypes.LOGO_FAIL,
        error: error
    };
};


export const fetchLogo = () => {
    return dispatch => {
        dispatch(logoStart());
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
        storeLogoData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(logoSuccess( tempProducts ));

       
    };
};
