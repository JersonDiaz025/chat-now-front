import axios from "axios";

const apiHandler = axios.create({
  baseURL: `${import.meta.env.VITE_API_CHATS_NOW}`,
});

export default apiHandler;
