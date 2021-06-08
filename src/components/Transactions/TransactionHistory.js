import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <div style={{ padding: "30px 10px" }} className="container">
    <table className={styles.transaction_history}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
