import styles from "../css/LoginPage.module.css";
import LoginForm from "../components/LoginForm";
const Login = () => {
    return (
        <div>
            <div className={styles.loginPage}>
                <div>
                    <img src="../images/SideImage.svg" alt="" />
                </div>
                <LoginForm />
            </div>
        </div>
    );
};
export default Login;
