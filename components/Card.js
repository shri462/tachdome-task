import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

function Card({ data }) {
  const imgsrc = data.links.mission_patch;
  return (
    <div className={styles.card}>
      <p className={styles.image}>
        {imgsrc ? (
          <Image
            src={imgsrc}
            layout="responsive"
            alt="image"
            width={100}
            height={100}
          />
        ) : (
          "Image not available"
        )}
      </p>

      <p>
        <span className={styles.text}>
          <strong>
            {data.mission_name}&nbsp;#{data.flight_number}
          </strong>
        </span>
      </p>
      <div>
        <strong>
          {" "}
          Mission Ids:
          <br />
        </strong>
        <span className={styles.text}>
          {data.mission_id.length > 0
            ? data.mission_id.map((d) => (
                <ul key={d}>
                  <li>{d}</li>
                </ul>
              ))
            : "Not available"}
        </span>
      </div>
      <p className={styles.flex}>
        <strong> Launch Year:</strong>
        <span className={styles.text}>{data.launch_year}</span>
      </p>

      <p className={styles.flex}>
        <strong>Successful Launch:</strong>{" "}
        <span className={styles.text}>
          {data.launch_success ? "Successful" : "Failed"}
        </span>
      </p>
      <p className={styles.flex}>
        <strong>Successful Landing:</strong>{" "}
        <span className={styles.text}>
          {data.rocket.first_stage.cores[0].land_success
            ? "Successful"
            : "Failed"}
        </span>
      </p>
    </div>
  );
}

export default Card;
