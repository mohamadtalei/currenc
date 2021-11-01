import styles from "./Header.module.scss";
import Coin1 from "../../icons/coin1";
import Coin2 from "../../icons/coin2";
import Coin3 from "../../icons/coin3";
import Coin4 from "../../icons/coin4";
import Coin5 from "../../icons/coin5";
import Coin6 from "../../icons/coin6";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.headerDescription}>

        </div>

        <div className={styles.coinsContainer}>
            <span className={styles.Coin1}> <Coin1 /> </span>
            <span className={styles.Coin2}> <Coin2 /> </span>
            <span className={styles.Coin3}> <Coin3 /> </span>
            <span className={styles.Coin4}> <Coin4 /> </span>
            <span className={styles.Coin5}> <Coin5 /> </span>
            <span className={styles.Coin6}> <Coin6 /> </span>
        </div>

      </div>
    </div>
  );
};

export default Header;
