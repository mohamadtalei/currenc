import styles from './SearchResult.module.scss'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Home from '../home/Home';

const SearchResult = ({ currenciesNames }) => {
    const { symbol } = useParams();
    const [result, setResult] = useState({})
    // const result = {}
    useEffect(() => {
        if (currenciesNames && symbol) {
            let res = {};
            for (let x in currenciesNames) {
                if (x.match(symbol.toUpperCase()) || currenciesNames[x].toUpperCase().match(symbol.toUpperCase())) {
                    res[x] = currenciesNames[x];
                    // setResult({ ...result, "": currenciesNames[x] })
                }
            }
            setResult(res);
        }
        console.log(result);
    }, [currenciesNames, symbol])

    return (
        <div className={styles.container}>
            <Home currenciesNames={result} fullNames={currenciesNames} />
        </div>
    );
}

export default SearchResult;