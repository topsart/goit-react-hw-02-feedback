import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randomColor from "randomcolor";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <div style={{ padding: "30px 50px" }} className="container">
      <div className={styles.statistics_container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              style={{ backgroundColor: randomColor() }}
              className={styles.item}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
