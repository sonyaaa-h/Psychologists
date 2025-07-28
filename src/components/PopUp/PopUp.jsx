import { useEffect } from "react";
import closeSvg from "../../assets/icons/close.svg";
import s from "./PopUp.module.css";
import PopUpForm from "../PopUpForm/PopUpForm";

const PopUp = ({ onClose, psychologist }) => {
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
                <div className={s.titleWrap}>
                    <h2 className={s.title}>Make an appointment with a psychologists</h2>
                    <p className={s.infoText}>
                        You are on the verge of changing your life for the better. Fill out
                        the short form below to book your personal appointment with a
                        professional psychologist. We guarantee confidentiality and respect
                        for your privacy.
                    </p>
                </div>
                <div className={s.psychologistWrap}>
                    <img src={psychologist.avatar_url} alt={psychologist.name} className={s.foto}/>
                    <div className={s.nameWrap}>
                        <p className={s.psychologistText}>Your psychologists</p>
                        <p className={s.psychologistName}>{psychologist.name}</p>
                    </div>
                </div>
                <PopUpForm/>
                <button className={s.sendBtn}>Send</button>
            </div>
        </div>
    );
};
export default PopUp;
