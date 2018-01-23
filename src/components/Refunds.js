import React, {Component} from 'react';
import RefundContent from './RefundContent';
import RefundList from './RefundList';
import BootstrapInput from './BootstrapInput';
import BootstrapFile from './BootstrapFile';
import BootstrapSelect from './BootstrapSelect';
import BootstrapTextarea from './BootstrapTextarea';
import Col from './Col';
import FormRow from './FormRow';
import ContainerFluid from './ContainerFluid';
import Loading from './Loading';

import RefundService from '../services/RefundService';
import AccountsService from '../services/AccountsService';
import {connect} from 'react-redux';
import '../App.css';

class Refunds extends Component {

    constructor(){
        super();
        this.refund = {};
    }

    componentWillMount(){
        this.props.fetch();
        this.props.fetch_accounts();
    }

    store(event){
        event.preventDefault();
        this.props.store(this.refund);
    }

    handleChange(event){
        this.refund[event.target.id] = event.target.value;
    }

    accountsToSelectData(accounts){
        let data = [];
        if(accounts.length > 0){
            accounts.map(account => {
                data.push({
                    id: account.id,
                    label: `${account.bank_agency} / ${account.bank_account}`,
                    value: account.id
                });
                return data;
            });
        }
        return data;
    }

    createTableRows(){
        if(this.props.refunds.isLoading){
            return(
                <tr>
                    <td colSpan="4">
                        <Loading />
                    </td>
                </tr>
            );
        }

        return this.props.refunds.data.map((refund)=>{
            return (
                <tr key={refund.id}>
                    <td>{refund.title}</td>
                    <td>R${refund.value}</td>
                    <td>1611/49146-4</td>
                    <td>{refund.comment}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <ContainerFluid>
                <RefundContent>
                    <form>
                        <FormRow>
                            <Col col="md-6">
                                <BootstrapInput id='title' type='text' change={this.handleChange.bind(this)} placeholder='Ex: Uber' label='O que foi gasto?'/>
                            </Col>
                            <Col col="md-6">
                                <BootstrapInput  id='value' type='text' change={this.handleChange.bind(this)} placeholder='Ex: 15,90' label='Qual valor?'/>
                            </Col>
                        </FormRow>
                        <FormRow>
                            <Col col="md-6">
                                <BootstrapSelect data={this.accountsToSelectData(this.props.accounts.data)} isLoading={this.props.accounts.isLoading} id='account_id' change={this.handleChange.bind(this)} label='Conta bancária' />
                            </Col>
                            <Col col="md-6">
                                <BootstrapFile id='fiscal_note' change={this.handleChange.bind(this)} label='Nota fiscal'/>
                            </Col>
                        </FormRow>
                        <FormRow>
                            <Col col="md-12">
                                <BootstrapTextarea id='comment' change={this.handleChange.bind(this)} label='Comentários'/>
                            </Col>
                        </FormRow>
                        <button type="submit" onClick={this.store.bind(this)} className="btn btn-primary">Salvar</button>
                    </form>
                </RefundContent>

                <RefundList>
                    <h2>Seus reembolsos</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">O que foi gasto?</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Conta</th>
                            <th scope="col">Comentários</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.createTableRows()}
                        </tbody>
                    </table>
                </RefundList>
            </ContainerFluid>
        );
    }
}

const mapStateToProps = state => {
    return {
        refunds: state.refunds,
        accounts: state.accounts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => {
            dispatch(RefundService.fetchRefunds());
        },
        store: (refund) => {
            dispatch(RefundService.storeRefunds(refund));
        },
        fetch_accounts: () =>{
            dispatch(AccountsService.fetchAccounts());
        }
    }
};

const RefundsContainer = connect(mapStateToProps, mapDispatchToProps)(Refunds);

export default RefundsContainer;
