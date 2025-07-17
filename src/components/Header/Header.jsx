import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Header = () => {
    const navigate = useNavigate();
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    const [registerFormOpen, setRegisterFormOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("User signed out successfully");
            navigate("/");
        } catch (error) {
            toast.error("Logout error:", error);
        }
    };

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
                {user ? (
                    <button onClick={handleLogout}>Log out</button>
                ) : (
                    <div className={s.navBtn}>
                        <button
                            type="button"
                            className={s.logIn}
                            onClick={() => setLoginFormOpen(true)}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            className={s.register}
                            onClick={() => setRegisterFormOpen(true)}
                        >
                            Registration
                        </button>
                    </div>
                )}
            </div>
            {loginFormOpen && <LoginForm onClose={() => setLoginFormOpen(false)} />}
            {registerFormOpen && (
                <RegisterForm onClose={() => setRegisterFormOpen(false)} />
            )}
        </header>
    );
};
export default Header;
