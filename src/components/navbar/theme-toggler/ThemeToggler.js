import { useEffect, useState } from 'react';
import styles from './ThemeToggler.module.scss'
import cn from 'classnames'
import Sun from '../../../icons/sun.js'
import Moon from '../../../icons/moon.js'
import { useDispatch, useSelector } from 'react-redux';


const ThemeToggler = () => {
    const theme = useSelector((state) => state.themeReducer);
    const [lightTheme, setLightTheme] = useState();
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
    useEffect(() => {
        if (theme) {
            if (theme === "light") {
                setLightTheme(true)
            } else {
                setLightTheme(false)
            }
        }
    }, [theme])
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