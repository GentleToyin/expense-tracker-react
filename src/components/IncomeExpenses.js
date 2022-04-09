import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    let income = []
    let expense = []

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] < 0) {
            expense.push(amounts[i])
        } else {
            income.push(amounts[i])
        }
    }

    const totalIncome = income.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const totalExpense = expense.reduce((acc, item) => (acc += item), 0).toFixed(2)

    console.log(income)


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{totalExpense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
