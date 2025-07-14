import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrap}>
                <div className={s.navLink}>
                    <Link to={"/"} className={s.logo}>
                        psychologists<span className={s.dot}>.</span>
                        <span className={s.span}>services</span>
                    </Link>
                    <Navigation />
                </div>
                <div className={s.navBtn}>
                    <button type="button" className={s.logIn}>
                        Log In
                    </button>
                    <button type="button" className={s.register}>
                        Registration
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
