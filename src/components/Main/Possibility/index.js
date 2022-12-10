import React from "react";
import styles from "./possibility.module.css";

const Possibility = () => {
  const img = require("../../../assets/possibility.png");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.img}>
          <img src={img} alt="possibility" />
        </div>
        <div className={styles.text}>
          <p className={styles.textTitle}>
            Request Early Access to Get Started
          </p>
          <h2>The possibilities are beyond your imagination</h2>
          <p className={styles.paragraph}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className={styles.textFooter}>Request Early Access to Get Started</p>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.possibility}>
            <p>Request Early Access to Get Started</p>
            <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <div className={styles.button}>
            <h3>Get Started</h3>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
