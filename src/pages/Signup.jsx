import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { signup, Error, isLoading } = useSignup();
  async function handleSumbit(e) {
    e.preventDefault();
    await signup(Email, Password);
  }
  return (
    <form className="signup" onSubmit={handleSumbit}>
      <h3>Sign up</h3>
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
      <button disabled={isLoading}>Sign Up</button>
      {Error && <div className="error">{Error}</div>}
    </form>
  );
}

export default Signup;
