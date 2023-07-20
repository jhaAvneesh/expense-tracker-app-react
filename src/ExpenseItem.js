import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  const { id, title, amount, date } = expense;

  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);

  const handleDelete = () => {
    onDeleteExpense(id);
  };

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedAmount}</div>
        <div className="expense-item__date">
          {date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
