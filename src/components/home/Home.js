import BaseSelector from './base-selector/BaseSelector';
import CurrencyTable from './currency-table/CurrencyTable';
import styles from './Home.module.scss';
import SearchBar from './search-bar/SearchBar';
import usefetch from 'use-fetch'
import { useEffect, useState } from 'react';
import Loading from './loading/Loading.js';
import Convertor from '../convertor/Convertor.js';

const Home = ({ currenciesNames, fullNames }) => {
    const [latest, setLatest] = useState();
    const [base, setBase] = useState("EUR");
    // const [currenciesNames, setCurrenciesNames] = useState("empty");
    const [date, setDate] = useState()
    const [pending, setPending] = useState();
    // const [pending2, setPending2] = useState();
    const [pending3, setPending3] = useState();

    // useEffect(() => {  //request for currency symnols
    //     // setPending2(true);
    //     usefetch(`https://api.frankfurter.app/currencies`, { json: true })
    //         .then(response => {
    //             setCurrenciesNames(response.body);
    //         }).catch(e => {
    //             console.log(e)
    //         })
    // }, [])
    useEffect(() => {  //request for latest prices
        setPending3(true);
        usefetch(`https://api.frankfurter.app/latest?from=${base}`, { json: true })
            .then(response => {
                setLatest(response.body);
                setDate(response.body.date);
                setPending3(false);
            }).catch(e => {
                console.log(e);
            })
    }, [base])

    const [rates, setRates] = useState();
    const [yesterdayRates, setYesterdayRates] = useState();
    const getYesterday = (date) => {
        const d = new Date(date);
        d.setDate(d.getDate() - 1);
        return (d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1) + "-" + (d.getUTCDate() > 9 ? d.getUTCDate() : "0" + d.getUTCDate()));
    }

    useEffect(() => {
        if (latest && latest.rates) {
            setRates(latest.rates)
        }
    }, [latest])
    // useEffect(() => {
    //     console.log(pending, pending2, pending3);
    // }, [pending, pending2, pending3])

    useEffect(() => {
        setPending(true);
        const yesterDay = getYesterday(date);
        if (date && yesterDay) {

            usefetch(`https://api.frankfurter.app/${yesterDay}?from=${base}`, { json: true })
                .then(response => {
                    setYesterdayRates(response.body.rates);
                    setPending(false);
                }).catch(e => {
                    console.log(e);
                })
        }
    }, [base, date])

    return (
        <div className={styles.container}>

            {(pending || !currenciesNames || pending3) && <Loading />}
            {!(pending || !currenciesNames || pending3) && <>
                <div className={styles.topDiv}>
                    <SearchBar />
                    <BaseSelector inside={false} base={base} setBase={setBase} currenciesNames={fullNames} />
                </div>
                <CurrencyTable rates={rates} yesterdayRates={yesterdayRates} pending={pending} currenciesNames={currenciesNames} base={base} />
                <Convertor/>
            </>}
        </div>
    );
}

export default Home;