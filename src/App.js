import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
