import { Form, Input, Button, ErrorMessage } from "../../../index";

import axios from "axios";
import Swal from "sweetalert2"
import { useForm } from "react-hook-form";
import { UserAuth } from "../../../index";
import { useRef } from "react";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handlerChangeData } = UserAuth()
  const refHandlerChangeData = useRef(handlerChangeData)

  const onSubmit = async (data) => {
    await axios.post(
      `${import.meta.env.VITE_PROT_BACKEND}://${import.meta.env.VITE_HOST_BACKEND}${import.meta.env.VITE_PORT_BACKEND}${import.meta.env.VITE_APP_BALANCEA_API_LOGIN}`,
      data
    )
    .then((res)=>{
      Swal.fire({
        icon: "success",
        title: "El usuario " + res.data.data.strUserNames + " se logueo correctamente",
        text: res.data.msg,
      });
      refHandlerChangeData.current(res.data.data)
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
          {...register("strEmail", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.strEmail && (
          <ErrorMessage> Este campo es obligatorio </ErrorMessage>
        )}

        <Input
          {...register("strPass", { required: true })}
          type="password"
          placeholder="Contraseña"
        />
        {errors.strPass && (
          <ErrorMessage> Este campo es obligatorio </ErrorMessage>
        )}

        <Button type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </>
  );
}
