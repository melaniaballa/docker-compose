import { userConstants } from '../constants/auth';
import { browserHistory } from '../history';

export const userActions = {
    login
};

function login(username) {
    return () => {
        console.log(`====Mela: actions: login: ${username}`);

        // const history = createBrowserHistory({forceRefresh:true});
        console.log(`====Mela: Action login: history: ${browserHistory}`);
        browserHistory.push('/');
        // browserHistory.push('/')

        return { type: userConstants.LOGIN, username }
    };
}
