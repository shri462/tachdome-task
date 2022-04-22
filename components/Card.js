import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

function Card({ data }) {
  const imgsrc = data.links.mission_patch;
  return (
    <div className={styles.card}>
      <p className={styles.image}>
        <Image
          src={imgsrc}
          layout="responsive"
          alt="image"
          width={200}
          height={200}
        />
      </p>

      <p>
        <section className={styles.text}>
          <strong>
            {data.mission_name}&nbsp;#{data.flight_number}
          </strong>
        </section>
      </p>
      <p>
        <strong>
          {" "}
          Mission Ids:
          <br />
        </strong>
        <section className={styles.text}>
          {data.mission_id.length > 0
            ? data.mission_id.map((d) => (
                <ul key={d}>
                  <li>{d}</li>
                </ul>
              ))
            : "Not available"}
        </section>
      </p>
      <p className={styles.flex}>
        <strong> Launch Year:</strong>
        <section className={styles.text}>{data.launch_year}</section>
      </p>

      <p className={styles.flex}>
        <strong>Successful Launch:</strong>{" "}
        <section className={styles.text}>
          {data.launch_success ? "Successful" : "Failed"}
        </section>
      </p>
      <p className={styles.flex}>
        <strong>Successful Landing:</strong>{" "}
        <section className={styles.text}>
          {data.rocket.first_stage.cores[0].land_success
            ? "Successful"
            : "Failed"}
        </section>
      </p>
    </div>
  );
}

export default Card;
