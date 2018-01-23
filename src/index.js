import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Login from './components/Login';
import Banking from './components/Banking';
import Configs from './components/Configs';
import Refunds from './components/Refunds';
import {refunds} from './reducers/refundsReducer';
import {accounts} from './reducers/accountsReducer';
import {configs} from './reducers/configsReducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({refunds, accounts, configs});
const store = createStore(reducers, reduxDevTools, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/login" component={Login} />
                <Route path="/" component={App}>
                    <IndexRoute component={Refunds}/>
                    <Route path="/refunds" component={Refunds} />
                    <Route path="/banking" component={Banking} />
                    <Route path="/configs" component={Configs} />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();
