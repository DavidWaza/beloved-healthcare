import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const SmallNavbar = () => {
  return (
    <>
      <div className={styles.navWrapper}>
        <div className={styles.smallNav}>
          <ol>
            <li>
              <Image src="/whatsapp.png" alt="png" width={40} height={40} />
              <div className={styles.listParags}>
                <p>24/7 Service care</p>
                <p>090 186 600 95</p>
              </div>
            </li>
            <li>
              <Image src="/apparatus.png" alt="png" width={50} height={50} />
              <div className={styles.listParags}>
                <p>Meet our specialist</p>
                <p>Request a specialist</p>
              </div>
            </li>
            <li>
              <Link href="/">
                <Image src="/pulse.png" alt="png" width={50} height={50} />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src="/contactPulse.png" alt="png" width={50} height={50} />
                <p>Contact us</p>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default SmallNavbar;
