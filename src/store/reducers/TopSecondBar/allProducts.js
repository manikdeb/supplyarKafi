import * as actionTypes from '../../actions/TopSecondBar/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    allProductsHistory: [],
    error: null,
    loading: false
};

const allProductsStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const allProductsSuccess = (state, action) => {
    return updateObject( state, { 
        allProductsHistory: action.allProductsHistory ,
        error: null,
        loading: false
     } );
};

const allProductsFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ALLPRODUCTS_START: return allProductsStart(state, action);
        case actionTypes.ALLPRODUCTS_SUCCESS: return allProductsSuccess(state, action);
        case actionTypes.ALLPRODUCTS_FAIL: return allProductsFail(state, action);
        default:
            return state;
    }
};

export default reducer;