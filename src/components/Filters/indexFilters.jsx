import './styleFilters.css'

const Filters = ({listTransactions, setFiltered}) => {
    

    const filteredList = (tipo) => (
        setFiltered(listTransactions.filter((item) => (
            item.type === tipo
        )))
    )

    const showAll = () => (
        setFiltered([])
    )
    return (
        <div className='div__filter'>
            <p>Resumo financeiro</p>
            <div className='div__btn'>
                <button className='btn__todos' onClick={() => showAll()}>Todos</button>
                <button onClick={() => filteredList('entrada')}>Entradas</button>
                <button onClick={() => filteredList('despesa')}>Despesas</button>
            </div>
        </div>
    )
}

export default Filters