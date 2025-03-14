import styles from "../css/LoginPage.module.css";
import LoginForm from "../components/LoginForm";
import React from "react";
const Login = () => {
  return (
    <div>
      <div className={styles.loginPage}>
        <div>
          <img src="./src/assets/images/SideImage.svg" alt="" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
