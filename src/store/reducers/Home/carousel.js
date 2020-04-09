import * as actionTypes from '../../actions/Home/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    carouselHistory: [],
    error: null,
    loading: false
};

const carouselStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const carouselSuccess = (state, action) => {
    return updateObject( state, { 
        carouselHistory: action.carouselHistory ,
        error: null,
        loading: false
     } );
};

const carouselFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CAROUSEL_START: return carouselStart(state, action);
        case actionTypes.CAROUSEL_SUCCESS: return carouselSuccess(state, action);
        case actionTypes.CAROUSEL_FAIL: return carouselFail(state, action);
        default:
            return state;
    }
};

export default reducer;