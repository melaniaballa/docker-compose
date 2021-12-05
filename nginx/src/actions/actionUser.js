import { userConstants } from '../constants/auth';

const login = (username) => {
    return { type: userConstants.LOGIN, username };
};

export const userActions = { login };