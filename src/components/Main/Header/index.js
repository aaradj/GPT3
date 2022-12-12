import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const aiImg = require("../../../assets/ai.png");
  const google = require("../../../assets/google.png");
  const slack = require("../../../assets/slack.png");
  const atlassian = require("../../../assets/atlassian.png");
  const dropbox = require("../../../assets/dropbox.png");
  const shopify = require("../../../assets/shopify.png");
  return (
    <div className={styles.main} id="home">
      <div className={styles.Header}>
        <div className={styles.texts}>
          <div className={styles.title}>
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          </div>
          <div className={styles.paragraph}>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
          </div>
          <div className={styles.input}>
            <input
              type="email"
              name="search"
              value=""
              placeholder="Your Email Address"
            />
            <button>Get Started</button>
          </div>
        </div>

        <div className={styles.img}>
          <img src={aiImg} alt="ai" />
        </div>
      </div>

      <div className={styles.logos}>
        <img src={google} alt="google logo"/>
        <img src={slack} alt="slack logo"/>
        <img src={atlassian} alt="atlassian logo"/>
        <img src={dropbox} alt="dropbox logo"/>
        <img src={shopify} alt="shopify logo"/>
      </div>
    </div>
  );
};

export default Header;
