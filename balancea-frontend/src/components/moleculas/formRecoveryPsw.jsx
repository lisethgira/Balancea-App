import { Form, Input, Button, ErrorMessage } from '../../styles/forms'
import { useForm } from "react-hook-form";

export default function FormRecoveryPsw() {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (<>
<Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Correo electrónico" />
      {errors.email && <ErrorMessage> Correo electrónico inválido </ErrorMessage>}

      <Button type="submit">Recuperar Contraseña</Button>
    </Form>
  </>);
}