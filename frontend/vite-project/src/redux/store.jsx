import { createStore, combineReducers,applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { ProductDetailsReducer, ProductReducer } from "../reducers/ProductReducer";
import { cartReducer } from "../reducers/CartReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { allOrdersReducer, myOrdersReducer, newOrderReduce } from "../reducers/OrderReducer";



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Only persist the user reducer
};


const reducer = combineReducers({
  products:ProductReducer,
  productDetails:ProductDetailsReducer,
  cart:cartReducer,
});


const persistedReducer = persistReducer(persistConfig, reducer);


let initialState = {

  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      shippingInfo : localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {}
      
  },
}

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

