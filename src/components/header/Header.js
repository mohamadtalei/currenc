import styles from "./Header.module.scss";
import Coin1 from "../../icons/coin1";
import Coin2 from "../../icons/coin2";
import Coin3 from "../../icons/coin3";
import Coin4 from "../../icons/coin4";
import Coin5 from "../../icons/coin5";
import Coin6 from "../../icons/coin6";
import { useEffect, useState } from "react";
import { positions } from "./coinPositions";

const Header = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [zeroPoint, setZeroPoint] = useState({ x: 0, y: 0 })
  const [coinPositions, setCoinPosition] = useState(positions)
  const mousemoving = (event) => {
    setX(event.clientX - zeroPoint.x);
    setY(zeroPoint.y - event.clientY);
  }
  const resetCoinPosition = () => {
    setCoinPosition(positions)
  }
  useEffect(() => {
    setCoinPosition({
      coin1: {
        top: 240 - (y / 30),
        right: 100 - (x / 35)
      },
      coin2: {
        top: 170 - (y / 10),
        right: 170 - (x / 30)
      },
      coin3: {
        top: 210 - (y / 20),
        right: 240 - (x / 40)
      },
      coin4: {
        top: 140 - (y / 15),
        right: 80 - (x / 60)
      },
      coin5: {
        top: 100 - (y / 20),
        right: 260 - (x / 30)
      },
      coin6: {
        top: 60 - (y / 18),
        right: 160 - (x / 20)
      },
    })
  }, [x, y])
  return (
    <div className={styles.container}>
      <div className={styles.headerContent} onMouseEnter={(e) => { setZeroPoint({ x: e.clientX, y: e.clientY }) }} onMouseLeave={resetCoinPosition} onMouseMove={(e) => mousemoving(e)}>
        <div className={styles.headerDescription}>
          <p className={styles.description}>with <b>CURRENC</b> you can keep track of any currency</p>
        </div>

        <div className={styles.coinsContainer}>
          <span className={styles.Coin1} style={{ right: coinPositions.coin1.right + "px", top: coinPositions.coin1.top + "px" }}> <Coin1 /> </span>
          <span className={styles.Coin2} style={{ right: coinPositions.coin2.right + "px", top: coinPositions.coin2.top + "px" }}> <Coin2 /> </span>
          <span className={styles.Coin3} style={{ right: coinPositions.coin3.right + "px", top: coinPositions.coin3.top + "px" }}> <Coin3 /> </span>
          <span className={styles.Coin4} style={{ right: coinPositions.coin4.right + "px", top: coinPositions.coin4.top + "px" }}> <Coin4 /> </span>
          <span className={styles.Coin5} style={{ right: coinPositions.coin5.right + "px", top: coinPositions.coin5.top + "px" }}> <Coin5 /> </span>
          <span className={styles.Coin6} style={{ right: coinPositions.coin6.right + "px", top: coinPositions.coin6.top + "px" }}> <Coin6 /> </span>
        </div>

      </div>
    </div>
  );
};

export default Header;
