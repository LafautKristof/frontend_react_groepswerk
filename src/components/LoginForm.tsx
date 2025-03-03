import { Link } from "react-router-dom";
import styles from "../css/LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const [emailPhoneValue, setEmailPhoneValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email_phone") {
            setEmailPhoneValue(value);
        } else if (name === "password") {
            setPasswordValue(value);
        }
        console.log(emailPhoneValue, passwordValue);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(emailPhoneValue, passwordValue);
        const response = await fetch(
            "https://backend-node-groepswerk.onrender.com/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email_phone: emailPhoneValue,
                    password: passwordValue,
                }),
            }
        );
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            localStorage.setItem("token", data.token);
            setEmailPhoneValue("");
            setPasswordValue("");
            navigate("/");
        } else {
            console.log("error");
            setErrorMessage("Something went wrong. Please try again.");
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
                    onChange={handleChange}
                    type="text"
                    placeholder="Email of Phone Number"
                />
                <input
                    name="password"
                    onChange={handleChange}
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
