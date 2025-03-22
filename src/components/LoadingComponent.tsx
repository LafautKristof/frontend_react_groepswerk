import styles from "../css/LoadingComponent.module.css";
const LoadingComponent = () => {
    return (
        <div className={styles.container}>
            <img src="./src/assets/images/loading.gif" alt="" />
        </div>
    );
};
export default LoadingComponent;
