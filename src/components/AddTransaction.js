import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e) => {
                    e.preventDefault()
                    addTransaction(newTransaction)
                    setAmount('')
                    setText('')
                }}>Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
