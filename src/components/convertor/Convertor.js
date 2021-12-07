import styles from './Convertor.module.scss'
import cn from "classnames";
import { useState } from 'react';
import Arrow from '../../icons/arrow';

const Convertor = () => {
    const [dropDown2,setDropDown2] = useState(false)
    return ( 
        <div className={styles.container}>

            <div className={styles.topic}> CONVERTOR </div>
            <div className={styles.content}>
                <p> Amount : </p>
                <input type="text" placeholder="" className={styles.amount}/> 
            </div>

            <div className={styles["from-to"]}>

                <p><b> Convert From : </b></p>

                <div className={cn({[styles.from]:true, /* [styles.inside]: inside */ })}
                    onClick={()=>{setDropDown2(!dropDown2)}}>
                    <span className={cn({[styles.icon]: true, [styles.transformedArrow]: dropDown2})}>
                    <Arrow />
                    </span>
                </div>
                
                <div className={cn({[styles.options]:true, [styles.opened]:dropDown2})}>
                        {/* {currenciesNames &&<div className={styles.itemContainer}>
                            {
                                Object.keys(currenciesNames).filter(c => c != base).map((c) =>
                                    <SelectorItem symbol={c} setBase={setBase} />)
                            }
                        </div>
                        } */}
                </div>


            </div>
        </div>
    );
}
 
export default Convertor;
