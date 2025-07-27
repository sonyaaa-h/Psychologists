import starSvg from "../../assets/icons/star.svg";
import heartSvg from "../../assets/icons/heart.svg";
import onlineSvg from "../../assets/icons/online.svg";
import isFavoriteSvg from "../../assets/icons/liked.svg"
import s from "./PsychologistsItem.module.css";
import { useState } from "react";
import ReadMore from "../ReadMore/ReadMore";
import { useFavorites } from "./useFavorites";

const PsychologistsItem = ({ psychologist }) => {
    console.log(psychologist);
    const [readMore, setReadMore] = useState(false);

    const { favorites, toggleFavorite } = useFavorites();

    const isFavorite = favorites.includes(psychologist.id);

    return (
        <li className={s.itemWrap}>
            <div className={s.avatarWrap}>
                <img
                    src={psychologist.avatar_url}
                    alt={psychologist.name}
                    className={s.avatar}
                />
                <img src={onlineSvg} alt="is online" className={s.isOnline} />
            </div>
            <div className={s.infoWrap}>
                <div className={s.titleWrap}>
                    <div className={s.nameWrap}>
                        <p className={s.psychologist}>Psychologist</p>
                        <h2 className={s.name}>{psychologist.name}</h2>
                    </div>
                    <div className={s.filterInfoWrap}>
                        <div className={s.filterPriceWrap}>
                            <div className={s.ratingWrap}>
                                <img src={starSvg} alt="rating" className={s.star} />
                                <p className={s.rating}>Rating: {psychologist.rating}</p>
                            </div>
                            <div className={s.divider}></div>
                            <p className={s.price}>
                                Price / 1 hour:{" "}
                                <span className={s.span}>{psychologist.price_per_hour}$</span>
                            </p>
                        </div>
                        <button
                            className={s.heartBtn}
                            onClick={() => toggleFavorite(psychologist.id)}
                        >
                            {isFavorite ? (
                                <img src={isFavoriteSvg} alt="is favorite" />
                            ) : (
                                <img src={heartSvg} alt="not a favorite" />
                            )}
                        </button>
                    </div>
                </div>
                <ul className={s.infoList}>
                    <li className={s.infoItem}>
                        <p className={s.infoTitle}>
                            Experience:{" "}
                            <span className={s.infoSpan}>{psychologist.experience}</span>
                        </p>
                    </li>
                    <li className={s.infoItem}>
                        <p className={s.infoTitle}>
                            License:{" "}
                            <span className={s.infoSpan}>{psychologist.license}</span>
                        </p>
                    </li>
                    <li className={s.infoItem}>
                        <p className={s.infoTitle}>
                            Specialization:{" "}
                            <span className={s.infoSpan}>{psychologist.specialization}</span>
                        </p>
                    </li>
                    <li className={s.infoItem}>
                        <p className={s.infoTitle}>
                            Initial_consultation:{" "}
                            <span className={s.infoSpan}>
                                {psychologist.initial_consultation}
                            </span>
                        </p>
                    </li>
                </ul>
                <p className={s.about}>{psychologist.about}</p>
                {readMore ? (
                    <ReadMore reviews={psychologist.reviews} />
                ) : (
                    <button className={s.loadMore} onClick={() => setReadMore(true)}>
                        Read more
                    </button>
                )}
            </div>
        </li>
    );
};
export default PsychologistsItem;
