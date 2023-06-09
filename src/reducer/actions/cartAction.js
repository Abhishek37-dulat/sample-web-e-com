import axios from "axios";

import * as actionTypes from "../constants/cartConstant";

const URL = "https://task-node-js.onrender.com";

export const addToCart = (id, quantity) => async (dispatch) => {
    
  try {
    const { data } = await axios.get(`${URL}/products/${id}`);
    console.log(data)
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};












