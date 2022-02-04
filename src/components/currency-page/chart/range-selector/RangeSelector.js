import styles from './RangeSelector.module.scss'
const RangeSelector = ({ range, setRange }) => {
    return (
        <div className={styles.container}>
            <div onClick={() => setRange(0)} className={range === 0 ? styles.selectedRange : styles.range}>10 D</div>
            <div onClick={() => setRange(1)} className={range === 1 ? styles.selectedRange : styles.range}>1 M</div>
            <div onClick={() => setRange(2)} className={range === 2 ? styles.selectedRange : styles.range}>6 M</div>
            <div onClick={() => setRange(3)} className={range === 3 ? styles.selectedRange : styles.range}>1 Y</div>
            <div onClick={() => setRange(4)} className={range === 4 ? styles.selectedRange : styles.range}>2 Y</div>
        </div>
    );
}

export default RangeSelector;