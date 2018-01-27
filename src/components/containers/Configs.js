import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loading from '../Loading';
import ConfigsService from '../../services/ConfigsService';
import ConfigsForm from '../forms/ConfigsForm';

class Configs extends Component {

    constructor() {
        super();
        this.config = {}
    }

    componentDidMount() {
        this.props.fetch();
    }

    update = () => {
        this.props.update();
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Loading/> : <ConfigsForm onSubmit={this.update}/>}
            </div>
        );

    }
}

const
    mapStateToProps = state => {
        return {
            configs: state.configs
        }
    }

const
    mapDispatchToProps = dispatch => {
        return {
            fetch: () => {
                dispatch(ConfigsService.fetchConfigs());
            },
            update: (config) => {
                dispatch(ConfigsService.updateConfigs(config));
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Configs);