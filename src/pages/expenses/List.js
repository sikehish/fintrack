import "../../styles/Expenses.css";
import React from "react";

export default function List({ expenses }) {
  return (
    <ul className="expenses">
      {expenses.length == 0 && <h1>No expenses so far.</h1>}
      {expenses.map((expense) => (
        <li key={expense.id}>
          <p className="name">{expense.name}</p>
          <p className="amount">₹{expense.amount}</p>
        </li>
      ))}
    </ul>
  );
}
