import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validation';
import { Button } from '../Button/Button';
import classes from './Form.module.scss';
import { Textarea } from '../Textarea/Textarea';
import { useRef, useState } from 'react';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (letter) => {
    console.log(letter);
    reset();
  };

  const [isUpload, setIsUpload] = useState(false);
  const uploadFileRef = useRef();

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
            error={errors.from?.name}
          />
          <Input
            type="email"
            register={register}
            name="from.email"
            placeholder="Email"
            error={errors.from?.email}
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
            error={errors.to?.name}
          />
          <Input
            type="email"
            register={register}
            name="mca.0"
            placeholder="Email"
            error={errors.mca?.[0]}
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
          error={errors.subject}
        />
      </label>
      <label>
        <span>Сообщение</span>
        <Textarea
          name="message.text"
          placeholder="Напишите что-нибудь..."
          register={register}
        />
      </label>
      <a
        href="#upload-file"
        className={classes.upload__link}
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => {
          e.preventDefault();
          setIsUpload(true);
        }}
      >
        <i className="icon-paperclip"></i>
        <span>Прикрепить файл</span>
      </a>
      {isUpload && (
        <div className={classes.upload__area}>
          <button
            className={classes.upload__closed}
            onClick={() => setIsUpload(false)}
          >
            <i className="icon-close"></i>
          </button>
          <div>
            <h3>Бросайте файлы сюда, я ловлю</h3>
            <p>
              Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls,
              pdf) и zip-архивы. <br /> Размеры файла до 5 МБ
            </p>
          </div>
          <span>или</span>
          <div>
            <input
              type="file"
              {...register('files')}
              multiple
              hidden
              ref={uploadFileRef}
            />
            <button
              className="btn"
              type="button"
              onClick={() => uploadFileRef.current.click()}
            >
              Выберите файлы
            </button>
          </div>
        </div>
      )}

      <Button type="submit" label="Отправить" disabled={!isValid} />
    </form>
  );
}
export { Form };
