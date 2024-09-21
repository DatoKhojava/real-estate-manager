import { api } from "./api";
import { Estate } from "./types";

const base = "real-estates";

export const estateService = {
  getAll: async () => {
    const res = await api.get(base);
    return res.data;
  },

  getById: async (id: number) => {
    const res = await api.get<Estate>(`${base}/${id}`);
    return res.data;
  },

  deleteById: async (id: number) => {
    const res = await api.delete<Estate>(`${base}/${id}`)
    return res.data
  }
};
