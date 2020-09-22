import React, { createContext, useReducer } from 'react'
// import { Transaction, State, Actions } from '../types'

import AppReducer from './AppReducer'

const transactions: Transaction[] = [
    // {'id': 1, 'amount': 100, 'text': 'Temporary'},
    // {'id': 1, 'amount': 200, 'text': 'Temporary2'},
    // {'id': 1, 'amount': -50, 'text': 'Temporary3'}
]

// Initial State
const InitialState: State = {
    transactions: transactions,
}

// Context
export const GlobalContext = createContext<State>(InitialState);

// Context Provider
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(AppReducer, InitialState)

    const addTransaction = (transaction: Transaction) => {
        dispatch({ 
            type: 'ADD_TRANSACTION', 
            payload: transaction 
        })
    }

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    
    return (
        <GlobalContext.Provider value={{
            ...state,
            addTransaction,
            deleteTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

