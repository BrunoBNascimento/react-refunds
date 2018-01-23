import {fetchAccounts, receiveAccounts, receiveBanks, storeAccounts} from '../actions/accountsActions';
import axios from 'axios';
export default class AccountsService{

    static fetchAccounts(){
        return dispatch => {
            dispatch(fetchAccounts());
            axios.get('http://localhost:3001/accounts')
                .then(response => {
                    dispatch(receiveAccounts(response.data));
                })
        }
    }

    static storeAccounts(account){
        return dispatch => {
            axios.post('http://localhost:3001/accounts', account)
                .then(response => {
                    dispatch(storeAccounts(response.data));
                })
                .catch(error => {

                });
        }
    }

    static fetchBanks(){
        return dispatch => {
            axios.get('http://localhost:3001/banks')
                .then(response => {
                    dispatch(receiveBanks(response.data));
                })
                .catch(error => {

                })
        }
    }
}