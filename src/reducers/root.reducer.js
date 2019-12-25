import {combineReducers} from "redux";
import {nameReducer} from "./name.reducer";
import {productsReducer} from "./products.reducer";
import  {reducer as formReducer} from 'redux-form';
import {authReducer} from "./auth.reducer";
export const rootReducer = combineReducers({
    names: nameReducer,
    products:productsReducer,
    user:authReducer,
    form:formReducer
});
