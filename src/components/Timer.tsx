import styles from "../css/Timer.module.css";
import { useEffect, useState } from "react";

type Countdown = { date: string };

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
const Timer: React.FC<Countdown> = ({ date }) => {
    const calcTimeleft = (): TimeLeft => {
        const difference = new Date(date).getTime() - new Date().getTime();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeleft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calcTimeleft());
        }, 1000);

        return () => clearInterval(timer);
    }, [date]);

    const formatNumber = (num: number) => String(num).padStart(2, "0");
    return (
        <>
            <div className={styles.top_frame_728}>
                <div className={styles.todays_flash_sales}>
                    <div className={styles.top_row}>
                        <p className={styles.red}></p>
                        <h3>Today's</h3>
                    </div>
                    <div className={styles.flash_sales}>
                        <h2>Flash Sales</h2>
                    </div>
                </div>

                <div className={styles.countdown}>
                    <div>
                        <h4>Days</h4>
                        <h1>{formatNumber(timeLeft.days)}</h1>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div>
                        <h4>Hours</h4>
                        <h1>{formatNumber(timeLeft.hours)}</h1>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div>
                        <h4>Minutes</h4>
                        <h1>{formatNumber(timeLeft.minutes)}</h1>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div>
                        <h4>Seconds</h4>
                        <h1>{formatNumber(timeLeft.seconds)}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Timer;
