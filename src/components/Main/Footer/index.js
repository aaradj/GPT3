import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Do you want to step in to the <br /> future before others
        </h2>
      </div>
      <div className={styles.buttonBase}>Request Early Access</div>
      <div className={styles.aboutUs}>
        <div className={styles.logo}>
          <h3>GPT-3</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <div className={styles.header}>
              <h4>Links</h4>
            </div>
            <div className={styles.content}>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Counters</p>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.header}>
              <h4>Company</h4>
            </div>
            <div className={styles.content}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.header}>
              <h4>Get in touch</h4>
            </div>
            <div className={styles.content}>
              <p>Get in touch</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>© 2021 GPT-3. All rights reserved.</div>
    </div>
  );
};

export default Footer;
