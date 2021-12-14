import styles from './CurrencyBlock.module.scss'
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Switch from '../../../../icons/switch.js'
import Star from '../../../../icons/star.js'
import Chart from '../../../../icons/charts.js'
import { useNavigate } from "react-router-dom";
import BaseSelector from '../../base-selector/BaseSelector.js'

const CurrencyBlock = ({ symbol, name, yesterdayRate, base, rate }) => {
    const navigate = useNavigate()
    const [percentage, setPercentage] = useState();
    const [convertorBase, setConvertorBase] = useState(base);
    const [convertorToggler, setConvertorToggler] = useState(false);
    useEffect(() => {
        setPercentage(("" + (((rate / yesterdayRate) - 1)) * 100).slice(0, 6));
    }, [base, rate, yesterdayRate])
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
                        <span className={styles.switchIcon} onClick={() => setConvertorToggler(!convertorToggler)}><Switch /></span>
                        <span className={styles.starIcon}><Star /></span>
                        <span className={styles.chartIcon}><Chart /></span>
                    </div>
                </div>
            </div>
            <div className={cn({
                [styles.convertor]: true,
                [styles.openedConvertor]: convertorToggler
            })}>
                <div className={styles.topDiv}>
                    <div className={styles.baseSelector}><p>from {symbol} to </p>
                        <div className={styles.selectorContainer}>
                            <BaseSelector base={convertorBase} setBase={setConvertorBase} inside={true} />
                        </div>
                    </div>
                    <button className={styles.convertButton}>convert</button>
                </div>
                <div className={styles.bottomDiv}>
                    <p className={styles.convertorPar}>1 {symbol} =</p>
                    <p className={styles.convertorResult}>254534 {base}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrencyBlock;