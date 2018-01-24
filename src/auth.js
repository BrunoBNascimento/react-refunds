export function verifyAuth(nextState, replace) {
    if(localStorage.getItem('auth-token') === null){
        replace('/login');
    }
}