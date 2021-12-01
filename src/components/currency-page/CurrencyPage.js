import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './CurrencyPage.module.scss'

const CurrencyPage = ({ gdate }) => {
    const symbol = useParams().symbol;
    const [date, setDate] = useState()
    useEffect(() => {
        console.log();
        const today = new Date(Date.parse(new Date()) - 86400000);
        setDate(today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate());
    }, [])
    console.log(date);
    return (
        <div className={styles.container}>

        </div>
    );
}



export default CurrencyPage;