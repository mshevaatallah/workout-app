import React, { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  async function handleSumbit(e) {
    e.preventDefault();
    console.log(Email, Password);
  }
  return (
    <form className="login" onSubmit={handleSumbit}>
      <h3>Login</h3>
      <label>Email :</label>
      <input
        type="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password :</label>
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
