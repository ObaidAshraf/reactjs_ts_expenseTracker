import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction'

const History: React.FC = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction: Transaction) => ( 
                    <Transaction key={transaction.id} transaction={transaction} /> 
                ))}
            </ul>
        </div>
    )
}

export default History