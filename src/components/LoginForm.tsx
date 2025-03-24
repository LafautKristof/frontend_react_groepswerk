import styles from "../css/LoginForm.module.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useLoginUserMutation } from "./store/authApi";
const LoginForm = () => {
    const [emailPhone, setEmailPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loginUser] = useLoginUserMutation();

    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log("Inloggen:", emailPhone, password);
            const result = await loginUser({
                email_phone: emailPhone,
                password,
            }).unwrap();
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", result.token);

            setUser(result.user);
            navigate("/");
        } catch (err) {
            setErrorMessage("Login mislukt");
            console.error("Login mislukt:", err);
        }
    };

    return (
        <div className={styles.loginForm}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <h1>Log in Into Exclusive</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit}>
                <input
                    name="email_phone"
                    onChange={(e) => setEmailPhone(e.target.value)}
                    type="text"
                    placeholder="Email of Phone Number"
                />
                <input
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Password"
                />
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
