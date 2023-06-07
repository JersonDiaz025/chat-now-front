import { TOKEN_USER } from "../constants";
import apiService from "../services/apiService";

// Remove token user
function removeTokenUser() {
  localStorage.removeItem(TOKEN_USER);
  apiService.clearAuthToken()
}

export {removeTokenUser };
