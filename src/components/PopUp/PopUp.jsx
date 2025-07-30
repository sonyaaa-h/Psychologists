import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";

import closeSvg from "../../assets/icons/close.svg";
import s from "./PopUp.module.css";
import PopUpForm from "../PopUpForm/PopUpForm";

const PopUp = ({ onClose, psychologist }) => {
    const auth = getAuth();
    const user = auth.currentUser;

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

    useEffect(() => {
        if (!user) {
            toast.error("You need to be logged in to make an appointment.");
        }
    }, [user]);

    return (
        <div className={s.backdrop} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <button className={s.close} onClick={onClose}>
                    <img src={closeSvg} alt="close" />
                </button>
                <div className={s.titleWrap}>
                    <h2 className={s.title}>Make an appointment with a psychologist</h2>
                    <p className={s.infoText}>
                        You are on the verge of changing your life for the better. Fill out
                        the short form below to book your personal appointment with a
                        professional psychologist. We guarantee confidentiality and respect
                        for your privacy.
                    </p>
                </div>
                <div className={s.psychologistWrap}>
                    <img src={psychologist.avatar_url} alt={psychologist.name} className={s.foto} />
                    <div className={s.nameWrap}>
                        <p className={s.psychologistText}>Your psychologist</p>
                        <p className={s.psychologistName}>{psychologist.name}</p>
                    </div>
                </div>

                {user ? (
                    <PopUpForm onClose={onClose} />
                ) : (
                    <p className={s.loginMessage}>Please log in to book an appointment.</p>
                )}
            </div>
        </div>
    );
};

export default PopUp;
