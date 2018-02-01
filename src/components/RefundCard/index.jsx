import React, {Component} from 'react'
import {floatToReal} from '../../utils/FormatterUtils'
import Card from '../Card'
import CardTitle from '../Card/CardTitle'
import CardData from '../Card/CardData'
import StatusBadge from '../StatusBadge'

const refundCard = ({isAdmin, refund, wrappedProps}) => (WrappedComponent) => {
    return class RefundCard extends Component{
        render(){
            return(
                <Card>
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
                        {
                            isAdmin ? <WrappedComponent {...wrappedProps} /> : ''
                        }
                    </CardData>
                </Card>
            )
        }
    }
}
export default refundCard