import straSvg from "../../assets/icons/star.svg";
import s from "./ReadMore.module.css";

const ReadMore = ({ reviews }) => {
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
            <button className={s.makeAp}>Make an appointment</button>
        </div>
    );
};
export default ReadMore;
