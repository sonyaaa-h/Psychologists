import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import closeSvg from "../../assets/icons/close.svg";
import showPasswSvg from "../../assets/icons/open-password.svg";
import closePassSvg from "../../assets/icons/close-password.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

const emailRegexp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required!")
        .matches(emailRegexp, "Invalid email format"),
    password: yup
        .string()
        .required("Password is required!")
        .min(8, "Password must be at least 8 characters long"),
});

const LoginForm = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success("Successfuly login");
            onClose();
        } catch {
            toast.error("Invalid credential");
        }
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={s.backdrop} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <button className={s.close} onClick={onClose}>
                    <img src={closeSvg} alt="close" />
                </button>
                <h2 className={s.title}>Log In</h2>
                <p className={s.text}>
                    Welcome back! Please enter your credentials to access your account and
                    continue your search for a <br /> psychologist.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <div className={s.inputWrap}>
                        <input
                            {...register("email")}
                            type="text"
                            placeholder="Email"
                            className={s.inputEmail}
                        />
                        <p className={s.error}>{errors.email?.message}</p>
                    </div>

                    <div className={s.inputWrap}>
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={s.inputPassword}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className={s.showPassw}
                        >
                            {showPassword ? (
                                <img src={showPasswSvg} alt="show password" />
                            ) : (
                                <img src={closePassSvg} alt="open password" />
                            )}
                        </button>
                        <p className={s.error}>{errors.password?.message}</p>
                    </div>

                    <button type="submit" className={s.loginBtn}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
