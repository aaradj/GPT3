import React from "react";
import styles from "./main.module.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Gp3 from "./GP3";
import Future from "./Future";
import Possibiloty from "./Possibility";
import Blogs from "./Blogs";
import Footer from "./Footer";
import LayoutPage from "../Layout";

const Main = () => {
  return (
    <div className={styles.container}>
      <LayoutPage>
        <Header />
        <div className={styles.main}>
        <Gp3 />
        <Future />
        <Possibiloty />
        <Blogs />
        </div>
      </LayoutPage>
    </div>
  );
};

export default Main;
