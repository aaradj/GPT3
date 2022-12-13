import React from "react";
import styles from "./gp3.module.css";

const Gp3 = () => {
  return (
    <div className={styles.container} id="gpt">
      <div className={styles.header}>
        <div className={styles.headTitle}>What is GPT-3</div>

        <div className={styles.paragraph}>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>
          The possibilities are beyond your imagination
        </h2>
        <p className={styles.text}>Explore The Library</p>
      </div>

      <div className={styles.footer}>
        <div>
          <h3 className={styles.textTitle}>Chatbots</h3>
          <p className={styles.paragraph}>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>

        <div>
          <h3 className={styles.textTitle}>Knowledgebase</h3>
          <p className={styles.paragraph}>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>

        <div>
          <h3 className={styles.textTitle}>Education</h3>
          <p className={styles.paragraph}>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gp3;
