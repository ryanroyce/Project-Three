import React from "react";

function LoginForm() {
    return (
        <div>
            <h1>Welcome to FilmDEX</h1>
            <button>Login</button>
            <button>Create Account</button>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button>Create</button>
        </div>
    );
}

export default LoginForm;