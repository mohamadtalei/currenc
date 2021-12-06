import Home from './components/home/Home';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyPage from './components/currency-page/CurrencyPage';
import Layout from './components/layout/Layout';
import usefetch from 'use-fetch'
import SearchResult from './components/search-result-page/SearchResult';

function App() {
  const [currenciesNames, setCurrenciesNames] = useState()
  const theme = useSelector((state) => state.themeReducer);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty('--primary', "#EEEEEE");
      document.documentElement.style.setProperty('--secondary', "#FDFDFD");
      document.documentElement.style.setProperty('--font-color', "#252222");
      document.documentElement.style.setProperty('--secondary-font-color', "#3B3B3B");
    }
    else {
      document.documentElement.style.setProperty('--primary', "#3a3a3a");
      document.documentElement.style.setProperty('--secondary', "#2B2B2B");
      document.documentElement.style.setProperty('--font-color', "#FFFFFF");
      document.documentElement.style.setProperty('--secondary-font-color', "#b8b8b8");
    }
  }, [theme])
  useEffect(() => {  //request for currency symnols
    // setPending2(true);
    usefetch(`https://api.frankfurter.app/currencies`, { json: true })
      .then(response => {
        setCurrenciesNames(response.body);
      }).catch(e => {
        console.log(e)
      })
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout onMainPage={true}><Home currenciesNames={currenciesNames} fullNames={currenciesNames} /></Layout>} />
          <Route path="/:symbol" element={<Layout onMainPage={false}><CurrencyPage /></Layout>} />
          <Route path="/searchResult/:symbol" element={<Layout onMainPage={false}><SearchResult currenciesNames={currenciesNames} /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
