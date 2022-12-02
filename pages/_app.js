import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const BigNavbar = dynamic(() => import("../component/Header/bigNavbar"));
const SmallNavbar = dynamic(() => import("../component/Header/smallNavbar"));
const Footer = dynamic(() => import("../component/Footer/footer"));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <SmallNavbar />
        <BigNavbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
