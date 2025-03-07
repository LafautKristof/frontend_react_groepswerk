import styles from "../css/BlackButtons.module.css";

type BlackButtonsProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
};
const BlackButtons: React.FC<BlackButtonsProps> = ({ icon, title, text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.grey}>
                <div className={styles.black}>
                    <div className={styles.icon}>{icon}</div>
                </div>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
export default BlackButtons;
