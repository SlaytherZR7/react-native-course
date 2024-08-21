import { useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: 'slayther.zr@gmail.com',
      password: '123456',
    },
  });

  const onsubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  console.log(watch('email'));

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h3>Formulario</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          <input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <button type='submit'>Ingresar</button>
        </div>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
