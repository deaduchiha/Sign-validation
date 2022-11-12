import React, { useState, useEffect } from "react";
import FormField from "./FormField";

// function
import { validate } from "../validate";
import { notify } from "../toast";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted")
      setData({ ...data, [event.target.name]: event.target.checked });
    else setData({ ...data, [event.target.name]: event.target.value });
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
        <h2 className={styles.header}>SignUp</h2>
        <FormField
          type="text"
          label="Username"
          name="username"
          value={data.username}
          change={changeHandler}
          focus={focusHandler}
          errorss={
            errors.username &&
            touched.username && <span>{errors.username}</span>
          }
        />
        <FormField
          type="text"
          label="Email"
          name="email"
          value={data.email}
          change={changeHandler}
          focus={focusHandler}
          errorss={errors.email && touched.email && <span>{errors.email}</span>}
        />
        <FormField
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
        <FormField
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={data.confirmPassword}
          change={changeHandler}
          focus={focusHandler}
          errorss={
            errors.confirmPassword &&
            touched.confirmPassword && <span>{errors.confirmPassword}</span>
          }
        />
        <FormField
          type="checkbox"
          label="I accept terms of privacy and policy"
          name="isAccepted"
          value={data.isAccepted}
          change={changeHandler}
          focus={focusHandler}
          errorss={
            errors.isAccepted &&
            touched.isAccepted && <span>{errors.isAccepted}</span>
          }
        />

        <div>
          <a href="#">Login</a>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
