import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function Form({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("expenses");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      uid,
      name,
      amount,
    });
    addDocument({
      uid,
      name,
      amount,
    });
  };

  // reset the form fields
  useEffect(() => {
    console.log("YOOO ", response.success);
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

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
            value={name}
          />
        </label>
        <label>
          <span>Expense amount:</span>
          <input
            type="text"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button className="btn" disabled={response.isPending}>
          {response.isPending ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </>
  );
}
