import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer } from './reducers/productReducers'
import { productDetailReducer} from './reducers/productReducers'

const reducer = combineReducers({
    products: productsReducer,
    productDetails : productDetailReducer
})

let initialState = {}

const middlware = [thunk];
const store  = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store;
