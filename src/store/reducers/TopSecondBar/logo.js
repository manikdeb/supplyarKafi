import * as actionTypes from '../../actions/TopSecondBar/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    logoHistory: [],
    error: null,
    loading: false
};

const logoStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const logoSuccess = (state, action) => {
    return updateObject( state, { 
        logoHistory: action.logoHistory ,
        error: null,
        loading: false
     } );
};

const logoFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGO_START: return logoStart(state, action);
        case actionTypes.LOGO_SUCCESS: return logoSuccess(state, action);
        case actionTypes.LOGO_FAIL: return logoFail(state, action);
        default:
            return state;
    }
};

export default reducer;