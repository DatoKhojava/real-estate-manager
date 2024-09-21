import { api } from "./api";
import { City } from "./types";

const base = "cities";

export const CitiesService = {
  getAll: async () => {
    const res = await api.get<City[]>(base);
    return res.data;
  },
};
