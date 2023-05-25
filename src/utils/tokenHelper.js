import { TOKEN_USER } from "../constants";
import apiService from "../services/apiService";

// Save token user in localStorage
function setLocalStorage(user) {
  if (!user) return;
  window.localStorage.setItem(TOKEN_USER, JSON.stringify(user));
  return true;
}

// Get token from localStorage
function getUserToken() {
  const tokenUser = window.localStorage.getItem(TOKEN_USER);
  if (!tokenUser) return;
  //const loggedUser = JSON.parse(tokenUser)
  apiService.setAuthToken(tokenUser.token);
  return true;
}

// Remove token user
function removeTokenUser() {
  window.localStorage.removeItem(TOKEN_USER);
  apiService.clearAuthToken();
}

export { setLocalStorage, getUserToken, removeTokenUser };
