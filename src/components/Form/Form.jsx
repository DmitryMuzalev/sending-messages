import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  from: Yup.object({
    name: Yup.string().required('Поле "Имя" не может быть пустым'),
    email: Yup.string()
      .required('Поле "Email" не может быть пустым')
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Проверьте правильность ввода e-mail адреса'
      ),
  }),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (letter) => {
    console.log(letter);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span> От кого</span>
        <div>
          <Input
            type="text"
            register={register}
            name={'from.name'}
            placeholder="Имя"
            error={errors?.from?.name}
          />
          <Input
            type="email"
            register={register}
            name={'from.email'}
            placeholder="Email"
            error={errors?.from?.email}
          />
        </div>
      </label>
      <input type="submit" value="Отправить" disabled={!isValid} />
    </form>
  );
}
export { Form };
