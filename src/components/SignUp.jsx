import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted")
      setData({ ...data, [event.target.name]: event.target.checked });
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  return (
    <>
      <form action="">
        <h2>SignUp</h2>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>I accept terms of privacy and policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
          />
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
