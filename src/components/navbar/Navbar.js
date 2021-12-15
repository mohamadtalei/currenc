import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react';
import Logo from '../../icons/logo';
import cn from "classnames";
import SideMenuIcon from '../../icons/sideMenu';
import CloseIcon from '../../icons/close';
import ThemeToggler from './theme-toggler/ThemeToggler';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className={cn({
                            [styles.navItems]: true,
                            [styles.collapsedNavItems]: navCollapse
                        })}>HOME</Link>
                        <Link to="/convertor" className={cn({
                            [styles.navItems]: true,
                            [styles.collapsedNavItems]: navCollapse
                        })}>CONVERTOR</Link>
                        <Link to="/aboutus" className={cn({
                            [styles.navItems]: true,
                            [styles.collapsedNavItems]: navCollapse
                        })}>ABOUT US</Link>
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
                <Link to="/" className={styles.sideNavItems}>HOME</Link>
                <Link to="/" className={styles.sideNavItems}>ABOUT US</Link>
            </div>
        </>
    );
}

export default Navbar;