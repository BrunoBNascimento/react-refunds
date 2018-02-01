import React from 'react'
import {Provider} from 'react-redux'
import Logout from './components/Logout'
import Configs from './containers/Configs'
import Banking from './containers/Banking'
import Refunds from './containers/Refunds'
import Login from './components/Login'
import ClientRoot from './App'
import AdminApp from './AdminApp'
import Authorization from './components/Authorization'
import configureStore from './configureStore'
import {isAuthenticated} from './utils/AuthUtils'
import {
    BACKOFFICE_PATH,
    BANKING_PATH,
    CONFIGS_PATH,
    LOGIN_PATH,
    LOGOUT_PATH,
    ROOT_PATH
} from './constants/RouterConstants'
import {
    Router,
    Route,
    browserHistory,
    IndexRoute
} from 'react-router'

const store = configureStore()
const Client = Authorization(['client']);
const Admin = Authorization(['admin']);

function verifyAuth(nextState, replace){
    if(!isAuthenticated()) replace('/login')
}

const Routes = () => {
    return(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path={LOGIN_PATH} component={Login} />
                <Route path={LOGOUT_PATH} component={Logout} />
                <Route path={BACKOFFICE_PATH} component={Admin(AdminApp)} onEnter={verifyAuth} />
                <Route path={ROOT_PATH} component={Client(ClientRoot)} onEnter={verifyAuth}>
                    <IndexRoute component={Refunds}/>
                    <Route path={BANKING_PATH} component={Banking} />
                    <Route path={CONFIGS_PATH} component={Configs} />
                </Route>
            </Router>
        </Provider>
    )
}
export default Routes