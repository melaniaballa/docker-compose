import { userConstants } from '../constants/auth';
import { createBrowserHistory } from 'history';

export const userActions = {
    login
};

function login(username) {
    return () => {
        console.log(`====Mela: actions: login: ${username}`);

        const history = createBrowserHistory();
        console.log(`====Mela: Action login: history: ${history}`);
        history.push('/');

        return { type: userConstants.LOGIN, username }
    };
}
