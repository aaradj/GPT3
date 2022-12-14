import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(document.documentElement.scrollTop);
  window.addEventListener("scroll", () => {
    setScroll(document.documentElement.scrollTop);
  });

  return (
    <div
      className={styles.header}
      style={{
        background: `${
          scroll > 30 ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0)"
        }`,
        backdropFilter: `${scroll > 30 ? "blur(4px)" : "blur(0)"}`,
      }}
    >
      <h2 className={styles.logo}>GPT-3</h2>
      <nav>
        <ul className={open ? styles.open : null}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#gpt">What is GPT?</a>
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
      <div className={styles.menu} onClick={() => setOpen(!open)}>
        {open ? (
          <svg className={styles.svgicon} viewBox="0 0 20 20">
            <path
              fill="none"
              d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
            ></path>
          </svg>
        ) : (
          <svg className={styles.svgicon} viewBox="0 0 20 20">
            <path
              fill="none"
              d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
              c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
              s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
              c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Navbar;
