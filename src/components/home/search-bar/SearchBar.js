import { useState } from 'react';
import SerachIcon from '../../../icons/search';
import styles from './SearchBar.module.scss';
import { useNavigate } from 'react-router';

const SearchBar = () => {
    const [input, setInput] = useState()
    const navigate = useNavigate()
    const searchHandler = () => {
        navigate(`/searchResult/${input}`)
    }
    return (
        <div className={styles.container}>
            <span onClick={searchHandler} className={styles.searchIcon}>
                <SerachIcon />
            </span>
            <input placeholder="search" type="text" className={styles.input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default SearchBar;