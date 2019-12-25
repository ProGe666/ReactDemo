import {LOGIN} from "../actions/auth.action";
export const authReducer =(state = null, action) =>{
    switch (action.type) {
        case LOGIN:
            //console.log(action.payload);
            return action.payload.success ? action.payload.user : null;
        default:
            return state;

    }
};
