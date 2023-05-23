//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiService from "../services/apiService";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  //const navigate = useNavigate();

  // Login user this app
  async function login(endpoint, data) {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.post(endpoint, data);
      setMessage(response);
    } catch (error) {
      setError(error.message);
    }
  }

  return {
    loading,
    message,
    error,
    login,
  };
}

export default useLogin;
