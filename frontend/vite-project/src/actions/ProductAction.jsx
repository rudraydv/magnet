import axios from 'axios';
import {
     ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS,
     ALL_PRODUCT_FAIL,

     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAIL,


     CLEAR_ERRORS 
    } from '../constants/ProductConstant';



// get product from backend api

export const getProducts = ( keyword = "",currentPage = 1, price = [0,60000],category,ratings = 0 ) => async(dispatch) =>{
    try {
        dispatch({type:ALL_PRODUCT_REQUEST});
        

        let productApi = `http://localhost:3000/api/auth/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

    
        if(category){
            productApi = `http://localhost:3000/api/auth/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
        }

        const {data} = await axios.get(productApi);
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }
};

export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type:CLEAR_ERRORS,
    })
}