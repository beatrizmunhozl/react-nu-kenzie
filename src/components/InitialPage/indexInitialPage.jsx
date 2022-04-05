import NuKenzieWhite from './../../../src/NuKenzieWhite.svg'
import svgHome from './../../../src/svgHome.svg'
import './styleinitialPage.css'

const Initial = ({log}) => {
    return (
        <div className='div__initial'>
            <div className='div__initial-txt'>
                <img src={NuKenzieWhite} alt="Logo Nu Kenzie" />
                <h2>Centralize o controle das suas finanças</h2>
                <h4>de forma rápida e segura</h4>
                <button onClick={log} className='btn__iniciar'>Iniciar</button>
            </div>
            <div className='div__initial-img'>
                <img src={svgHome} alt="" />
            </div>
        </div>
    )
}

export default Initial