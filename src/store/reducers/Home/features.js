import * as actionTypes from '../../actions/Home/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    featuresHistory: [],
    error: null,
    loading: false
};

const featuresStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const featuresSuccess = (state, action) => {
    return updateObject( state, { 
        featuresHistory: action.featuresHistory ,
        error: null,
        loading: false
     } );
};

const featuresFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FEATURES_START: return featuresStart(state, action);
        case actionTypes.FEATURES_SUCCESS: return featuresSuccess(state, action);
        case actionTypes.FEATURES_FAIL: return featuresFail(state, action);
        default:
            return state;
    }
};

export default reducer;