import { lazy, Suspense } from "react";
import Head from "next/head";
const AboutCare = lazy(() => import("../component/AboutCare/aboutCare"));
const Care = lazy(() => import("../component/CareModule/care"));
const Features = lazy(() => import("../component/Features/features"));
const Herobanner = lazy(() => import("../component/Herobanner/herobanner"));
const Service = lazy(() => import("../component/Services/service"));
const Appointment = lazy(() => import("../component/Appointment/appointment"))
import styles from "../styles/Home.module.css";

const renderLoader = () => <p>Loading..</p>;

export default function Home() {
  return (
    <Suspense fallback={renderLoader()}>
      <div className={styles.container}>
        <Head>
          <title>Beloved HealthCare</title>
          <meta
            name="description"
            content="Home service healthcare, home service"
          />
        </Head>
        <Herobanner  />
        <Care />
        <Service />
        <AboutCare />
        <Features />
        <Appointment />
      </div>
    </Suspense>
  );
}

