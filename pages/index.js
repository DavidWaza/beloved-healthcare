import Head from "next/head";
import AboutCare from "../component/AboutCare/aboutCare";
import Care from "../component/CareModule/care";
import BigNavbar from "../component/Header/bigNavbar";
import SmallNavbar from "../component/Header/smallNavbar";
import Herobanner from "../component/Herobanner/herobanner";
import Service from "../component/Services/service";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beloved HealthCare</title>
        <meta
          name="description"
          content="Home service healthcare, home service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SmallNavbar />
      <BigNavbar />
      <Herobanner />
      <Care />
      <Service />
      <AboutCare />
    </div>
  );
}
