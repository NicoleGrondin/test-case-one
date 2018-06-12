import fetch from 'cross-fetch';

// Update User Info on Login
export const USER_LOGIN = 'USER_LOGIN';

// Posts
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// Albulms
export const REQUEST_ALBUMS = 'REQUEST_ALBUMS';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const userLogin = (userInfo) => ({
    type: USER_LOGIN,
    content: userInfo
});

// Post Actions
export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const receivePosts = (postResponse) => ({
    type: RECEIVE_POSTS,
    content: postResponse
});

function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts());
        return fetch('//jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json()
            })
            .then(json => dispatch(receivePosts(json)))
            .catch(err => {
              console.error(err);
            });
    }
}

// Album Actions
export const requestAlbums = () => ({
    type: REQUEST_ALBUMS
});

export const receiveAlbums = (albumResponse) => ({
    type: RECEIVE_ALBUMS,
    content: albumResponse
});

function fetchAlbums() {
    return dispatch => {
        dispatch(requestAlbums());
        return fetch('//jsonplaceholder.typicode.com/albums')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => dispatch(receiveAlbums(json)))
            .catch(err => {
                console.error(err);
            });
    }
}

export const loadContentView = () => dispatch => {
    Promise.all([
        dispatch(fetchPosts()),
        dispatch(fetchAlbums())
    ]);
    return Promise.resolve();
};
