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
        <Gp3 />
        <Future />
        <Possibiloty />
        <Blogs />
      </LayoutPage>
    </div>
  );
};

export default Main;
