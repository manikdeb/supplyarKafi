import * as actionTypes from '../../actions/Home/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    newArrivalsHistory: [],
    error: null,
    loading: false
};

const newArrivalsStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const newArrivalsSuccess = (state, action) => {
    return updateObject( state, { 
        newArrivalsHistory: action.newArrivalsHistory ,
        error: null,
        loading: false
     } );
};

const newArrivalsFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEWARRIVALS_START: return newArrivalsStart(state, action);
        case actionTypes.NEWARRIVALS_SUCCESS: return newArrivalsSuccess(state, action);
        case actionTypes.NEWARRIVALS_FAIL: return newArrivalsFail(state, action);
        default:
            return state;
    }
};

export default reducer;