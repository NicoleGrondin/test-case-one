import { combineReducers } from 'redux';
import {
    USER_LOGIN,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    REQUEST_ALBUMS,
    RECEIVE_ALBUMS,
    ADD_PREFERENCE
} from '../actions';
import {clone} from 'ramda';

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

const preferences = ( state = {
    preferenceList: []
}, action) => {
    switch (action.type) {
        case ADD_PREFERENCE:
            const newPreference = action.content;
            const preferenceList = clone(state.preferenceList);
            preferenceList.push(newPreference);
            return {
                ...state,
                preferenceList: preferenceList
            }
        default:
            return state;
    }
};

const posts = ( state = {
    postList: [],
    isFetching: false,
    hasfetched: false
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                hasFetched: true,
                postList: action.content
            }
        default:
            return state;
    }
};

const albums = ( state = {
    albumList: [],
    isFetching: false,
    hasfetched: false
}, action) => {
    switch (action.type) {
        case REQUEST_ALBUMS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_ALBUMS:
            return {
                ...state,
                isFetching: false,
                hasFetched: true,
                albumList: action.content
            }
        default:
            return state;
    }
};

const reducers = combineReducers({
    userInfo,
    posts,
    albums,
    preferences
});

export default reducers;
