// import axios from 'axios';
import { storeCarouselData } from '../../../apiDemoData/Home/Carousel/data';


import * as actionTypes from './actionTypes';

export const carouselStart = () => {
    return {
        type: actionTypes.CAROUSEL_START
    };
};


export const carouselSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.CAROUSEL_SUCCESS,
        carouselHistory: tempProducts
    };
};

export const carouselFail = (error) => {
    return {
        type: actionTypes.CAROUSEL_FAIL,
        error: error
    };
};

export const fetchCarousel = () => {
    return dispatch => {
        dispatch(carouselStart());
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
        storeCarouselData.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        dispatch(carouselSuccess( tempProducts ));

       
    };
};