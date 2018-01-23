import React, {Component} from 'react';
import FormGroup from './FormGroup';

export default class BootstrapSelect extends Component {

    renderOptions(){
        if(this.props.isLoading) return <option>Carregando...</option>

        if(!!this.props.data)
            return this.props.data.map(option => {
                    return <option value={option.value} key={option.id}>{option.label}</option>;
                })

    }

    render() {
        return (
            <FormGroup>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select id={this.props.id} onChange={this.props.change} className="form-control">
                    {
                        this.renderOptions()
                    }
                </select>
            </FormGroup>
        );
    }
}