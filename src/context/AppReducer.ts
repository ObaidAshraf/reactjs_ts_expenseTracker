// import { State, Actions } from '../types'

const AppReducer = (state: State , action: Actions): State =>  {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            // console.log(state.transactions)
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload )
            }
        default:
            return state;
    }
}

export default AppReducer