import React from "react";
import styles from "./blogs.module.css";

const Blogs = () => {
  const blog1 = require("../../../assets/blog01.png");
  const blog2 = require("../../../assets/blog02.png");
  const blog3 = require("../../../assets/blog03.png");
  const blog4 = require("../../../assets/blog04.png");
  const blog5 = require("../../../assets/blog05.png");
  return (
    <div className={styles.container} id="library">
      <h2>
        A lot is happening, <br /> We are blogging about it.
      </h2>
      <div className={styles.cards}>
        <div className={styles.mainCard}>
          <img src={blog1} alt="blogs" />
          <div className={styles.discreption}>
            <div className={styles.title}>
              <p className={styles.text}>Sep 26, 2021</p>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <div className={styles.readMore}>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>

        <div className={styles.sideCards}>
          <div className={styles.card}>
            <img src={blog2} alt="blogs" />
            <div className={styles.discreption}>
              <div className={styles.title}>
                <p className={styles.text}>Sep 26, 2021</p>
                <h3>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <div className={styles.readMore}>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={blog3} alt="blogs" />
            <div className={styles.discreption}>
              <div className={styles.title}>
                <p className={styles.text}>Sep 26, 2021</p>
                <h3>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <div className={styles.readMore}>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={blog4} alt="blogs" />
            <div className={styles.discreption}>
              <div className={styles.title}>
                <p className={styles.text}>Sep 26, 2021</p>
                <h3>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <div className={styles.readMore}>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={blog5} alt="blogs" />
            <div className={styles.discreption}>
              <div className={styles.title}>
                <p className={styles.text}>Sep 26, 2021</p>
                <h3>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <div className={styles.readMore}>
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
