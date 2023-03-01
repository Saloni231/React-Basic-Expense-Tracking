import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const onSaveExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const [showForm, setShowForm] = useState(false);

    const startEditing = () => {
        setShowForm(true);
    }

    const stopEditing = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {showForm ? 
            <ExpenseForm onSaveExpenseData = {onSaveExpenseData} cancelForm = {stopEditing} /> :
            <button onClick={startEditing} >Add New Expense</button>}
        </div>
    );
}

export default NewExpense;