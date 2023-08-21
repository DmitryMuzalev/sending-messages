import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validation';
import { Button } from '../Button/Button';
import classes from './Form.module.scss';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate="on"
      className={classes.form}
    >
      <h2>Отправлялка сообщений</h2>
      <label>
        <span>От кого</span>
        <div>
          <Input
            type="text"
            register={register}
            name="from.name"
            placeholder="Имя"
            error={errors?.from?.name}
          />
          <Input
            type="email"
            register={register}
            name="from.email"
            placeholder="Email"
            error={errors?.from?.email}
          />
        </div>
      </label>
      <label>
        <span>Кому</span>
        <div>
          <Input
            type="text"
            register={register}
            name="to.name"
            placeholder="Имя"
            error={errors?.to?.name}
          />
          <Input
            type="email"
            register={register}
            name="mca.0"
            placeholder="Email"
            error={errors?.mca?.[0]}
          />
        </div>
      </label>
      <label>
        <span>Тема письма</span>
        <Input
          type="text"
          register={register}
          name="subject"
          placeholder="Тема письма"
          error={errors?.subject}
        />
      </label>
      <Button type="submit" label="Отправить" disabled={!isValid} />
    </form>
  );
}
export { Form };
