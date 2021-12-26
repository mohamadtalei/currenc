import styles from './CurrencyBlock.module.scss';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Switch from '../../../../icons/switch.js';
import Star from '../../../../icons/star.js';
import Chart from '../../../../icons/charts.js';
import { useNavigate } from "react-router-dom";
import BaseSelector from '../../base-selector/BaseSelector.js';
import usefetch from 'use-fetch';

const CurrencyBlock = ({ opened, index, setOpened, currenciesNames, symbol, name, yesterdayRate, base, rate }) => {
    const navigate = useNavigate()
    const [percentage, setPercentage] = useState();
    const [convertorBase, setConvertorBase] = useState(base);
    const [convertorToggler, setConvertorToggler] = useState(false);
    const [convertorResult, setConvertorResult] = useState();
    const [amount, setAmount] = useState(1);
    useEffect(() => {
        setPercentage(("" + (((rate / yesterdayRate) - 1)) * 100).slice(0, 6));
    }, [base, rate, yesterdayRate])
    useEffect(() => {
        if (opened != index) {
            setConvertorToggler(false)
        }
    }, [opened])
    const convertHandler = () => {
        if (convertorBase) {
            usefetch(`https://api.frankfurter.app/latest?from=${symbol}&to=${convertorBase}`, { json: true })
                .then(response => {
                    setConvertorResult(response.body.rates[convertorBase]);
                }).catch(e => {
                    console.log(e);
                })
        }
    }
    const switchHandler = () => {
        setConvertorToggler(!convertorToggler)
        setOpened(index)
    }
    useEffect(() => {
        setConvertorResult();
    }, [convertorBase])
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.nameContainer}>
                    <div className={styles.symbolContainer}>
                        <p onClick={() => navigate(`/${symbol}`)} className={styles.symbol}>{symbol}</p>
                        <p className={cn({
                            [styles.percentage]: true,
                            [styles.negative]: parseFloat(percentage) < 0
                        })}>{parseFloat(percentage) >= 0 ? `+${percentage} %` : `${percentage} %`}</p>
                    </div>
                    <div className={styles.fullNameContainer}>
                        <p className={styles.fullName}>{name}</p>
                    </div>
                </div>
                <div className={styles.priceContainer}>
                    <p className={styles.price}>{rate} {symbol}</p>
                </div>
                <div className={styles.iconsContainer}>
                    <div className={styles.icons}>
                        <div className={styles.iconsWrapper}>
                            <span className={styles.chartIcon}><Chart /></span>
                            <span className={styles.switchIcon} onClick={switchHandler}><Switch /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn({
                [styles.convertor]: true,
                [styles.openedConvertor]: convertorToggler
            })}>
                <div className={styles.topDiv}>
                    <div className={styles.baseAndButton}>
                        <div className={styles.baseSelector}><p>from {symbol} to </p>
                            <div className={styles.selectorContainer}>
                                <BaseSelector currenciesNames={currenciesNames} base={convertorBase} setBase={setConvertorBase} inside={true} />
                            </div>
                        </div>
                        <div className={styles.amountContainer}>
                            <div className={styles.amountWrapper}>
                                Amount: <input onChange={(e) => setAmount(e.target.value)} value={amount} className={styles.amount} type="number" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={convertHandler} className={styles.convertButton}>convert</button>
                    </div>

                </div>
                {convertorResult &&
                    <div className={styles.bottomDiv}>
                        <p className={styles.convertorPar}>{amount > 0 ? amount : 1} {symbol} =</p>
                        <p className={styles.convertorResult}>{amount > 0 ? convertorResult * amount : convertorResult} {convertorBase}</p>
                    </div>}
            </div>
        </div>
    );
}

export default CurrencyBlock;