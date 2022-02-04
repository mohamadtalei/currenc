import { useState } from 'react';
import CurrencyBlock from './currency-block/CurrencyBlock';
import styles from './CurrencyTable.module.scss';

const CurrencyTable = ({ pending, currenciesNames, base, yesterdayRates, rates }) => {
    const [opened, setOpened] = useState(-1)
    return (
        <>
            {rates && yesterdayRates && currenciesNames && !pending &&
                <div div className={styles.container}>
                    {Object.keys(currenciesNames).filter(c => c !== base).map((c, i) =>
                        <div className={styles.currnecyBlock}>
                            <CurrencyBlock opened={opened} index={i} setOpened={setOpened} base={base} rate={rates[c]} symbol={c} name={currenciesNames[c]} yesterdayRate={yesterdayRates[c]} currenciesNames={currenciesNames} />
                        </div>
                    )}
                </div>

            }
        </>
    );
}

export

    default CurrencyTable;