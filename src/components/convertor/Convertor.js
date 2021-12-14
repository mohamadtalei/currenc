import styles from './Convertor.module.scss'
import cn from "classnames";
import { useState } from 'react';
import BaseSelector from '../home/base-selector/BaseSelector';
import FromSelector from './from-selector/FromSelector.js'
import SelectorItem from '../home/base-selector/SelectorItem.js/SelectorItem.js';

const Convertor = (currenciesNames) => {
    const [fromDropDown,set_fromDropDown] = useState(false)
    const [toDropDown,set_toDropDown] = useState(false)
    const [convertedNumber,convertedNumSetter] = useState(0)

    console.log(currenciesNames);

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.topic}> CONVERTOR </div>
                <div className={styles.content}>
                    <p> Amount : </p>
                    <input type="number" required /* value={flaotNumber} */ step="0.1" placeholder="" /*onChange={e => numFloater(e.target.value)} */ className={styles.amount}/> 
                </div>

                <div className={styles["from-to"]}>

                    {/* part 1 : from */}

                    <div className={styles["from-container"]}>

                        <p><b> Convert From : </b></p>

                        <div className={styles["BaseSelector-container"]}>
                            <BaseSelector/>
                        </div>

                        {currenciesNames && <div className={styles}>
                            {
                                Object.keys(currenciesNames).map(() => <FromSelector />)
                            }   
                        </div>}    

                        {/* <div className={cn({[styles.from]:true,  [styles.inside]: inside  })}
                            onClick={()=>{set_fromDropDown(!fromDropDown)}}>
                            <span className={cn({[styles.icon]: true, [styles.transformedArrow]: fromDropDown})}>
                            <Arrow />
                            </span>
                        </div>
                        
                        <div className={cn({[styles["from-options"]]:true, [styles.opened]:fromDropDown})}>
                                {currenciesNames &&<div className={styles.itemContainer}>
                                    {
                                        Object.keys(currenciesNames).filter(c => c != base).map((c) =>
                                            <SelectorItem symbol={c} setBase={setBase} />)
                                    }
                                </div>
                                }
                        </div> */}

                    </div>

                    {/* part 2 : to */}

                    <div className={styles["to-container"]}>

                        <p><b> to : </b></p>

                        <div className={styles["BaseSelector-container"]}>
                            <BaseSelector/>
                        </div>

                        {/* <div className={cn({[styles.to]:true, [styles.inside]: inside })}
                            onClick={()=>{set_toDropDown(!toDropDown)}}>
                            <span className={cn({[styles.icon]: true, [styles.transformedArrow]: toDropDown})}>
                            <Arrow />
                            </span>
                        </div>
                        
                        <div className={cn({[styles["to-options"]]:true, [styles.opened]:toDropDown})}>
                                {currenciesNames &&<div className={styles.itemContainer}>
                                    {
                                        Object.keys(currenciesNames).filter(c => c != base).map((c) =>
                                            <SelectorItem symbol={c} setBase={setBase} />)
                                    }
                                </div>
                                }
                        </div> */}

                    </div>
                </div>

                <div className={styles.converted}>
                    <span className={styles["converted-number"]}>
                        {convertedNumber}
                    </span>
                </div>
            </div>  
        </div>
    );
}
 
export default Convertor;
