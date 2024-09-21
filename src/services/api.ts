import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: {
    Authorization: "Bearer 9d0e3b2f-6e5e-4b31-a102-21b1298aaa2f",
  },
});
