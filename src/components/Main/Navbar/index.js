import React, { useState } from "react";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(document.documentElement.scrollTop);
  window.addEventListener("scroll", () => {
    setScroll(document.documentElement.scrollTop);
  });

  return (
    <div
      className={styles.header}
      style={{
        background: `${
          scroll > 30 ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0)"
        }`,
        backdropFilter: `${scroll > 30 ? "blur(2px)" : "blur(0)"}`,
      }}
    >
      <h2 className={styles.logo}>GPT-3</h2>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#GPT">What is GPT?</a>
          </li>
          <li>
            <a href="#ai">Open AI</a>
          </li>
          <li>
            <a href="#case">Case Studies</a>
          </li>
          <li>
            <a href="#library">Library</a>
          </li>
        </ul>
      </nav>
      <div className={styles.link}>
        <a href="#">Sgin in</a>
        <a href="#" className={styles.buttonText}>
          Sgin up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
