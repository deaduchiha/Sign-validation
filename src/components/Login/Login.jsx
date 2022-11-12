import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormField from "../SignUp/FormField";

// function
import { validate } from "../validate";
import { notify } from "../toast";
import useTitle from "../../hooks/useTitle";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "../../styles/Sign.module.css";

const Login = () => {
  useTitle("Login");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    notify();
    event.preventDefault();
    if (!Object.keys(errors).length)
      notify("You signed in succusfully", "success");
    else notify("Invalid data", "error");
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.formField}>
          <FormField
            style={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            label="Email"
            name="email"
            value={data.email}
            change={changeHandler}
            focus={focusHandler}
            errorss={
              errors.email && touched.email && <span>{errors.email}</span>
            }
          />
        </div>
        <div className={styles.formField}>
          <FormField
            style={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            label="Password"
            name="password"
            value={data.password}
            change={changeHandler}
            focus={focusHandler}
            errorss={
              errors.password &&
              touched.password && <span>{errors.password}</span>
            }
          />
        </div>

        <div className={styles.formButtons}>
          <Link to="/signUp">SignUp</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
