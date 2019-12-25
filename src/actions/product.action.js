import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
const API = 'http://localhost:8080';
export const getProducts = () => {
    //axios.get.put and other actions, the return type is a promise
    //TODO: backend API should be place in environment.js
    const getProductsPromise = axios.get(`${API}/products`);
    return {
        type: 'GET_PRODUCTS',
        payload: getProductsPromise
    };
};
export const addProduct = (product, success, fail) => {
    const addProductPromise = axios.post(
        `${API}/products`,
        product,
        {withCredentials: true}
    ).then(res => {
        //TODO: make sure cb is a function
        res.data.success? success():fail();
        return {
            success: res.data.success,
            product: product
        };
    }).catch(err => {
        fail();
        return {
            success: false
        };
    });
    return {
        type: ADD_PRODUCTS,
        payload: addProductPromise
    };
};
