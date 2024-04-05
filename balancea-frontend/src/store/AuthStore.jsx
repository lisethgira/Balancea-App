import { create } from "zustand";
import { supabase } from "../index";
export const useAuthStore = create((set) => ({
  isAuth: false,
  datauserGoogle: [],
  userData: null,
  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      set({ isAuth: true });
      return data;
    } catch (error) {
      error;
    }
  },
  signout: async () => {
    const { error } = await supabase.auth.signOut();
    set({ isAuth: false });
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  },

  registerUser: async (email, password) => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      set({ userData: user });
      await insertarUsuarios(user.user_metadata, user.id); // Llama a insertarUsuarios
    } catch (error) {
      console.error("Error en registerUser:", error.message);
    }
  },

  loginUser: async (email, password) => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;

      set({ userData: user });
      await insertarUsuarios(user.user_metadata, user.id); // Llama a insertarUsuarios
    } catch (error) {
      console.error("Error en loginUser:", error.message);
    }
  },

  recoverPassword: async (email) => {
    try {
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) throw error;

      // Aquí, solo gestionamos la solicitud de recuperación. No modificamos el estado del usuario.
    } catch (error) {
      console.error("Error en recoverPassword:", error.message);
    }
  },
}));
