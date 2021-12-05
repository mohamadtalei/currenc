import styles from './Chart.module.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';
import RangeSelector from './range-selector/RangeSelector';
import usefetch from 'use-fetch'

const Chart = ({ symbol, base }) => {
    const d = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 200, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 2400, amt: 2400 }];
    const [data, setData] = useState()
    const [today, setToday] = useState()
    const [range, setRange] = useState(0)
    const [startDate, setStartDate] = useState()
    const dateToStr = (d) => {
        // return (d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1) + "-" + (d.getUTCDate() > 9 ? d.getUTCDate() : "0" + d.getUTCDate()))
        return (d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1 > 9 ? parseInt(d.getMonth()) + 1 : "0" + (parseInt(d.getMonth()) + 1)) + "-" + (d.getUTCDate() > 9 ? d.getUTCDate() : "0" + d.getUTCDate()))

    }
    useEffect(() => {//set range dates
        const d = new Date();
        d.setDate(d.getDate() - 1);
        setToday(dateToStr(d));
        switch (range) {
            case 0:
                d.setDate(d.getDate() - 10);
                setStartDate(dateToStr(d))
                break;
            case 1:
                d.setDate(d.getDate() - 30);
                setStartDate(dateToStr(d))
                break;
            case 2:
                d.setDate(d.getDate() - 183);
                setStartDate(dateToStr(d))
                break;
            case 3:
                d.setDate(d.getDate() - 365);
                setStartDate(dateToStr(d))
                break;
            case 4:
                d.setDate(d.getDate() - 730);
                setStartDate(dateToStr(d))
                break;
            default:
                break;
        }
    }, [range, base, symbol])
    useEffect(() => {
        if (startDate && today) {
            usefetch(`https://api.frankfurter.app/${startDate}..${today}?from=${symbol}&to=${base}`, { json: true })
                .then(response => {
                    var res = response.body.rates;
                    let data = []
                    Object.keys(res).map(r => {
                        data.push({ name: r, rate: res[r][base], pv: 2400, amt: 2400 })
                    })
                    setData(data)
                }).catch(e => {
                    console.log(e)
                })
        }
    }, [startDate])
    return (
        <div className={styles.container}>
            <div className={styles.rangeSelector}><RangeSelector range={range} setRange={setRange} /></div>
            <div className={styles.chartContainer}>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="rate" stroke="#267EDF" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
}

export default Chart;