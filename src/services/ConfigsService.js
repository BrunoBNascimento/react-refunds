import axios from 'axios';
import {fetchConfigs, receiveConfigs, updateConfigs} from '../actions/configsActions';

export default class ConfigsService{

    static fetchConfigs(){
        return dispatch => {
            dispatch(fetchConfigs());
            axios.get('http://localhost:3001/users')
                .then(configs => {
                    dispatch(receiveConfigs(configs.data));
                })
        }
    }

    static updateConfigs(configs){
        return dispatch => {

        }
    }
}