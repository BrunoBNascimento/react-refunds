import React, {Component} from 'react';
import { connect } from 'react-redux';

import ContainerFluid from './ContainerFluid';
import BootstrapInput from './BootstrapInput';
import Col from './Col';
import FormRow from './FormRow';
import FormGroup from './FormGroup';
import ConfigsService from '../services/ConfigsService';
import Loading from './Loading';

class Configs extends Component{

    constructor(){
        super();
        this.config = {}
    }

    componentDidMount(){
        this.props.fetch();
    }

    update = () => {
        this.props.update();
    };

    handleChange = (event) => {
        this.config[event.target.id] = event.target.value;
    };

    renderForm = () => {
        if(this.props.configs.isLoading){
            return(
                <Loading />
            );
        }else{
            return(
                <form onSubmit={this.update}>
                    <FormRow>
                        <Col col='md-6'>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput value={this.props.configs.data.name} change={this.handleChange} id='name' type='text' placeholder='Ex: Qui Gon Jinn' label='Nome'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput value={this.props.configs.data.email} change={this.handleChange} id='email' type='text' placeholder='ex: qui.gon@jediorder.com' label='email'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput value={this.props.configs.data.rg} change={this.handleChange} id='rg' type='text' placeholder='ex: 19511685' label='RG'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput value={this.props.configs.data.cpf} change={this.handleChange} id='cpf' type='text' placeholder='Ex: 018.867.066-11' label='CPF'/>
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='password' type='password' change={this.handleChange} placeholder='*************' label='Sua Senha' />
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <FormGroup>
                                    <BootstrapInput id='confirmPassword' type='password' change={this.handleChange} placeholder='*************' label='Confirme sua Senha' />
                                </FormGroup>
                            </Col>
                            <Col col='md-12'>
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </Col>
                        </Col>
                    </FormRow>
                </form>
            );
        }
    }

    render(){
        return(
            <ContainerFluid>
                {this.renderForm()}
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
        },
        update: (config) => {
            dispatch(ConfigsService.updateConfigs(config));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Configs);