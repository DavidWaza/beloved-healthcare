import dynamic from "next/dynamic";
import Head from "next/head";
const AboutCare = dynamic(() => import("../component/AboutCare/aboutCare"));
const Care = dynamic(() => import("../component/CareModule/care"));
const Features = dynamic(() => import("../component/Features/features"));
const Herobanner = dynamic(() => import("../component/Herobanner/herobanner"));
const Service = dynamic(() => import("../component/Services/service"));
const Appointment = dynamic(() =>
  import("../component/Appointment/appointment")
);
import styles from "../styles/Home.module.css";

const renderLoader = () => <p>Loading..</p>;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beloved HealthCare</title>
        <meta
          name="description"
          content="Home service healthcare, home service"
        />
      </Head>
      <Herobanner />
      <Care />
      <Service />
      <AboutCare />
      <Features />
      <Appointment />
    </div>
  );
}
