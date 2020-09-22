type Transaction = {
    id: number,
    text: string
    amount: number,
}

type State = {
    transactions: Transaction[],
    addTransaction?: (transaction: Transaction) => void
    deleteTransaction?: (id: number) => void
}

type AddTransaction = {
    readonly type: 'ADD_TRANSACTION',
    readonly payload: Transaction
}

type DeleteTransaction = {
    readonly type: 'DELETE_TRANSACTION',
    readonly payload: number
}

type Actions = AddTransaction | DeleteTransaction