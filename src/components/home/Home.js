import BaseSelector from './base-selector/BaseSelector';
import CurrencyTable from './currency-table/CurrencyTable';
import styles from './Home.module.scss';
import SearchBar from './search-bar/SearchBar';
import usefetch from 'use-fetch'
import { useEffect, useState } from 'react';

const Home = () => {
    const [latest, setLatest] = useState();
    const [base, setBase] = useState("EUR");
    const [currenciesNames, setCurrenciesNames] = useState("empty");
    useEffect(() => {  //request for currency symnols
        usefetch(`https://api.frankfurter.app/currencies`, { json: true })
            .then(response => {
                setCurrenciesNames(response.body);
            }).catch(e => {
                console.log(e)
            })
    }, [])
    useEffect(() => {  //request for latest prices
        usefetch(`https://api.frankfurter.app/latest?from=${base}`, { json: true })
            .then(response => {
                setLatest(response.body);
            }).catch(e => {
                console.log(e);
            })
    }, [base])
    return (
        <div className={styles.container}>

            {currenciesNames &&
                <div className={styles.topDiv}>
                    <SearchBar />
                    <BaseSelector base={base} setBase={setBase} currenciesNames={currenciesNames} />
                </div>}
            <CurrencyTable currenciesNames={currenciesNames} latest={latest} base={base} />

        </div>
    );
}

export default Home;