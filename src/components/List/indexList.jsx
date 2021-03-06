import trash from './../../../src/trash.svg'
import NoCard from './../../../src/NoCard.svg'
import './styleList.css'

const List = ({listTransactions, setListTransactions}) => {
    const exclude = (id) => {
        console.log(id)
        const list = listTransactions.filter((item) => {
            return item.id !== id
        })
        console.log(list)
        setListTransactions([...list])
    }


    if (listTransactions.length > 0){
        return (
            <ul>
                {listTransactions.map((transaction) => {
                
                return(<li className={transaction.type} key={`${transaction.description}${transaction.value}`}>
                        <div>
                            <h4>{transaction.description}</h4>
                            <span className='li-span__type'>{transaction.type}</span>
                        </div>
                        <div className='div__div'>
                            <span className="li-span__value">R${transaction.value.toFixed(2)}</span>
                            
                            <svg onClick={() => exclude(transaction.id)} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.36108 0.722195H6.06942L5.87845 0.378445C5.80206 0.225667 5.64928 0.111084 5.4774 0.111084H3.28122C3.10935 0.111084 2.95657 0.225667 2.88018 0.378445L2.70831 0.722195H0.41664C0.244765 0.722195 0.111084 0.874973 0.111084 1.02775V1.63886C0.111084 1.81074 0.244765 1.94442 0.41664 1.94442H8.36108C8.51386 1.94442 8.66664 1.81074 8.66664 1.63886V1.02775C8.66664 0.874973 8.51386 0.722195 8.36108 0.722195ZM1.12324 9.02949C1.14233 9.52602 1.54338 9.88886 2.0399 9.88886H6.71872C7.21525 9.88886 7.61629 9.52602 7.63539 9.02949L8.05553 2.55553H0.722195L1.12324 9.02949Z" fill="#868E96"/>
                            </svg>
                            
                            
                        </div>
                       
                       
                </li>)
                    
                })}
            </ul>
        )
    }else {
        return (
            <div className='div__noCard'>
                <h3>Voc?? ainda n??o possui nenhum lan??amento</h3>
                <img src={NoCard} alt="" />
            </div>
        )
    }
}

export default List

