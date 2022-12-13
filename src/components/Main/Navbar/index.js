import React from 'react';
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.header}>
            <h2 className={styles.logo}>GPT-3</h2>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What is GPT?</a></li>
                    <li><a href="#">Open AI</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Library</a></li>
                </ul>
            </nav>
            <div className={styles.link}>
            <a href="#">Sgin in</a>
            <a href="#" className={styles.buttonText}>Sgin up</a>
            </div>
        </div>
    );
};

export default Navbar;
