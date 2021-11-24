import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { useSelector } from 'react-redux';
import ThemeToggler from './components/navbar/theme-toggler/ThemeToggler';
import { useEffect, useState } from 'react';

function App() {
  const theme = useSelector((state) => state.themeReducer);
  const [primary, setprimary] = useState()
  const [secondary, setSecondary] = useState()
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
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
