import { api } from "./api";
import { Agent } from "./types";

const base = "agents";

export const AgentsService = {
  getAll: async () => {
    const res = await api.get<Agent[]>(`${base}`);
    return res.data;
  },
};
