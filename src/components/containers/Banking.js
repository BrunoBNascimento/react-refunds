import React, {Component} from 'react'
import {connect} from 'react-redux'

import Loading from '../Loading'
import AccountsService from '../../services/AccountsService'
import BankingForm from '../forms/BankingForm'

class Banking extends Component {

    constructor() {
        super()
        this.account = {};
    }

    componentDidMount() {
        this.props.fetch()
        this.props.fetch_banks()
    }

    store = values => {
        console.log(values)
    }

    //TODO: Create a high order component to improve this component
    renderCards(account) {
        return (
            <div className='card' key={`account_${account.id}`}>
                <div className="card__title">
                    {account.bank_code}
                </div>
                <div className="card__data">
                    <ul>
                        <li>Agencia: {account.bank_agency}</li>
                        <li>Conta: {account.bank_account}</li>
                        <li>Comentários: {account.comment}</li>
                    </ul>
                </div>
            </div>
        )
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

        return dataToSelect
    }

    render() {

        let dataToSelect = this.banksToSelect(this.props.banks)
        const {data, isLoading} = this.props.accounts

        return (
            <div>
                <BankingForm onSubmit={this.store}/>
                {isLoading ? <Loading/> : data.map(account => this.renderCards(account))}
            </div>
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
            dispatch(AccountsService.fetchAccounts())
        },
        store: (account) => {
            dispatch(AccountsService.storeAccounts(account))
        },
        fetch_banks: () => {
            dispatch(AccountsService.fetchBanks())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking);