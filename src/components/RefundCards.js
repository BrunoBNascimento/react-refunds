import React, {Component} from 'react'
import Card from '../components/Card/Card'
import CardTitle from '../components/Card/CardTitle'
import CardData from '../components/Card/CardData'
import StatusBadge from '../components/StatusBadge'
import {floatToReal} from '../utils/FormatterUtils'

export default class RefundCards extends Component{

    //TODO: Create a high order component to improve this
    createCards(refund) {
        return (
            <Card key={`account_${refund.id}`}>
                <CardTitle>
                    {refund.title}
                </CardTitle>
                <CardData>
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
                            <StatusBadge status={refund.status} />
                        </li>
                    </ul>
                </CardData>
            </Card>
        )
    }

    renderRefunds(refunds){
        return refunds.map(refund => this.createCards(refund))
    }

    render(){
        const {refunds} = this.props;
        return this.renderRefunds(refunds);
    }
}