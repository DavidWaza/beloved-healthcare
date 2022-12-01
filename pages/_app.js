import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import { lazy, Suspense } from "react";
const BigNavbar = lazy(() => import("../component/Header/bigNavbar"));
const SmallNavbar = lazy(() => import("../component/Header/smallNavbar"));
const Footer = lazy(() => import("../component/Footer/footer"));

const renderLoader = () => <p>Loading..</p>;
function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={renderLoader()}>
      <div className={styles.container}>
        <SmallNavbar />
        <BigNavbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </Suspense>
  );
}

export default MyApp;
