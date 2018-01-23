let initialState = {
    isLoading: false,
    isEmpty: false,
    isError: false,
    data: [],
    message: null
};

export function refunds(state = initialState, action){
    switch(action.type){
        case 'FETCH_REFUNDS':
            return Object.assign({}, state, {
                isLoading: true,
                isEmpty: false,
                isError: false
            });
        case 'RECEIVE_REFUNDS':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: action.payload
            });
        case 'STORE_REFUNDS':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: false,
                isError: false,
                data: [...state.data, action.payload],
                message: null
            });
        case 'FETCH_REFUNDS_NO_DATA':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: true,
                isError: false,
                data: null,
                message: action.message
            });
        case 'FETCH_REFUNDS_ERROR':
            return Object.assign({}, state, {
                isLoading: false,
                isEmpty: false,
                isError: true,
                data: null,
                message: action.message
            });
        default:
            return state;
    }
}