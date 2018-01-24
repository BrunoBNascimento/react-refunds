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
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

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
