import React, {Component} from 'react';
import {connect} from 'react-redux';

import FormRow from './FormRow';
import Col from './Col';
import ContainerFluid from './ContainerFluid';
import BootstrapInput from './BootstrapInput';
import BootstrapSelect from './BootstrapSelect';
import BootstrapTextarea from './BootstrapTextarea';
import AccountsService from '../services/AccountsService';
import Loading from './Loading';

class Banking extends Component {

    constructor() {
        super();
        this.account = {};
    }

    componentDidMount() {
        this.props.fetch();
        this.props.fetch_banks();
    }

    store = (event) => {
        event.preventDefault();
        event.target.reset();
        this.props.store(this.account);
    }

    handleChange = (event) => {
        this.account[event.target.id] = event.target.value;
    }

    createTableRows() {
        if (this.props.accounts.isLoading)
            return (
                <tr>
                    <td colSpan="4">
                        <Loading/>
                    </td>
                </tr>
            );

        return this.props.accounts.data.map(account => {
            return (
                <tr key={account.id}>
                    <td>{account.bank_code}</td>
                    <td>{account.bank_agency}</td>
                    <td>{account.bank_account}</td>
                    <td>{account.comment}</td>
                </tr>
            );
        });
    }

    banksToSelect(banks = []) {
        let dataToSelect = [];

        banks.map((bank, idx) => {
            dataToSelect.push({
                id: idx,
                value: bank.code,
                label: bank.name
            });
        });

        return dataToSelect;
    }

    render() {

        let dataToSelect = this.banksToSelect(this.props.banks);

        return (
            <ContainerFluid>
                <form onSubmit={this.store}>
                    <FormRow>
                        <Col col="md-6">
                            <BootstrapSelect
                                id='bank_code'
                                label='Banco'
                                data={dataToSelect}
                                isLoading={this.props.accounts.isLoading}
                                change={this.handleChange}
                            />
                        </Col>
                        <Col col="md-6">
                            <BootstrapInput
                                id='bank_agency'
                                placeholder='Ex: 1611'
                                label='Agencia'
                                change={this.handleChange}
                            />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col col="md-6">
                            <BootstrapInput
                                id='bank_account'
                                placeholder='Ex: 46149-4'
                                label='Conta'
                                change={this.handleChange}
                            />
                        </Col>
                        <Col col="md-6">
                            <BootstrapTextarea
                                id='comment'
                                placeholder='Ex: Conta salário'
                                label='Comentário'
                                change={this.handleChange}
                            />
                        </Col>
                    </FormRow>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Banco</th>
                        <th scope="col">Agencia</th>
                        <th scope="col">Conta</th>
                        <th scope="col">Comentário</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.createTableRows()}
                    </tbody>
                </table>
            </ContainerFluid>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        banks: state.accounts.banks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => {
            dispatch(AccountsService.fetchAccounts());
        },
        store: (account) => {
            dispatch(AccountsService.storeAccounts(account));
        },
        fetch_banks: () => {
            dispatch(AccountsService.fetchBanks());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking);