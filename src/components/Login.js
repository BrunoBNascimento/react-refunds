import React, {Component} from 'react';
import Col from './Col';
import BootstrapInput from './BootstrapInput';
import ContainerFluid from './ContainerFluid';

export default class Configs extends Component{
    render(){
        return(
            <ContainerFluid>
                <form className="login-form align-middle">
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