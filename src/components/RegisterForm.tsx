import styles from "../css/RegisterForm.module.css";
import { Link } from "react-router-dom";
const Registerform = () => {
    return (
        <div className={styles.registerForm}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <div>
                    {" "}
                    <button type="submit">Log in</button>
                    <button>
                        <Link to="/...">google</Link>
                    </button>
                </div>
            </form>
            <p>Already have account? Log in</p>
        </div>
    );
};
export default Registerform;
