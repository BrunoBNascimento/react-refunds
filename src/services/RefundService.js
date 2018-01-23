import axios from 'axios';
import {fetchRefunds, receiveRefunds, storeRefunds} from "../actions/refundActions";

export default class RefundService{

    static fetchRefunds(){
        return dispatch => {
            dispatch(fetchRefunds());
            axios.get('http://localhost:3001/refunds')
                .then((response)=>{
                    dispatch(receiveRefunds(response.data));
                });
        }
    }

    static storeRefunds(refund){
        return dispatch => {
            axios.post('http://localhost:3001/refunds', refund)
                .then(response => {
                    dispatch(storeRefunds(response.data));
                })
                .catch(error => {

                });
        }
    }

}