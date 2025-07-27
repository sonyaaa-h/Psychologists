import { useEffect, useState, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../../firebase";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import s from "./FavoritesPage.module.css";

const FavoritePage = () => {
    const [psychologists, setPsychologists] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;

        const favRef = ref(db, `users/${user.uid}/favorites`);
        const unsubscribeFav = onValue(favRef, (snapshot) => {
            const data = snapshot.val();
            setFavorites(data ? Object.keys(data) : []);
        });

        const psyRef = ref(db, "psychologists");
        const unsubscribePsy = onValue(psyRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data).map(([id, psy]) => ({
                    id,
                    ...psy,
                }));
                setPsychologists(list);
            } else {
                setPsychologists([]);
            }
        });

        return () => {
            unsubscribeFav();
            unsubscribePsy();
        };
    }, []);

    const favoritePsychologists = useMemo(() => {
        return psychologists.filter((psy) => favorites.includes(String(psy.id)));
    }, [psychologists, favorites]);

    return (
        <div className={s.pageWrap}>
            {favoritePsychologists.length > 0 ? (
                <PsychologistsList psychologists={favoritePsychologists} />
            ) : (
                <p className={s.emptyText}>Список порожній</p>
            )}
        </div>
    );
};

export default FavoritePage;
