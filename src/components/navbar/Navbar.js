import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react';
import Logo from '../../icons/logo';
import cn from "classnames";

const Navbar = () => {
    const [navCollapse, setNavCollapse] = useState(false);
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNavCollapse(true)
            } else {
                setNavCollapse(false)
            }
        }
    }, [])
    return (
        <div className={cn({
            [styles.container]: true,
            [styles.collapsedContainer]: navCollapse
        })}>
            <div className={cn({
                [styles.navbar]: true,
                [styles.collapsedNavbar]: navCollapse
            })}>
                <div className={cn({
                    [styles.logo]: true,
                    [styles.collapsedLogo]: navCollapse
                })}>
                    CURREN <Logo />
                </div>
                <div className={cn({
                    [styles.navItemsContainer]: true,
                    [styles.collapsedNavItemsContainer]: navCollapse
                })}>
                    <a className={cn({
                        [styles.navItems]: true,
                        [styles.collapsedNavItems]: navCollapse
                    })}>HOME</a>
                    <a className={cn({
                        [styles.navItems]: true,
                        [styles.collapsedNavItems]: navCollapse
                    })}>SAVED</a>
                    <a className={cn({
                        [styles.navItems]: true,
                        [styles.collapsedNavItems]: navCollapse
                    })}>ABOUT US</a>
                </div>
            </div>

        </div >
    );
}

export default Navbar;