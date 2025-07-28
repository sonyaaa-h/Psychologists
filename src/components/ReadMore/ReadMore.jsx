import { useState } from "react";
import straSvg from "../../assets/icons/star.svg";
import s from "./ReadMore.module.css";
import PopUp from "../PopUp/PopUp";

const ReadMore = ({ psychologist }) => {
    const [openModal, setOpenModal] = useState(false);
    const { reviews } = psychologist;

    return (
        <div className={s.readMoreWrap}>
            <ul className={s.reviewsList}>
                {reviews.map((review, index) => {
                    const initial = review.reviewer.charAt(0).toUpperCase();

                    return (
                        <li key={index}>
                            <div className={s.reviewer}>
                                <div className={s.avatar}>{initial}</div>
                                <div>
                                    <h3 className={s.name}>{review.reviewer}</h3>
                                    <div className={s.ratingWrap}>
                                        <img src={straSvg} alt="rating" />
                                        <p>{Number(review.rating).toFixed(1)}</p>
                                    </div>
                                </div>
                            </div>
                            <p className={s.comment}>{review.comment}</p>
                        </li>
                    );
                })}
            </ul>
            <button className={s.makeAp} onClick={() => setOpenModal(true)}>
                Make an appointment
            </button>
            {openModal && (
                <PopUp
                    onClose={() => setOpenModal(false)}
                    psychologist={psychologist}
                />
            )}
        </div>
    );
};
export default ReadMore;
