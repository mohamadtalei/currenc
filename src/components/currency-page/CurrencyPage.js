import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './CurrencyPage.module.scss'
import usefetch from 'use-fetch'
import BaseSelector from '../home/base-selector/BaseSelector';
import cn from 'classnames'
import Chart from './chart/Chart';

const CurrencyPage = () => {
    const symbol = useParams().symbol;
    const [date, setDate] = useState()
    const [currenciesName, setCurrenciesName] = useState()
    const [base, setBase] = useState(symbol === 'EUR' ? 'USD' : 'EUR')
    const [rate, setRate] = useState()
    const [yesterday, setYesterday] = useState()
    const [yesterdayRate, setYesterdayRate] = useState()
    const [percentage, setPercentage] = useState();
    useEffect(() => {
        setPercentage(("" + (((rate / yesterdayRate) - 1)) * 100).slice(0, 6));
    }, [base, rate, yesterdayRate])
    useEffect(() => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        setDate(d.getFullYear() + "-"
            + (d.getMonth() > 9 ? (parseInt(d.getMonth()) + 1) : "0" + (parseInt(d.getMonth()) + 1)) + "-"
            + (d.getUTCDate() > 9 ? d.getUTCDate() : "0" + d.getUTCDate()));
        d.setDate(d.getDate() - 1);
        setYesterday(d.getFullYear() + "-"
            + (d.getMonth() > 9 ? (parseInt(d.getMonth()) + 1) : "0" + (parseInt(d.getMonth()) + 1)) + "-"
            + (d.getUTCDate() > 9 ? d.getUTCDate() : "0" + d.getUTCDate()));
    }, [])
    useEffect(() => {
        usefetch(`https://api.frankfurter.app/currencies`, { json: true })
            .then(response => {
                setCurrenciesName(response.body);
            }).catch(e => {
                console.log(e)
            })
    }, [])
    useEffect(() => {
        if (yesterday && date) {
            usefetch(`https://api.frankfurter.app/${yesterday}..${date}?from=${symbol}&to=${base}`, { json: true })
                .then(response => {
                    setRate(response.body.rates[date][base]);
                    setYesterdayRate(response.body.rates[yesterday][base])
                }).catch(e => {
                    console.log(e)
                })
        }
    }, [date, yesterday, base])
    return (
        <div className={styles.container}>
            {currenciesName &&
                <div className={styles.content}>
                    <div className={styles.topDiv}>
                        <div className={styles.symbolContainer}>
                            <div className={styles.symbol}>
                                <p className={styles.s}>{symbol}</p>
                                <p className={cn({
                                    [styles.percentage]: true,
                                    [styles.negative]: parseFloat(percentage) < 0
                                })} >{parseFloat(percentage) >= 0 ? `+${percentage} %` : `${percentage} %`}</p>
                            </div>
                            <div className={styles.name}>{currenciesName[symbol]}</div>
                        </div>
                        <div className={styles.baseSelectorContainer}>
                            <div className={styles.baseSelectot}>
                                <BaseSelector inside={true} base={base} setBase={setBase} currenciesNames={currenciesName} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <div className={styles.rateContainer}>
                            <p className={styles.rateP}>1 {symbol} = <span className={styles.rate}>{rate} {base}</span></p>
                        </div>
                        <div className={styles.chartContainer}>
                            <Chart symbol={symbol} base={base} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}



export default CurrencyPage;