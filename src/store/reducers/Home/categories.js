import * as actionTypes from '../../actions/Home/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    categoriesHistory: [],
    category: [],
    subCategory: [],
    additionalCategory: [],
    prouductDetails: [],
    error: null,
    loading: false
};

const categoriesStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const categoriesSuccess = (state, action) => {
    return updateObject( state, { 
        categoriesHistory: action.categoriesHistory ,
        error: null,
        loading: false
     } );
};

const categoriesFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

export const CategorySuccess = (state, action) => {
    return updateObject( state, {
        category: action.category ,
        error: action.error,
        loading: false
    });
}

export const SubCategorySuccess = (state, action) => {
    return updateObject( state, {
        subCategory: action.subCategory ,
        error: action.error,
        loading: false
    });
}

export const AdditionalCategorySuccess = (state, action) => {
    return updateObject( state, {
        additionalCategory: action.additionalCategory ,
        error: action.error,
        loading: false
    });
}

export const ProductDetailsSuccess = (state, action) => {
    return updateObject( state, {
        prouductDetails: action.prouductDetails ,
        error: action.error,
        loading: false
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CATEGORIES_START: return categoriesStart(state, action);
        case actionTypes.CATEGORIES_SUCCESS: return categoriesSuccess(state, action);
        case actionTypes.CATEGORIES_FAIL: return categoriesFail(state, action);
        case actionTypes.SET_CATEGORY: return CategorySuccess(state, action);
        case actionTypes.SET_SUB_CATEGORY: return SubCategorySuccess(state, action);
        case actionTypes.SET_ADDITIONAL_CATEGORY: return AdditionalCategorySuccess(state, action);
        case actionTypes.SET_PRODUCT: return ProductDetailsSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;