import axios from 'axios'
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    PRODUCTS_DETAIL_FAIL,
    PRODUCTS_DETAIL_REQUEST,
    PRODUCTS_DETAIL_SUCCESS
} from '../constants/productConstants'

export const getProducts = () => async(disptach)=>{
    try {
        disptach({
            type: ALL_PRODUCTS_REQUEST
        })
        const {data} = await axios.get('api/v1/products')
        disptach({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        disptach({
            type : ALL_PRODUCTS_FAIL,
            payload : error
        })
    }
}

//clear errors
export const clearErrors = () => async(disptach)=>{
    disptach({
        type: CLEAR_ERRORS
    })
}

export const getProductDetails = (id) => async(disptach)=>{
    try {
        disptach({
            type: PRODUCTS_DETAIL_REQUEST
        })
        const {details} = await axios.get(`api/v1/products/${id}`)
        disptach({
            type: PRODUCTS_DETAIL_SUCCESS,
            payload: details.product
        })
        
    } catch (error) {
        disptach({
            type : PRODUCTS_DETAIL_FAIL,
            payload : error
        })
    }
}

// the productReducer takes the new action and the current state and perform action on the currrent state and produces a new state and that is stored in the store