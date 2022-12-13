import React from "react";
import Footer from "../Main/Footer";
import Navbar from "../Main/Navbar";
import styles from "./layout.module.css";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Navbar />
    <div className={styles.container}>
      {children}
    </div>
      <Footer />
      </>
  );
};

export default LayoutPage;
