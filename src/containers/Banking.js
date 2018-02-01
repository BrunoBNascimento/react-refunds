import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Loading from '../components/Loading/index'
import BankingCard from '../components/BankingCard'
import AccountsService from '../services/AccountsService'
import BankingForm from '../components/forms/BankingForm'

class Banking extends Component {

    componentDidMount() {
        this.props.fetch()
        this.props.fetch_banks()
    }

    storeAccounts = values => {
        return this.props.storeAccounts(values)
    }

    banksToSelectData(banks = []) {
        return banks.map((bank) => ({value: bank.code, label: bank.name}))
    }

    renderBankingCards(accounts){
        return accounts.map(account => <BankingCard account={account}/>)
    }

    render() {

        const banks = this.banksToSelectData(this.props.banks)
        const {data, isLoading} = this.props.accounts

        return (
            <Fragment>
                <BankingForm banks={banks} onSubmit={this.storeAccounts}/>
                <h1 className='title'>Suas contas</h1>
                <div className='container banks-container'>
                    {isLoading
                        ? <Loading/>
                        : this.renderBankingCards(data)
                    }
                </div>
            </Fragment>
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
        storeAccounts: account => {
            dispatch(AccountsService.storeAccounts(account))
        },
        fetch_banks: () => {
            dispatch(AccountsService.fetchBanks())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking)