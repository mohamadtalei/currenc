import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, onMainPage }) => {
    return (
        <div>
            <Navbar onMainPage={onMainPage} />
            {onMainPage &&
                <Header />
            }
            {children}
        </div>
    );
}

export default Layout;