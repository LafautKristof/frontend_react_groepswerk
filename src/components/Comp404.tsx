import styles from "../css/Comp404.module.css";
const Comp404 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.text}>
                Your visited page not found. You may go home page
            </p>
            <button
                className={styles.button}
                onClick={() => (window.location.href = "/")}
            >
                Back to home page
            </button>
        </div>
    );
};
export default Comp404;
