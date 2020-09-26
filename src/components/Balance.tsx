import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
// import { Transaction } from '../types'

const Balance: any = () => {
    const { transactions }  = useContext(GlobalContext)
    let balance = 0;
    transactions.map((transaction: Transaction) => {
        balance += transaction.amount;
    })

    return (
        <>
        <h4>Balance</h4>
        <h1 data-testid="balance">${balance}</h1>
    </>
    )
}

export default Balance