import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
