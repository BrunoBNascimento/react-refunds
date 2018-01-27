import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loading from '../Loading';
import RefundsForm from '../forms/RefundsForm';
import RefundService from '../../services/RefundService';
import AccountsService from '../../services/AccountsService';
import '../../css/App.css';

class Refunds extends Component {

    constructor() {
        super();
        this.refund = {};
    }

    componentWillMount() {
        this.props.fetch();
        this.props.fetch_accounts();
    }

    store = values => {

        console.log(values);

        //event.preventDefault();
        //this.props.store(this.refund);
    }

    accountsToSelectData(accounts) {
        let data = [];
        if (accounts.length > 0) {
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

    //TODO: Create a high order component to improve this component
    renderCards(refund) {
        return (
            /*
            * "id": 1,
              "title": "Uber",
              "value": 10.51,
              "comment": "Barueri alphaville até a rodoviaria tietê",
              "account_id": 1,
              "status": "ABERTO"
            * */
            <div className='card' key={`account_${refund.id}`}>
                <div className="card__title">
                    {refund.title}
                </div>
                <div className="card__data">
                    <ul>
                        <li>Valor: {refund.value}</li>
                        <li>Comentário: {refund.comment}</li>
                        <li>Conta: {refund.account_id}</li>
                        <li>Status: {refund.status}</li>
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        const {data, isLoading} = this.props.refunds;
        const {store} = this;
        const accounts = this.props.accounts.data;

        return (
            <div>
                <RefundsForm onSubmit={store}/>
                {isLoading ? <Loading/> : data.map((refund) => this.renderCards(refund))}
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
        store: (refund) => {
            dispatch(RefundService.storeRefunds(refund));
        },
        fetch_accounts: () => {
            dispatch(AccountsService.fetchAccounts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Refunds);
