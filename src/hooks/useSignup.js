import { useState } from "react";
import { json } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";

function useSignup() {
  const { dispatch } = useAuthContext();
  const [Error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const signup = async (email, password) => {
    setisLoading(true);
    setError(null);
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setisLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setisLoading(false);
    }
  };
  return { signup, isLoading, Error };
}

export default useSignup;
