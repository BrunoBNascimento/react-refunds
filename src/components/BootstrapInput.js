import React, {Component} from 'react';
import FormGroup from './FormGroup';

export default class BootstrapInput extends Component{
    render(){
        return(
            <FormGroup>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} className="form-control" id={this.props.id}
                       placeholder={this.props.placeholder} defaultValue={this.props.value} onChange={this.props.change}/>
            </FormGroup>
        );
    }
};