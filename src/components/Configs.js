import React, {Component} from 'react';
import { connect } from 'react-redux';

import ContainerFluid from './ContainerFluid';
import BootstrapInput from './BootstrapInput';
import Col from './Col';
import FormRow from './FormRow';
import FormGroup from './FormGroup';
import ConfigsService from '../services/ConfigsService';

class Configs extends Component{

    componentDidMount(){
        this.props.fetch();
    }

    render(){
        console.log(this.props.configs);
        return(
            <ContainerFluid>
                <form>
                    <FormRow>
                        <Col col='md-6'>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='name' type='text' placeholder='Ex: Qui Gon Jinn' label='Nome'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='email' type='text' placeholder='ex: qui.gon@jediorder.com' label='email'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='rg' type='text' placeholder='ex: 19511685' label='RG'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='cpf' type='text' placeholder='Ex: 018.867.066-11' label='CPF'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='password' type='password' placeholder='*************' label='Sua Senha'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </Col>
                        </Col>
                    </FormRow>
                </form>
            </ContainerFluid>
        );
    }
}

const mapStateToProps = state => {
    return {
        configs: state.configs
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => {
            dispatch(ConfigsService.fetchConfigs());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Configs);