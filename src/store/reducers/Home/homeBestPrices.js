import * as actionTypes from '../../actions/Home/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    bestPricesHistory: [],
    error: null,
    loading: false
};

const bestPricesStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const bestPricesSuccess = (state, action) => {
    return updateObject( state, { 
        bestPricesHistory: action.bestPricesHistory ,
        error: null,
        loading: false
     } );
};

const bestPricesFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.BESTPRICES_START: return bestPricesStart(state, action);
        case actionTypes.BESTPRICES_SUCCESS: return bestPricesSuccess(state, action);
        case actionTypes.BESTPRICES_FAIL: return bestPricesFail(state, action);
        default:
            return state;
    }
};

export default reducer;