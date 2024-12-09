import axios from "axios";

import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CLEAR_ERRORS,
} from '../constants/OrderConstant';



// create order
export const createOrder = (order) => async(dispatch) =>{
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, 
        };
        const {data} = await axios.post('http://localhost:3000/api/auth/order/new' ,order,config);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
            });
        
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message });

        
    };

};


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

