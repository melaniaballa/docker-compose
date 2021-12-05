import { userConstants } from '../constants/auth';
import { browserHistory } from '../history';

const login = (username) => {
    console.log(`====Mela: actions: login: ${username}`);

    // const history = createBrowserHistory({forceRefresh:true});
    console.log(`====Mela: Action login: history: ${browserHistory}`);
    browserHistory.push('/');
    // browserHistory.push('/')

    return { type: userConstants.LOGIN, username };
};

export const userActions = {
  login
};