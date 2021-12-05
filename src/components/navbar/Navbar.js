import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react';
import Logo from '../../icons/logo';
import cn from "classnames";
import SideMenuIcon from '../../icons/sideMenu';
import CloseIcon from '../../icons/close';
import ThemeToggler from './theme-toggler/ThemeToggler';
import { useNavigate } from 'react-router';

const Navbar = ({ onMainPage }) => {
    const navigate = useNavigate()
    const [navCollapse, setNavCollapse] = useState(!onMainPage);
    const [sideBar, setSideBar] = useState(false);
    useEffect(() => {
        if (!onMainPage) {
            setNavCollapse(true)
            window.onscroll = undefined
        }
        else {
            window.onscroll = function () { scrollFunction() };
            setNavCollapse(false)
        }
        function scrollFunction() {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                setNavCollapse(true)
            } else {
                setNavCollapse(false)
            }
        }
    }, [onMainPage])
    return (
        <>
            <div className={cn({
                [styles.container]: true,
                [styles.collapsedContainer]: navCollapse
            })}>
                <div className={cn({
                    [styles.navbar]: true,
                    [styles.collapsedNavbar]: navCollapse
                })}>
                    <div onClick={() => navigate('/')} className={cn({
                        [styles.logo]: true,
                        [styles.collapsedLogo]: navCollapse
                    })}>
                        CURREN <Logo />
                    </div>
                    <div className={cn({
                        [styles.navItemsContainer]: true,
                        [styles.collapsedNavItemsContainer]: navCollapse
                    })}>
                        <span onClick={() => { setSideBar(true) }} className={cn({
                            [styles.sideMenuButton]: true,
                            [styles.collapsedSideButtonMenu]: navCollapse
                        })}>
                            <SideMenuIcon />
                        </span>
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
                        <div className={cn({
                            [styles.ThemeToggler]: true,
                            [styles.collapsedThemeToggler]: navCollapse
                        })}>
                            <ThemeToggler />
                        </div>
                    </div>
                </div>
            </div >
            <div className={cn({
                [styles.sideNav]: true,
                [styles.hidden]: !sideBar,
            })}>
                <span className={styles.closeIcon} onClick={() => { setSideBar(false) }}><CloseIcon /></span>
                <div className={styles.sideThemeToggler}>
                    <ThemeToggler />
                </div>
                <a className={styles.sideNavItems}>HOME</a>
                <a className={styles.sideNavItems}>SAVED</a>
                <a className={styles.sideNavItems}>ABOUT US</a>
            </div>
        </>
    );
}

export default Navbar;