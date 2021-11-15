import BaseSelector from './base-selector/BaseSelector';
import CurrencyTable from './currency-table/CurrencyTable';
import styles from './Home.module.scss';
import SearchBar from './search-bar/SearchBar';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topDiv}>
                <SearchBar />
                <BaseSelector />
            </div>
            <CurrencyTable />

        </div>
    );
}

export default Home;