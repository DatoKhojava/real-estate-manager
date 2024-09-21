import { api } from "./api";
import { Agent } from "./types";

const base = "agents";

export const AgentsService = {
  getAll: async () => {
    const res = await api.get<Agent[]>(`${base}`);
    return res.data;
  },

  postAgent: async (data: Agent) => {
    const res = await api.post<Agent>(`${base}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
};
