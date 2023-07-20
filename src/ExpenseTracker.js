import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <div className="expense-tracker">
      <h2 className="expense-tracker__title">Expense Tracker</h2>
      <div className="expense-tracker__content">
        <div className="expense-tracker__form">
          <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
        <div className="expense-tracker__list">
          {expenses.length === 0 ? (
            <p className="no-expenses-message">No expenses recorded.</p>
          ) : (
            expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onDeleteExpense={deleteExpenseHandler}
              />
            ))
          )}
        </div>
      </div>
      <footer className="expense-tracker__footer">
        <p><i>Achieve financial wellness by tracking your expenses effectively.</i></p>
      </footer>
    </div>
  );
};

export default ExpenseTracker;