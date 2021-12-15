import { useState } from 'react';
import Arrow from '../../../icons/arrow';
import styles from './BaseSelector.module.scss';
import cn from "classnames";
import SelectorItem from './SelectorItem.js/SelectorItem';

const BaseSelector = ({ currenciesNames, setBase, base, inside, text }) => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className={styles.container}>
            {/* <span className={styles.text}>Base : </span> */}
            <div className={cn({
                [styles.selector]: true,
                [styles.inside]: inside
            })} onClick={() => { setDropDown(!dropDown) }}>
                <div className={styles.base}>
                    {text} {base}
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
                })}>{currenciesNames &&
                    <div className={styles.itemContainer}>
                        {
                            Object.keys(currenciesNames).filter(c => c != base).map((c) =>
                            <SelectorItem symbol={c} setBase={setBase} />)
                        }
                    </div>
                    }
                </div>
            </div>
            <div className={cn({
                [styles.space]: true,
                [styles.openedSpace]: dropDown,
            })}></div>
        </div>
    );
}

export default BaseSelector;