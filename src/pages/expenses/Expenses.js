import React from "react";
import Form from "./Form";
import "../../styles/Expenses.css";

function Expenses() {
  return (
    <div className="container">
      <div className="list">List</div>
      <div className="side">
        <Form />
      </div>
    </div>
  );
}

export default Expenses;
