import styles from './CurrencyBlock.module.scss'
import { useEffect, useState } from 'react';
import cn from 'classnames';

const CurrencyBlock = ({ symbol, name, yesterdayRate, base, rate }) => {

    const [percentage, setPercentage] = useState();
    useEffect(() => {
        setPercentage(("" + ((rate * 100 / yesterdayRate) - 100)).slice(0, 6));
    }, [base])
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
                <div className={styles.priceContainer}></div>
                <div className={styles.iconsContainer}></div>
            </div>
            <div className="convertor"></div>
        </div>
    );
}

export default CurrencyBlock;