
import { useState } from 'react';
import NuKenzieLogo from './NuKenzie.svg'
import './App.css';
import Filters from './components/Filters/indexFilters';
import Form from './components/Form/indexForm';
import Initial from './components/InitialPage/indexInitialPage';
import List from './components/List/indexList';
import TotalMoney from './components/TotalMoney/indexTotalMoney'

function App() {
  const [isLogged, setIsLogged] = useState(false)  

  const log = () => {setIsLogged(true)}
  const unlog = () => {setIsLogged(false)}

  const [listTransactions, setListTransations] = useState([])


  const [filtered, setFiltered] = useState([])

  return (
    <div className="App">
      {isLogged ?
      <>
        <header>
          <img alt='logo' src={NuKenzieLogo}/>
          <button onClick={() => unlog()}>Início</button>
        </header>
        <main>
          <div className='form_total'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransations}/>
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <div className='filters_list'>
            <Filters listTransactions={listTransactions} setFiltered={setFiltered}/>
            <List listTransactions={filtered.length > 0 ? filtered : listTransactions} setListTransactions={setListTransations}/>
          </div>
          
        </main>
      </>
      :
        <Initial log={log}/>

      }
     
    </div>
  );
}

export default App;
