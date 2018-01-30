import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {floatToReal} from '../../utils/FormatterUtils'

const createSelectOptions = accounts => {
    return accounts.map(
        account => <option value={account.value} key={`account_${account.value}`}>{account.label}</option>
    )
}

const Form = props => {
    const {handleSubmit, accounts} = props;
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className="form__group">
                <label htmlFor='title' className='form__label'>
                    O que foi gasto?
                </label>
                <Field component='input' name='title' id='title' type='text' className='form__input'/>
            </div>
            <div className="form__group">
                <label htmlFor='value' className='form__label'>
                    Valor
                </label>
                <Field component='input' name='value' id='value' type='text' className='form__input' normalize={floatToReal}/>
            </div>
            <div className="form__group">
                <label htmlFor='account_id' className='form__label'>
                    Conta
                </label>
                <Field component='select' name='account_id' id='account_id' className='form__input'>
                    <option>Escolha...</option>
                    {createSelectOptions(accounts)}
                </Field>
            </div>
            <div className="form__group">
                <label htmlFor='fiscal_note' className='form__label'>
                    Nota Fiscal
                </label>
                <Field component='input' name='fiscal_note' id='fiscal_note' type='file' className='form__input'/>
            </div>
            <div className="form__group">
                <label htmlFor='comment' className='form__label'>
                    Comentários
                </label>
                <Field component='input' name='comment' id='comment' type='text' className='form__input'/>
            </div>
            <button type='submit' className='button'>Salvar</button>
        </form>
    );
}

const RefundsForm = reduxForm({
    form: 'refunds'
})(Form);

export default RefundsForm;