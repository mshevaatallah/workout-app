import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { login, Error, isLoading } = useLogin();
  async function handleSumbit(e) {
    e.preventDefault();
    await login(Email, Password);
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
      <button disabled={isLoading}>Login</button>
      {Error && <div className="error">{Error}</div>}
    </form>
  );
}

export default Login;
