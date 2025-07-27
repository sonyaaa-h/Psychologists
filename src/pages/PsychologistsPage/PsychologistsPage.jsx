import { useEffect, useMemo, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue, off } from "firebase/database";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import Filter from "../../components/Filter/Filter";
import s from "./PsychologistsPage.module.css";

const PsychologistsPage = () => {
    const [psychologists, setPsychologists] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const [sortOption, setSortOption] = useState("asc-all");

    useEffect(() => {
        const psychologistsRef = ref(db, "/psychologists");

        const callback = (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataArray = Object.entries(data).map(([id, item]) => ({
                    id,
                    ...item,
                }));

                setPsychologists(dataArray);
            } else {
                setPsychologists([]);
            }
        };

        onValue(psychologistsRef, callback);
        return () => off(psychologistsRef, "value", callback);
    }, []);

    const sortedPsychologists = useMemo(() => {
        const sorted = [...psychologists];
        switch (sortOption) {
            case "asc-name":
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case "desc-name":
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case "asc-price":
                return sorted.sort((a, b) => a.price_per_hour - b.price_per_hour);
            case "desc-price":
                return sorted.sort((a, b) => b.price_per_hour - a.price_per_hour);
            case "asc-rating":
                return sorted.sort((a, b) => a.rating - b.rating);
            case "desc-rating":
                return sorted.sort((a, b) => b.rating - a.rating);
            case "asc-all":
                return sorted;
            default:
                return sorted;
        }
    }, [psychologists, sortOption]);

    const visiblePsychologists = useMemo(() => {
        return sortedPsychologists.slice(0, visibleCount);
    }, [sortedPsychologists, visibleCount]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className={s.pageWrap}>
            <div className={s.topBar}>
                <Filter selectedOption={sortOption} onChange={setSortOption} />
            </div>

            <div className={s.galleryWrap}>
                <PsychologistsList psychologists={visiblePsychologists} />
                {visibleCount < sortedPsychologists.length && (
                    <button onClick={handleLoadMore} className={s.loadMoreBtn}>
                        Load more
                    </button>
                )}
            </div>
        </div>
    );
};

export default PsychologistsPage;
