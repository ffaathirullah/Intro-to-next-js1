import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">halo</Link>
      </li>
      <li>
        <Link href="/Blog">hai</Link>
      </li>
      <li>
        <Link href="/user/user">helo</Link>
      </li>
    </ul>
  );
}
