import React from "react";
import Form from "./Form";
import "../../styles/Expenses.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import List from "./List";

function Expenses() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("expenses");

  return (
    <div className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {documents && <List expenses={documents} />}
      </div>
      <div className="side">
        <Form uid={user.uid} />
      </div>
    </div>
  );
}

export default Expenses;
