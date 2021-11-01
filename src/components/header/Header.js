import Navbar from '../navbar/Navbar';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    );
}

export default Header;