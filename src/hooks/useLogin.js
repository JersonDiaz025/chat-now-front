import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { signInUser } from "../redux/features/userReducer";
import { useState } from "react";
import apiService from "../services/apiService";
import { ROUTES } from "../constants";
import useUser from "./useUser";
//import { setLocalStorage } from "../utils/index";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState(null);
  const { setUser } = useUser();
  //const dispatch = useDispatch();

  const navigate = useNavigate();

  // Login user this app
  async function login(endpoint, data) {
    setLoading(true);
    setMsgError(null);
    try {
      const response = await apiService.post(endpoint, data);
      const { user } = response;
      setMessage(response.message);
      if (user.token) {
        setUser(user);
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      //console.log(error?.message)
      setMsgError(error?.message);
    }
    setLoading(false);
  }

  return {
    loading,
    message,
    msgError,
    login,
  };
}

export default useLogin;
