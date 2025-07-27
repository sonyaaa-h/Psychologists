import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";
import s from "./PsychologistsList.module.css"

const PsychologistsList = ({ psychologists }) => {

    return (
        <ul className={s.listWrap}>
            {psychologists.map((psychologist, index) => (
                <PsychologistsItem psychologist={psychologist} key={index} />
            ))}
        </ul>
    );
};
export default PsychologistsList;
