import React from "react";
import { Grid } from "@material-ui/core";
import Fblogo from "../Assets/Fblogo.svg";
import Glogo from "../Assets/Glogo.svg";
import LoginImg from "../Assets/LoginImg.svg";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Page is in testing phase");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <h2 style={{ margin: "1.2rem 0 2.4rem " }}>Create Account</h2>
          <input
            className="Signup-Input"
            style={{ width: "16rem" }}
            type="text"
            id="Fname"
            placeholder="First Name"
          />
          <input
            className="Signup-Input"
            style={{ width: "16rem" }}
            type="text"
            id="Lname"
            placeholder="Last Name"
          />
          <input
            className="Signup-Input"
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="Signup-Input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="Signup-Input"
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          <button className="Signup-btn" type="submit">
            Create Account
          </button>
          <button className="Signup-using">
            <img style={{ marginRight: "1rem" }} src={Fblogo} alt="" />
            Sign up with Facebook
          </button>
          <button className="Signup-using">
            <img style={{ marginRight: "1rem" }} src={Glogo} alt="" />
            Sign up with Google
          </button>
        </Grid>
        <Grid item xs={6}>
          <h5
            style={{ position: "absolute", right: "3.6rem", marginTop: "2rem" }}
          >
            Already have an account?
            <span style={{ color: "#4D81E9" }}> Sign In</span>
          </h5>
          <img
            src={LoginImg}
            alt=""
            style={{
              position: "absolute",
              right: "3.6rem",
              top: "12rem",
              height: "26.084rem",
              widht: "25.816rem",
            }}
          />
          <p
            style={{
              fontSize: "1.1rem",
              opacity: "0.6",
              position: "absolute",
              right: "3.6rem",
              bottom: "3.6rem",
            }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </Grid>
      </Grid>
    </form>
  );
}
