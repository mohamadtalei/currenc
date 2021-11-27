import { useEffect, useState } from 'react';
import CurrencyBlock from './currency-block/CurrencyBlock';
import styles from './CurrencyTable.module.scss';
import usefetch from 'use-fetch';

const CurrencyTable = ({ currenciesNames, latest, base, date }) => {
    const [rates, setRates] = useState();
    const [yesterdayRates, setYesterdayRates] = useState();
    const [pending, setPending] = useState();
    const getYesterday = (date) => {
        const d = Date.parse(date);
        const y = new Date(d - 86400000);
        return y.getFullYear() + "-" + y.getMonth() + "-" + y.getDate();
    }
    useEffect(() => {
        if (latest && latest.rates) {
            setRates(latest.rates)
        }
    }, [latest])
    useEffect(() => {
        setPending(true);
        const yesterDay = getYesterday(date);
        usefetch(`https://api.frankfurter.app/${yesterDay}?from=${base}`, { json: true })
            .then(response => {
                setYesterdayRates(response.body.rates);
                setPending(false);
            }).catch(e => {
                console.log(e);
            })
    }, [base, date])
    return (
        <>
            {pending &&
                <div>loading</div>
            }
            {rates && yesterdayRates && currenciesNames && !pending &&
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