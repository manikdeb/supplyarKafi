import * as actionTypes from '../../actions/TopSecondBar/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    searchCategoryOptionHistory: [],
    error: null,
    loading: false
};

const searchCategoryOptionStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const searchCategoryOptionSuccess = (state, action) => {
    return updateObject( state, { 
        searchCategoryOptionHistory: action.searchCategoryOptionHistory ,
        error: null,
        loading: false
     } );
};

const searchCategoryOptionFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEARCH_CATEGORY_OPTION_START: return searchCategoryOptionStart(state, action);
        case actionTypes.SEARCH_CATEGORY_OPTION_SUCCESS: return searchCategoryOptionSuccess(state, action);
        case actionTypes.SEARCH_CATEGORY_OPTION_FAIL: return searchCategoryOptionFail(state, action);
        default:
            return state;
    }
};

export default reducer;