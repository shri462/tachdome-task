import React from "react";
import Button from "./Button";
import styles from "./Filters.module.css";

const YEAR = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020,
];

function Filters({ data, onFilter }) {
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
          <Button key={year} value={year} onClick={onFilter} />
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
        <Button value="True" />
        <Button value="False" />
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
        <Button value="True" />
        <Button value="False" />
      </div>
    </div>
  );
}

export default Filters;
