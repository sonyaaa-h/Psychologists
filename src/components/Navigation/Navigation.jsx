import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.isActive);
};

const Navigation = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className={s.navWrap}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            <NavLink to="/psychologists" className={buildLinkClass}>
                Psychologists
            </NavLink>
            {user &&  <NavLink to="/favorites" className={buildLinkClass}>
                Favorites
            </NavLink>}
        </nav>
    );
};
export default Navigation;
