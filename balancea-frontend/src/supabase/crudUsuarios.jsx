import Swal from "sweetalert2";
import { supabase, ObtenerIdAuthSupabase } from "../index";
export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("tbl_Users").insert(p).select();
    return data;
  } catch (error) {
    error
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
    const { error } = await supabase.from("tbl_Users").update(p).eq("intId", p.id);
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
