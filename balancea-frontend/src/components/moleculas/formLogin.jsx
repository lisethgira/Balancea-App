import { Form, Input, Button, ErrorMessage } from "../../styles/forms";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors.username && (
          <ErrorMessage> Este campo es obligatorio </ErrorMessage>
        )}

        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Contraseña"
        />
        {errors.password && (
          <ErrorMessage> Este campo es obligatorio </ErrorMessage>
        )}

        <Button type="submit">
          {" "}
          <Link to="/homeuser" className="backLink">
            Iniciar Sesión
          </Link>{" "}
          Iniciar Sesión
        </Button>
      </Form>
    </>
  );
}
