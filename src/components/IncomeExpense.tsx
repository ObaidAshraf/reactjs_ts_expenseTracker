import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


const IncomeExpense : React.FC = () => {
    const { transactions } = useContext(GlobalContext)
    let income = 0, expense = 0;

    transactions.map((transaction: Transaction) => {
      if (transaction.amount > 0)
        return income += transaction.amount
      else
        return expense += transaction.amount
    })

    income = Number(income.toFixed(2))
    expense = Number(expense.toFixed(2))
    
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(expense)}</p>
        </div>
      </div>
    )
}

export default IncomeExpense