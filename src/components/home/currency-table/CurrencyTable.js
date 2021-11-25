import { useEffect, useState } from 'react';
import CurrencyBlock from './currency-block/CurrencyBlock';
import styles from './CurrencyTable.module.scss';
import usefetch from 'use-fetch';

const CurrencyTable = ({ currenciesNames, latest, base }) => {
    const [rates, setRates] = useState();
    const [yesterdayRates, setYesterdayRates] = useState();
    useEffect(() => {
        if (latest && latest.rates) {
            setRates(latest.rates)
        }
    }, [latest])

    const d = new Date();
    const date = d.toISOString().slice(0, 9);
    const day = parseInt(d.toISOString()[9]) - 1;
    useEffect(() => {
        usefetch(`https://api.frankfurter.app/${date + day}?from=${base}`, { json: true })
            .then(response => {
                setYesterdayRates(response.body.rates);
                console.log(response.body.rates);
            }).catch(e => {
                console.log(e);
            })
    }, [base])
    return (
        <>
            {rates && yesterdayRates && currenciesNames &&
                <div div className={styles.container}>
                    {Object.keys(rates).map(c =>
                        <div className={styles.currnecyBlock}>
                            <CurrencyBlock base={base} rate={rates[c]} symbol={c} name={currenciesNames[c]} yesterdayRate={yesterdayRates[c]} />
                        </div>
                    )}
                </div>

            }
        </>
    );
}

export

    default CurrencyTable;