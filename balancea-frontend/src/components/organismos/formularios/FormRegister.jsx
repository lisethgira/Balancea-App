import { Form, Input, Button, ErrorMessage } from "../../../index";

import axios from "axios"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  
  const onSubmit = async (data) => {
    await axios.post(
      `${import.meta.env.VITE_PROT_BACKEND}://${import.meta.env.VITE_HOST_BACKEND}${import.meta.env.VITE_PORT_BACKEND}${import.meta.env.VITE_APP_BALANCEA_API_REGISTER}`,
      data
    )
    .then((res)=>{
      Swal.fire({
        icon: "success",
        title: "Se creo el usuario creado " + res.data.data.strUserNames,
        text: res.data.msg,
      });
    }).catch((error)=>{
      if (!axios.isCancel(error)) {
        let msg;

        if (error.response) {
            msg = error.response.data.msg;
        } else if (error.request) {
            msg = error.message;
        } else {
            msg = error.message;
        }

        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
    }
    })
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("strUser", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.strUser && (
          <ErrorMessage> Este campo es obligatorio </ErrorMessage>
        )}

        <Input
          {...register("strEmail", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Correo electrónico"
        />
        {errors.strEmail && (
          <ErrorMessage> Correo electrónico inválido </ErrorMessage>
        )}

        <Input
          {...register("strPass", { required: true, minLength: 6 })}
          type="password"
          placeholder="Contraseña"
        />
        {errors.strPass && (
          <ErrorMessage>
            {" "}
            La contraseña debe tener al menos 6 caracteres{" "}
          </ErrorMessage>
        )}

        <Input
          {...register("password_confirm", {
            validate: (value) =>
              value === watch("strPass") || "Las contraseñas no coinciden",
          })}
          type="password"
          placeholder="Confirmar Contraseña"
        />
        {errors.password_confirm && (
          <ErrorMessage> {errors.password_confirm.message} </ErrorMessage>
        )}

        <Button type="submit">Registrarse</Button>
      </Form>
    </>
  );
};
