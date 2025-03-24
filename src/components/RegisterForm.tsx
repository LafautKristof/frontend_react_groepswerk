import styles from "../css/RegisterForm.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Registerform = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailPhoneValue, setEmailPhoneValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        hoofdletters: false,
        kleineletters: false,
        nummers: false,
        speciaalteken: false,
    });
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password: string) => {
        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[@$!%*?&]/.test(password);

        setErrorMessage({
            hoofdletters: !upperCase,
            kleineletters: !lowerCase,
            nummers: !number,
            speciaalteken: !specialChar,
        });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "name") {
            setNameValue(value);
        } else if (name === "email_phone") {
            setEmailPhoneValue(value);
        } else if (name === "password") {
            setPasswordValue(value);
            validatePassword(value);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const hasPasswordErrors = Object.values(errorMessage).some(
            (err) => err
        );
        if (hasPasswordErrors) {
            setSubmitError(
                "Please make sure your password meets all criteria."
            );
            return;
        }

        try {
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
                setSubmitError("Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className={styles.registerForm}>
            {submitError && <p style={{ color: "red" }}>{submitError}</p>}
            {errorMessage && (
                <div className={styles.passwordCriteria}>
                    <div>
                        {errorMessage.hoofdletters ? (
                            <span style={{ color: "red" }}>❌</span>
                        ) : (
                            <span style={{ color: "green" }}>✔️</span>
                        )}
                        <span>Minstens één hoofdletter</span>
                    </div>
                    <div>
                        {errorMessage.kleineletters ? (
                            <span style={{ color: "red" }}>❌</span>
                        ) : (
                            <span style={{ color: "green" }}>✔️</span>
                        )}
                        <span>Minstens één kleine letter</span>
                    </div>
                    <div>
                        {errorMessage.nummers ? (
                            <span style={{ color: "red" }}>❌</span>
                        ) : (
                            <span style={{ color: "green" }}>✔️</span>
                        )}
                        <span>Minstens één nummer</span>
                    </div>
                    <div>
                        {errorMessage.speciaalteken ? (
                            <span style={{ color: "red" }}>❌</span>
                        ) : (
                            <span style={{ color: "green" }}>✔️</span>
                        )}
                        <span>Minstens één speciaal teken (@$!%*?&)</span>
                    </div>
                </div>
            )}
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
                    type="password"
                    placeholder="Password"
                />
                <div>
                    {" "}
                    <button type="submit">Register</button>
                    <button>
                        <Link to="/login">
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
