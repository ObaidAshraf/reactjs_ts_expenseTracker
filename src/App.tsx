import React from 'react';
import './App.css';
// Components
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction  from './components/AddTransaction'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'

import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container" data-testid="appContainer">
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
