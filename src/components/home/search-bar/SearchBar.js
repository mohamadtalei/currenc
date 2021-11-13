import SerachIcon from '../../../icons/search';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <span className={styles.searchIcon}>
                <SerachIcon />
            </span>
            <input placeholder="search" type="text" className={styles.input} />
        </div>
    );
}

export default SearchBar;