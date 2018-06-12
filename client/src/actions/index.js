// Update User Info on Login
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (userInfo) => ({
    type: USER_LOGIN,
    content: userInfo
});
