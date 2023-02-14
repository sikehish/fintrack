import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Expense name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Expense amount:</span>
          <input
            type="text"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className="btn">Add Expense</button>
      </form>
    </>
  );
}
