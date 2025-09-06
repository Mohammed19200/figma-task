import { create } from "zustand";

export const useAuth = create((set) => ({
  token: "",
  user: null,
  error: null,

  login: async (email, password) => {
    try {
      const res = await fetch(`https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, isEmployee: true }),
      });

      if (!res.ok) throw new Error("email or password is invalid");

      const data = await res.json();
      const token = data.token;

      set({ token, error: null });

      //
      const infoRes = await fetch(`https://api-yeshtery.dev.meetusvr.com/v1/user/info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!infoRes.ok) throw new Error("Failed to get info");

      const userInfo = await infoRes.json();
      set({ user: userInfo, error: null });

      return { success: true };
    } catch (err) {
      set({ error: err.message });
      return { success: false, message: err.message };
    }
  },

  logout: () => {
    set({ token: "", user: null, error: null });
  },
}));
