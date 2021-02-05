import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buynow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
