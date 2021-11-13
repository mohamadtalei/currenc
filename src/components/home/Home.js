import BaseSelector from './base-selector/BaseSelector';
import CurrencyTable from './currency-table/CurrencyTable';
import styles from './Home.module.scss';
import SearchBar from './search-bar/SearchBar';

const Home = () => {
    return (
        <div className={styles.container}>
            <SearchBar />
            <BaseSelector />
            <CurrencyTable />

        </div>
    );
}

export default Home;