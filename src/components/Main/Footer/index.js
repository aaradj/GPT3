import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Do you want to step in to the <br/> future before others</h2>
        <p className={styles.buttonBase}>Request Early Access</p>
      </div>
      <div className={styles.listItems}>
        <div className={styles.logo}>
          <h3>GPT-3</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.links}>
          <div className={styles.lists}>
            <div className={styles.header}>
              <h3>Links</h3>
            </div>
            <div className={styles.list}>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={styles.lists}>
            <div className={styles.header}>
              <h3>Company</h3>
            </div>
            <div className={styles.list}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={styles.lists}>
            <div className={styles.header}>
              <h3>Get in touch</h3>
            </div>
            <div className={styles.list}>
              <p>Overons</p>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
