import styles from './CurrencyBlock.module.scss'
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Switch from '../../../../icons/switch.js'
import Star from '../../../../icons/star.js'
import Chart from '../../../../icons/charts.js'

const CurrencyBlock = ({ symbol, name, yesterdayRate, base, rate }) => {

    const [percentage, setPercentage] = useState();
    useEffect(() => {
        setPercentage(("" + (((rate / yesterdayRate) - 1)) * 100).slice(0, 6));
    }, [base, rate, yesterdayRate])
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.nameContainer}>
                    <div className={styles.symbolContainer}>
                        <p className={styles.symbol}>{symbol}</p>
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
                        <span className={styles.switchIcon}><Switch /></span>
                        <span className={styles.starIcon}><Star /></span>
                        <span className={styles.chartIcon}><Chart /></span>
                    </div>
                </div>
            </div>
            <div className="convertor"></div>
        </div>
    );
}

export default CurrencyBlock;