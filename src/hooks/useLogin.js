import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/features/userReducer";
import { useState } from "react";
import apiService from "../services/apiService";
import auth from "../constants/auth";
import { setLocalStorage } from "../utils/index";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Login user this app
  async function login(endpoint, data) {
    console.log('no envia')
    setLoading(true);
    setMsgError(null);
    try {
      const response = await apiService.post(endpoint, data);
      const { token, user } = response;
      setMessage(response.message);
      if (response?.user && setLocalStorage(response.token)) {
        dispatch(signInUser({ token, user }));
        navigate(`/${auth.HOME}`);
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
