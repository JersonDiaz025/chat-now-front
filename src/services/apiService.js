import apiHandler from "../utils/axios";

const apiService = {
  async setAuthToken(token) {
    apiHandler.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  async clearAuthToken() {
    delete apiHandler.defaults.headers.common["Authorization"];
  },

  async get(endpoint) {
    try {
      const response = await apiHandler.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async post(endpoint, data) {
    try {
      const response = await apiHandler.post(endpoint, data);
      return response.data;
    } catch (error) {
      return error.data;
    }
  },

  async put(endpoint, data) {
    try {
      const response = await apiHandler.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  async delete(endpoint) {
    try {
      const response = await apiHandler.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
};

export default apiService;
