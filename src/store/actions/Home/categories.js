// import axios from 'axios';
import { storeCategoryData } from '../../../apiDemoData/Home/Category/data';
import * as actionTypes from './actionTypes';

export const categoriesStart = () => {
    return {
        type: actionTypes.CATEGORIES_START
    };
};


export const categoriesSuccess = ( tempProducts ) => {
    return {
        type: actionTypes.CATEGORIES_SUCCESS,
        categoriesHistory: tempProducts
    };
};

export const categoriesFail = (error) => {
    return {
        type: actionTypes.CATEGORIES_FAIL,
        error: error
    };
};


export const CategorySuccess = (tempProducts) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: tempProducts
    };
}; 

export const fetchCategory = (id) => {
    return dispatch => {
        const tempProducts = [];
        for ( let key in storeCategoryData[id].categoryDetail ) {
            tempProducts.push( {
                ...storeCategoryData[id].categoryDetail[key]
            } );
            // console.log(storeCategoryData[id].categoryDetail[key]);
        }
        dispatch(CategorySuccess( tempProducts));
    }
}; 


export const SubCategorySuccess = (tempProducts) => {
    return {
        type: actionTypes.SET_SUB_CATEGORY,
        subCategory: tempProducts
    }
}

export const fetchSubCategory = (catId, subId) => {
    return dispatch => {
        const tempProducts = [];
        // console.log(storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail);
        for ( let key in storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail ) {
            tempProducts.push({
                ...storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[key]
            });
        }
        // console.log(tempProducts);
        dispatch(SubCategorySuccess(tempProducts));
    }
}

export const AdditionalCategorySuccess = (tempProducts) => {
    return {
        type: actionTypes.SET_ADDITIONAL_CATEGORY,
        additionalCategory: tempProducts
    }
}

export const fetchAdditionalCategory = ( catId, subId, addId ) => {
    return dispatch => {
        const tempProducts = [];
        // console.log(storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail);
        for ( let key in storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail ) {
            tempProducts.push({
                ...storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[key]
            });
        }
        // console.log(tempProducts);
        dispatch(AdditionalCategorySuccess(tempProducts));
    }
}

export const ProductDetailsSuccess = (tempProducts) => {
    return {
        type: actionTypes.SET_PRODUCT,
        prouductDetails: tempProducts
    }
}

export const fetchProductDetails = (catId, subId, addId, proId) => {
    return dispatch => {
        let tempProducts  = [];
        var i = 0;
        do {
            tempProducts.push({
                ...storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId]
            });
            
            i++;
            // console.log(storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId]);
          }
        while (i < 1);
        // console.log(storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId]);
        // for ( let key in storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId] ) {
        //     tempProducts.push({
        //         ...storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId]
        //     });
        //     // console.log(storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId][key])
        // }
        // tempProducts.push({
        //     ...storeCategoryData[catId].categoryDetail[subId].SubCategoryDetail[addId].AdditionalCategoryDetail[proId]
        // });
        console.log(tempProducts);
        
        dispatch(ProductDetailsSuccess(tempProducts));
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(categoriesStart());
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
        dispatch(categoriesSuccess( tempProducts ));

    };
};