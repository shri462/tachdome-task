import React from "react";
import styles from "./Filters.module.css";

const YEAR = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020,
];

function Filters({ data, onFilterYear, onFilterLanding, onFilterLaunch }) {
  return (
    <div>
      <h3>Filters</h3>
      <div
        style={{
          borderBottom: "1px solid",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        Launch Year
      </div>
      <div className={styles.buttons}>
        {YEAR.map((year) => (
          <button
            className={styles.button}
            key={year}
            value={year}
            onClick={() => onFilterYear(year, true, true)}
          >
            {year}
          </button>
        ))}
      </div>
      <div
        style={{
          borderBottom: "1px solid",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        Successful Launch
      </div>
      <div className={styles.buttons}>
        <button
          onClick={(e) => onFilterLaunch(e.target.value)}
          className={styles.button}
          value="true"
        >
          True
        </button>
        <button
          onClick={(e) => onFilterLaunch(e.target.value)}
          className={styles.button}
          value="false"
        >
          False
        </button>
      </div>
      <div
        style={{
          borderBottom: "1px solid",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        Successful Landing
      </div>
      <div className={styles.buttons}>
        <button
          onClick={(e) => onFilterLanding(e.target.value)}
          className={styles.button}
          value="true"
        >
          True
        </button>
        <button
          onClick={(e) => onFilterLanding(e.target.value)}
          className={styles.button}
          value="false"
        >
          False
        </button>
      </div>
    </div>
  );
}

export default Filters;
