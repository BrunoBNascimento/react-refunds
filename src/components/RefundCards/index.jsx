import React, {Component} from 'react'
import refundCard from '../RefundCard'
import AdminOptions from '../AdminOptions'

export default class RefundCards extends Component{

    updateStatus = (status, id) => {
        const {props} = this
        props.updateStatus(status, id);
    }

    createCards(refund) {
        const {isAdmin, updateStatus} = this.props
        const wrappedProps = {
            refundId: refund.id,
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