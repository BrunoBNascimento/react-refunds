let initialState = {
    isLoading: false,
    isEmpty: false,
    isError: false,
    data: []
};

export function accounts(state = initialState, action){
    switch(action.type){
        case 'FETCH_ACCOUNTS':
            return Object.assign({}, state, {
                isLoading: true,
                isEmpty: false,
                isError: false,
                message: null
            });
        case 'RECEIVE_ACCOUNTS':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: action.payload
            });
        case 'RECEIVE_BANKS':
            return Object.assign({}, state, {
                isLoading:false,
                isEmpty: false,
                isError: false,
                banks: action.payload
            });
        case 'STORE_ACCOUNTS':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: [...state.data, action.payload],
                message: null
            });
        case 'FETCH_ACCOUNTS_NO_DATA':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: true,
                data: null,
                message: action.message
            });
        case 'FETCH_ACCOUNTS_ERROR':
            return Object.assign({}, state, {
                isLoading: false,
                isError: true,
                data: null,
                message: action.message
            });
        default:
            return state;
    }
}