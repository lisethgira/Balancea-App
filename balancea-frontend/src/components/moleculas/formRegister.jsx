import { Form, Input, Button, ErrorMessage } from '../../styles/forms'
import { useForm } from "react-hook-form";
export default function FormRegister() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (<>
<Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("username", { required: true })} placeholder="Nombre de usuario" />
      {errors.username && <ErrorMessage> Este campo es obligatorio </ErrorMessage> }

      <Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Correo electrónico" />
      {errors.email && <ErrorMessage> Correo electrónico inválido </ErrorMessage> }

      <Input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Contraseña" />
      {errors.password && <ErrorMessage> La contraseña debe tener al menos 6 caracteres </ErrorMessage> }

      <Input {...register("password_confirm", {
        validate: value => value === watch('password') || "Las contraseñas no coinciden"
      })} type="password" placeholder="Confirmar Contraseña" />
      {errors.password_confirm && <ErrorMessage> {errors.password_confirm.message} </ErrorMessage> }

      <Button type="submit">Registrarse</Button>
    </Form>
  </>);
}