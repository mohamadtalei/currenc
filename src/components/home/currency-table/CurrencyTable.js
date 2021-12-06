import CurrencyBlock from './currency-block/CurrencyBlock';
import styles from './CurrencyTable.module.scss';

const CurrencyTable = ({ pending, currenciesNames, base, yesterdayRates, rates }) => {

    return (
        <>
            {rates && yesterdayRates && currenciesNames && !pending &&
                <div div className={styles.container}>
                    {Object.keys(currenciesNames).filter(c => c != base).map(c =>
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