import { useState } from 'react';
import styles from './ThemeToggler.module.scss'
import cn from 'classnames'
import Sun from '../../../icons/sun.js'
import Moon from '../../../icons/moon.js'
import { useDispatch } from 'react-redux';


const ThemeToggler = () => {
    const [lightTheme, setLightTheme] = useState(true)
    const dispatch = useDispatch()
    const toggleHandler = () => {
        setLightTheme(!lightTheme)
        if (lightTheme) {
            dispatch({ type: "changeTheme", payload: "dark" });
        }
        else {
            dispatch({ type: "changeTheme", payload: "light" });
        }
    }
    return (
        <div onClick={toggleHandler} className={cn({
            [styles.container]: true,
            [styles.toggled]: !lightTheme
        })}>
            <span className={cn({
                [styles.circle]: true,
                [styles.toggledCircle]: !lightTheme
            })}>
                <span className={cn({ [styles.sunIcon]: true, [styles.hidden]: !lightTheme })}><Sun /></span>
                <span className={cn({ [styles.moonIcon]: true, [styles.hidden]: lightTheme })}><Moon /></span>
            </span>
        </div >
    );
}

export default ThemeToggler;