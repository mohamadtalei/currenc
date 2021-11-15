import { useState } from 'react';
import Arrow from '../../../icons/arrow';
import styles from './BaseSelector.module.scss';
import cn from "classnames";

const BaseSelector = () => {
    const tst = ["USD", "AUD", "CZK", "PHP", "RUB", "SEK", "USD", "AUD", "CZK", "PHP", "RUB", "SEK"]
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className={styles.container}>
            <span className={styles.text}>Base : </span>
            <div className={styles.selector} onClick={() => { setDropDown(!dropDown) }}>
                <div className={cn({
                    [styles.space]: true,
                    [styles.openedSpace]: dropDown
                })}></div>
                <div className={styles.base}>
                    EUR
                </div>
                <span className={cn({
                    [styles.icon]: true,
                    [styles.transformedArrow]: dropDown
                })}>
                    <Arrow />
                </span>
                <div className={cn({
                    [styles.options]: true,
                    [styles.opened]: dropDown
                })}>
                    <div className={styles.itemContainer}>
                        {tst.map((o) =>
                            <div className={styles.item}>{o}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseSelector;