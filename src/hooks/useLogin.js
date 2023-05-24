import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiService from "../services/apiService";
import auth from "../constants/auth";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState(null);

  const navigate = useNavigate();

  // Login user this app
  async function login(endpoint, data) {
    setLoading(true);
    setMsgError(null);
    try {
      const response = await apiService.post(endpoint, data);
      setMessage(response.message);
      if (response?.user) {
        await apiService.setAuthToken(response.user?.token);
        navigate(`/${auth.REGISTER}`)
        
      }
    } catch (error) {
      //console.log(error?.message)
      setMsgError(error?.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    message,
    msgError,
    login,
  };
}

export default useLogin;
