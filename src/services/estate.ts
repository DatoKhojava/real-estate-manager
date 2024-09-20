import { api } from "./api";

const base = "real-estates";

export const estateService = {
  getAll: async () => {
    const res = await api.get(base);
    return res.data;
  },
};
