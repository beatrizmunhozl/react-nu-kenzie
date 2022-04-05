import { useState } from 'react'
import './styleForm.css'

const Form = ({listTransactions, setListTransactions}) => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('entrada')

    const addTransaction = (evt) => {
        evt.preventDefault()
        const obj = {
            id : description+value,
            description: description,
            value: Number(value),
            type: type
        }
        
        setListTransactions([...listTransactions, obj])       
        setValue('')
        setDescription('')
    }

    return (
        <form className="form" onSubmit={(evt) => addTransaction(evt)}>
            <div className="div-form__input-descricao">
                <label htmlFor="description" className="label">Descrição</label>
                <input type="text" name="description" onChange={(evt) => setDescription(evt.target.value)}
                placeholder="Digite aqui sua descrição" value={description} />
                <label htmlFor="description"  className="label__exemplo">
                    Ex.: Compra de roupas
                </label>
            </div>
            <div className='div-form__value'>
            <div className="div-form__input-value">
                <label htmlFor="value">Valor</label>
                <input type="number" name="value" value={value} onChange={(evt) => setValue(evt.target.value)}/>
                <span className="span__value">R$</span>
            </div>

            <div className="div-form__input-type">
                <label htmlFor="type">Tipo de valor</label>
                <select name="type" id="select__type" onChange={(evt) => setType(evt.target.value)}>
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                </select>
            </div>
            </div>
            <button type="submit">Inserir valor</button>

        </form>
    )
}

export default Form