import { combineReducers } from 'redux';
import {
    USER_LOGIN
} from '../actions';

const userInfo = ( state = {
    isLoggedIn: false,
    userName: ''
}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                userName: action.content.userName
            }
        default:
            return state;
    }
};

const reducers = combineReducers({
    userInfo
});

export default reducers;
