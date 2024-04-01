import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
  isAuth: false,
  singInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("Ha ocurrido un error durante la autenticación.");
      set({ isAuth: true });
      return data;
    } catch (error) {
      console.error("Error en signInWithGoogle: ", error.message);
      throw error;
    }
  },
  signout: async () => {
    const { error } = await supabase.auth.signOut();
    set({ isAuth: false });
    if (error)
      throw new Error("Ha ocurrido un error durante el cierre de sesión.");
  },
}));
