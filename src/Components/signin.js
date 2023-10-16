import React from "react";
import { Grid } from "@material-ui/core";
import Fblogo from "../Assets/Fblogo.svg";
import Glogo from "../Assets/Glogo.svg";
import LoginImg from "../Assets/LoginImg.svg";

export default function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Page is in testing phase");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <h2 style={{ margin: "1.2rem 0 2.4rem " }}>Sign In</h2>
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
          <button className="Signup-btn" type="submit">
            Sign In
          </button>
          <button className="Signup-using">
            <span>
              <img
                style={{ marginRight: "1rem" }}
                src={Fblogo}
                alt=""
                width="10"
                height="10"
              />
            </span>
            Sign in with Facebook
          </button>
          <button className="Signup-using">
            <span>
              <img
                style={{ marginRight: "1rem" }}
                src={Glogo}
                alt=""
                width="10"
                height="10"
              />
            </span>
            Sign in with Google
          </button>
          <button
            style={{
              width: "31.7rem",
              height: "2.5rem",
              marginTop: "2.3rem",
              fontSize: "1.2rem",
              fontWeight: 500,
            }}
          >
            Forget Password?
          </button>
        </Grid>
        <Grid item xs={6}>
          <h5
            style={{ position: "absolute", right: "3.6rem", marginTop: "2rem" }}
          >
            Don’t have an account yet?
            <span style={{ color: "#2F6CE5" }}> Create new for free!</span>
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
        </Grid>
      </Grid>
    </form>
  );
}
