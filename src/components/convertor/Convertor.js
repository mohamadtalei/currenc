import { useState } from 'react';
import BaseSelector from '../home/base-selector/BaseSelector';
import styles from './Convertor.module.scss';
import usefetch from 'use-fetch';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'

const Convertor = ({ currenciesNames }) => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState();
    const [reverseResult, setReverseResult] = useState();
    const convert = () => {
        if (from && to) {
            usefetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`, { json: true })
                .then(response => {
                    setResult(response.body.rates[to]);
                }).catch(e => {
                    console.log(e);
                });
            usefetch(`https://api.frankfurter.app/latest?from=${to}&to=${from}`, { json: true })
                .then(response => {
                    setReverseResult(response.body.rates[from]);
                }).catch(e => {
                    console.log(e);
                });
        }
    }
    useEffect(() => {
        setResult();
    }, [to, from])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.selectors}>
                    <div className={styles.amountContainer}>
                        Amount: <input className={styles.amount} type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </div>
                    <div className={styles.BaseSelectors}>
                        <div className={styles.fromContainer}>
                            <BaseSelector
                                base={from}
                                currenciesNames={currenciesNames}
                                inside={true}
                                setBase={setFrom}
                                text={"from: "}
                            />
                        </div>
                        <div className={styles.toContainer}>
                            <BaseSelector
                                base={to}
                                currenciesNames={currenciesNames}
                                inside={true}
                                setBase={setTo}
                                text={"to: "}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => convert()} className={styles.convertButton}>Convert</button>
                </div>
                <div className={cn({
                    [styles.resultContainer]: true,
                    [styles.closed]: !result,
                    [styles.opened]: result
                })}>
                    <p className={styles.fromP}>{amount ? amount : 1} <Link to={`/${from}`}>{from} </Link>= </p>
                    <div className={styles.resultDiv}>
                        <p className={styles.toP}>{('' + (amount ? amount * result : result)).substring(0, 7)} <Link to={`/${to}`}>{to}</Link></p>
                        <p className={styles.reverseResult}>1 {to} = {('' + reverseResult).substring(0, 7)} {from}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Convertor;
