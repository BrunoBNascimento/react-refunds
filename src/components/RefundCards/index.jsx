import React, {Component} from 'react'
import refundCard from '../RefundCard'
import AdminOptions from '../AdminOptions'

export default class RefundCards extends Component{

    updateStatus = id => {
        return status => {
            const {props} = this
            props.updateStatus(status, id)
        }
    }

    createCards(refund) {
        const updateStatus = this.updateStatus(refund.id)

        const {isAdmin} = this.props
        const wrappedProps = {
            updateStatus
        }
        const RefundCard = refundCard({isAdmin, refund, wrappedProps})(AdminOptions)
        return <RefundCard key={`refundCard_${refund.id}`}/>
    }

    renderRefunds(refunds){
        return refunds.map(refund => this.createCards(refund))
    }

    render(){
        const {refunds} = this.props;
        return this.renderRefunds(refunds);
    }
}