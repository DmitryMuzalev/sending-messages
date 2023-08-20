import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (letter) => {
    console.log(letter);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate="on">
      <h2>Отправлялка сообщений</h2>
      <div>
        <label>
          От кого <br />
          <input
            type="text"
            placeholder="Имя"
            {...register('from.name', { required: 'Имя не может быть пустым' })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register('from.email', {
              required: 'Email не может быть пустым',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Email адрес не',
              },
            })}
          />
        </label>
      </div>
      <div>
        <label>
          Кому <br />
          <input
            type="text"
            placeholder="Имя"
            {...register('to.name', { required: 'Имя не может быть пустым' })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register('mca.0', {
              required: 'Email не может быть пустым',
            })}
          />
        </label>
      </div>
      <div>
        <label>
          Тема письма <br />
          <input
            type="text"
            placeholder="Тема письма"
            {...register('subject')}
          />
        </label>
      </div>
      <div>
        <label>
          Сообщение <br />
          <textarea
            placeholder="Текст сообщения"
            {...register('message.text')}
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          <input type="file" />
          Прикрепить файл
        </label>
      </div>

      <input type="submit" value="Отправить" disabled={!isValid} />
    </form>
  );
}
export { Form };
