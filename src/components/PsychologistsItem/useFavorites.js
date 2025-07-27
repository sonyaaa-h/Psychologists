import { useEffect, useState } from "react";
import { ref, set, remove, onValue } from "firebase/database";
import { auth, db } from "../../firebase";
import toast from "react-hot-toast";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });
        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        if (!user) {
            setFavorites([]);
            return;
        }

        const favoritesRef = ref(db, `users/${user.uid}/favorites`);
        const unsubscribe = onValue(favoritesRef, (snapshot) => {
            const data = snapshot.val();
            setFavorites(data ? Object.keys(data) : []);
        });

        return () => unsubscribe();
    }, [user]);

    const toggleFavorite = (psychologistId) => {
        if (!user) return toast.error("You must be logged in");

        const favRef = ref(db, `users/${user.uid}/favorites/${psychologistId}`);
        if (favorites.includes(psychologistId)) {
            remove(favRef);
        } else {
            set(favRef, true);
        }
    };

    return { favorites, toggleFavorite };
};
