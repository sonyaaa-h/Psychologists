import { Link } from "react-router-dom";
import s from "./Hero.module.css";
import usersImg from "../../assets/images/users.png";
import questionImg from "../../assets/images/question.png";
import checkIcon from "../../assets/icons/check.svg";
import getStarted from "../../assets/icons/get-started.svg";

const Hero = () => {
    return (
        <div className={s.heroWrap}>
            <div className={s.titleWrap}>
                <h1 className={s.title}>
                    The road to the <span className={s.titleSpan}>depths</span> of the
                    human soul
                </h1>
                <p className={s.heroText}>
                    We help you to reveal your potential, overcome challenges and find a
                    guide in your own life with the help of our experienced psychologists.
                </p>
                <Link to="/psychologists" className={s.startLink}>
                    Get started{" "}
                    <img src={getStarted} alt="get started" className={s.startsvg} />
                </Link>
            </div>
            <div className={s.heroImg}>
                <img src={usersImg} alt="users" className={s.usersImg} />
                <img src={questionImg} alt="question" className={s.questionImg} />
                <div className={s.infoWrap}>
                    <div className={s.checkWrap}>
                        <img src={checkIcon} alt="check" className={s.checkImg}/>
                    </div>
                    <div>
                        <p className={s.infoText}>Experienced psychologists</p>
                        <p className={s.infoCount}>15,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
