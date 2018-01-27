import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import LoginForm from './forms/LoginForm';

export default class Login extends Component {

    //MOCKED GET LOGIN, JUST TO TEST. TODO: Mock a post login
    doLogin(values) {
        axios.get('http://localhost:3001/login')
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('auth-token', response.data.token);
                    browserHistory.push('/');
                }
            })
    }

    render() {
        return (
            <div className='login'>
                <LoginForm onSubmit={this.doLogin}/>
            </div>
        );
    }
}