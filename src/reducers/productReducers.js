import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    PRODUCTS_DETAIL_FAIL,
    PRODUCTS_DETAIL_REQUEST,
    PRODUCTS_DETAIL_SUCCESS
} from '../constants/productConstants'

export const productsReducer = (state = {products: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products : []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products : action.payload.products,
                productsCount: action.payload.ProdCount
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
        
    }
}

export const productDetailReducer = (state = {products: {}}, action)=>{
    switch(action.type){
        case PRODUCTS_DETAIL_REQUEST:
            return {
                ...state,
                loading : true
            }

        case PRODUCTS_DETAIL_SUCCESS: 
            return {
                loading : false,
                products : action.payload
            }

        case PRODUCTS_DETAIL_FAIL:
            return {
                ...state,
                error : action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}