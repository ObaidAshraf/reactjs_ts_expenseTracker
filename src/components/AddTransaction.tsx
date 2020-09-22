import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

// import { Transaction } from '../types'

const AddTransaction: React.FC = () => {

    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTransaction: Transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: Number(amount)
        }
        
        addTransaction &&  addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} 
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setText(evt.target.value)} 
                    placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
                <input type="number" 
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(evt.target.value))} 
                    placeholder="Enter amount..." />
            </div>
            <button type="submit" className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction