import './styleTotalMoney.css'

const TotalMoney = ({listTransactions}) => {
    const add = () => (listTransactions.filter((item) => item.type === 'entrada').reduce(
        (a, b) => a + b.value, 0
    ))
    const sub = () => (listTransactions.filter((item) => item.type === 'despesa').reduce(
        (a, b) => a + b.value, 0
    ))

    if(listTransactions.length > 0){
        return (
            <div className="div-TotalMoney">
                <div className="div-TotalMoney__txt">
                    <h4>Valor total:</h4>
                    <span>O valor se refere ao saldo</span>
                </div>
                <h3>
                    R$ {(add() - sub()).toFixed(2)}
                </h3>
            </div>
        )
    }else {
        return null
    }
    
}

export default TotalMoney