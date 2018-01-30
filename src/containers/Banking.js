import React, {Component} from 'react'
import {connect} from 'react-redux'

import Loading from '../components/Loading'
import AccountsService from '../services/AccountsService'
import BankingForm from '../components/forms/BankingForm'

class Banking extends Component {

    componentDidMount() {
        this.props.fetch()
        this.props.fetch_banks()
    }

    store = values => {
        this.props.store(values);
    }

    //TODO: Create a high order component to improve this component
    renderCards(account) {
        return (
            <div className='card' key={`account_${account.id}`}>
                <div className="card__title">
                    {account.bank_code}
                </div>
                <div className="card__data">
                    <ul className="card__unordered-list">
                        <li className="card__list-item"><b>Agencia:</b> {account.bank_agency}</li>
                        <li className="card__list-item"><b>Conta:</b> {account.bank_account}</li>
                        <li className="card__list-item"><b>Comentários:</b> {account.comment}</li>
                    </ul>
                </div>
            </div>
        )
    }

    banksToSelect(banks = []) {
        return banks.map((bank) => ({value: bank.code, label: bank.name}));
    }

    render() {

        const dataToSelect = this.banksToSelect(this.props.banks)
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
        store: account => {
            dispatch(AccountsService.storeAccounts(account))
        },
        fetch_banks: () => {
            dispatch(AccountsService.fetchBanks())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking);