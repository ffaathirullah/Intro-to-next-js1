import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./../components/Header";
import Layout from "./../components/Layout/index";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className={styles["title-homepage"]}>halo</h1>
      </Layout>
    </>
  );
}
