import {applyMiddleware, combineReducers, createStore} from "redux";
import {configs} from "./reducers/configsReducer";
import {accounts} from "./reducers/accountsReducer";
import {refunds} from "./reducers/refundsReducer";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const reducers = combineReducers({
        refunds,
        accounts,
        configs
    });

    return createStore(
        reducers,
        reduxDevTools,
        applyMiddleware(thunkMiddleware)
    );
};

export default configureStore;