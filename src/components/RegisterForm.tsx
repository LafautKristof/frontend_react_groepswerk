import styles from "../css/RegisterForm.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Registerform = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailPhoneValue, setEmailPhoneValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "name") {
            setNameValue(value);
        } else if (name === "email_phone") {
            setEmailPhoneValue(value);
        } else if (name === "password") {
            setPasswordValue(value);
        }
        console.log(nameValue, emailPhoneValue, passwordValue);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(nameValue, emailPhoneValue, passwordValue);
        const response = await fetch(
            "https://backend-node-groepswerk.onrender.com/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nameValue,
                    email_phone: emailPhoneValue,
                    password: passwordValue,
                }),
            }
        );
        if (response.ok) {
            setNameValue("");
            setEmailPhoneValue("");
            setPasswordValue("");
            navigate("/login");
        } else {
            console.log("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };
    return (
        <div className={styles.registerForm}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    name="email_phone"
                    onChange={handleChange}
                    type="text"
                    placeholder="Email or Phone Number"
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
                    <button>
                        <Link to="/...">
                            <FcGoogle />
                            <span>Sign up with Google</span>
                        </Link>
                    </button>
                </div>
            </form>
            <p>Already have account? Log in</p>
        </div>
    );
};
export default Registerform;
