import React, {Component} from 'react';
import FormGroup from './FormGroup';

export default class BootstrapFile extends Component{

    render() {
        return (
            <FormGroup>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id={this.props.id} onChange={this.props.change}/>
                    <label className="custom-file-label" htmlFor={this.props.id}>Selecione o arquivo...</label>
                </div>
            </FormGroup>
        );
    }
}