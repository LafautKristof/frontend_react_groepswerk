import { Link } from "react-router-dom";
import styles from "../css/LoginForm.module.css";
const LoginForm = () => {
    return (
        <div className={styles.loginForm}>
            <h1>Log in Into Exclusive</h1>
            <p>Enter your details below</p>
            <form>
                <input type="text" placeholder="Email of Phone Number" />
                <input type="password" placeholder="Password" />
                <div>
                    {" "}
                    <button type="submit">Log in</button>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
