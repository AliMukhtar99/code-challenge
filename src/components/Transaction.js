import React from "react";

function Transaction({ description, date, category, id, amount, deleteList }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button
          style={{ color: "black", borderRadius: "5px" }}
          onClick={() => deleteList(id)}
        >
          clear
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
