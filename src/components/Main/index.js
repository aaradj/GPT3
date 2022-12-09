import React from 'react';
import styles from "./main.module.css";
import Navbar from "./Navbar"


const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>   
            <Navbar/>
            </div>
        </div>
    );
};

export default Main;