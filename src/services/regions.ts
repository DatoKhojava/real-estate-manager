import { api } from "./api";
import { Region } from "./types";

const base = "regions";

export const RegionsService = {
  getAll: async () => {
    const res = await api.get<Region[]>(`${base}`);
    return res.data;
  },
};
