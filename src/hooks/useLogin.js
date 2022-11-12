import { useState } from "react";

import { useAuthContext } from "./useAuthContext";

export function useLogin() {
  const { dispatch } = useAuthContext();
  const [Error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const login = async (email, password) => {
    setisLoading(true);
    setError(null);
    const response = await fetch("/api/user/login", {
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
  return { login, isLoading, Error };
}
