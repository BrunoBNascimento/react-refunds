import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loading from '../components/Loading';
import RefundsForm from '../components/forms/RefundsForm';
import {floatToReal, realToFloat} from '../utils/FormatterUtils';
import RefundService from '../services/RefundService';
import AccountsService from '../services/AccountsService';
import '../css/App.css';

class Refunds extends Component {

    componentWillMount() {
        this.props.fetch();
        this.props.fetch_accounts();
    }

    storeRefunds = values => {
        this.props.store(values);
    }

    accountsToSelectData(accounts) {
        return accounts.map(account => ({label: `${account.bank_agency} / ${account.bank_account}`, value: account.id}))
    }

    //TODO: Create a high order component to improve this component
    renderCards(refund) {
        return (
            <div className='card' key={`account_${refund.id}`}>
                <div className="card__title">
                    {refund.title}
                </div>
                <div className="card__data">
                    <ul className="card__unordered-list">
                        <li className="card__list-item">
                            <b>Valor:</b> {floatToReal(refund.value)}
                        </li>
                        <li className="card__list-item">
                            <b>Comentário:</b> {refund.comment}
                        </li>
                        <li className="card__list-item">
                            <b>Conta:</b> {refund.account_id}
                        </li>
                        <li className="card__list-item">
                            <b>Status:</b> {refund.status}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        const {data, isLoading} = this.props.refunds;
        const {storeRefunds} = this;
        const accounts = this.accountsToSelectData(this.props.accounts.data);

        return (
            <div>
                <RefundsForm accounts={accounts} onSubmit={storeRefunds}/>
                <div className='container refunds-container'>
                    {isLoading ? <Loading/> : data.map(refund => this.renderCards(refund))}
                </div>
            </div>
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
        storeRefunds: refund => {
            dispatch(RefundService.storeRefunds(refund));
        },
        fetch_accounts: () => {
            dispatch(AccountsService.fetchAccounts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Refunds);