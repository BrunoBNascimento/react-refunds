import React, {Component} from 'react';
import FormGroup from './FormGroup';

export default class BootstrapTextarea extends Component{

    render(){
        return(
            <FormGroup>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <textarea type="text" className="form-control" id={this.props.id} onChange={this.props.change}></textarea>
            </FormGroup>
        );
    }
}