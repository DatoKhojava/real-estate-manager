import { api } from "./api";

const base = "cities";

export const CitiesService = {
  getAll: async () => {
    const res = await api.get(base);
    return res.data;
  },
};
