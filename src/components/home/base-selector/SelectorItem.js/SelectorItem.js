import styles from './SelectorItem.module.scss'

const SelectorItem = ({ symbol, setBase }) => {
    return (
        <div className={styles.item} onClick={() => {setBase(symbol)}}>{symbol}</div>
    );
}

export default SelectorItem;