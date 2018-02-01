import React, {Component} from 'react'
import Card from '../Card'
import CardTitle from '../Card/CardTitle'
import CardData from '../Card/CardData'

export default class BankingCard extends Component{

    render(){
        const {account} = this.props;
        return(
            <Card key={`banking_${account.id}`}>
                <CardTitle>
                    {account.bank_code}
                </CardTitle>
                <CardData>
                    <ul className="card__unordered-list">
                        <li className="card__list-item"><b>Agencia:</b> {account.bank_agency}</li>
                        <li className="card__list-item"><b>Conta:</b> {account.bank_account}</li>
                        <li className="card__list-item"><b>Comentários:</b> {account.comment}</li>
                    </ul>
                </CardData>
            </Card>
        )
    }
}