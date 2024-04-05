import Swal from "sweetalert2";
import { supabase, ObtenerIdAuthSupabase } from "../index";

// Función de Registro
export const registerUser = async (email, password) => {
  try {
    // Primero registramos el usuario con Supabase Auth
    const { user, signUpError } = await supabase.auth.signUp({ email, password });

    if (signUpError) throw signUpError;

    // Luego insertamos la información adicional en tbl_Users
    const { data, insertError } = await supabase
      .from("tbl_Users")
      .insert([{ idAuth_supabase: user.id, email: user.email /* otros campos */ }])
      .select();

    if (insertError) throw insertError;

    return data;
  } catch (error) {
    console.error("Error en registerUser:", error.message);
    // Podrías manejar el error de forma más específica o devolverlo
  }
};

// Función de Inicio de Sesión
export const loginUser = async (email, password) => {
  try {
    const { user, signInError } = await supabase.auth.signIn({ email, password });

    if (signInError) throw signInError;

    const { data, selectError } = await supabase
      .from("tbl_Users")
      .select()
      .eq("idAuth_supabase", user.id)
      .maybeSingle();

    if (selectError) throw selectError;

    return data;
  } catch (error) {
    console.error("Error en loginUser:", error.message);
  }
};


// Función de Recuperación de Contraseña
export const recoverPassword = async (email) => {
  try {
    // Enviamos el correo de recuperación de contraseña
    const { error: resetError } = await supabase.auth.api.resetPasswordForEmail(email);

    if (resetError) throw resetError;

    // Aquí podrías añadir lógica adicional, como registrar este evento en tu base de datos

    return "Correo de recuperación enviado.";
  } catch (error) {
    console.error("Error en recoverPassword:", error.message);
  }
};


export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("tbl_Users").insert(p).select();
    return data;
  } catch (error) {
    error;
  }
};
export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { data } = await supabase
      .from("tbl_Users")
      .select()
      .eq("idAuth_supabase", idAuthSupabase)
      .maybeSingle();
    // if (error) {
    //   alert("MostrarUsuarios", error);
    // }
    if (data) {
      return data;
    }
  } catch (error) {
    // alert(error.error_description || error.message + "MostrarUsuarios");
  }
};
export async function EditarTemaMonedaUser(p) {
  try {
    const { error } = await supabase
      .from("tbl_Users")
      .update(p)
      .eq("intId", p.id);
    if (error) {
      alert("Error al editar el usuario", error);
    }
    Swal.fire({
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    alert(error.error_description || error.message + "EditarTemaMonedaUser");
  }
}
