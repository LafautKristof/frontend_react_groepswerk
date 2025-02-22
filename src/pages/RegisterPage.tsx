import styles from "../css/RegisterPage.module.css";
import RegisterForm from "../components/RegisterForm";
const Login = () => {
    return (
        <div>
            <div className={styles.registerPage}>
                <div>
                    <img src="./src/assets/images/SideImage.svg" alt="" />
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};
export default Login;
