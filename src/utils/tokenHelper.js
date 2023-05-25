import { TOKEN_USER } from "../constants";
import apiService from "../services/apiService";

// Save token user in localStorage
function setLocalStorage(token) {
  if (!token) return;
  window.localStorage.setItem(TOKEN_USER, token);
  return true;
}

// Get token from localStorage
function getUserToken() {
  const tokenUser = window.localStorage.getItem(TOKEN_USER);
  if (!tokenUser) return false;
  apiService.setAuthToken(tokenUser);
  return true;
}

// Remove token user
function removeTokenUser() {
  window.localStorage.removeItem(TOKEN_USER);
  apiService.clearAuthToken();
}

export { setLocalStorage, getUserToken, removeTokenUser };
