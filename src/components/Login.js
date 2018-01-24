import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import Col from './Col';
import BootstrapInput from './BootstrapInput';
import ContainerFluid from './ContainerFluid';

export default class Configs extends Component{

    //MOCKED GET LOGIN, JUST TO TEST. TODO: Mock a post login
    doLogin(event){
        event.preventDefault();

        axios.get('http://localhost:3001/login')
            .then(response => {
                console.log(response);

                if(response.status === 200) {
                    localStorage.setItem('auth-token', response.data.token);
                    browserHistory.push('/');
                }
            })
    }

    render(){
        return(
            <ContainerFluid>
                <form className="login-form align-middle" onSubmit={this.doLogin}>
                        <div className="row justify-content-md-center">
                            <Col col="md-6">
                                <BootstrapInput id='login' placeholder='Ex: darth.vader@deathstar.com' label='E-mail'/>
                            </Col>
                        </div>
                    <div className="row justify-content-md-center">
                        <Col col="md-6">
                            <BootstrapInput  id='password' placeholder='************' label='Senha'/>
                        </Col>
                    </div>
                    <div className="row justify-content-md-center">
                        <Col col="md-6">
                            <button type="submit" className="btn btn-primary col-4">Login</button>
                        </Col>
                    </div>
                </form>
            </ContainerFluid>
        );
    }
}