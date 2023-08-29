import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validation';
import { Button } from '../Button/Button';
import classes from './Form.module.scss';
import { Textarea } from '../Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFile,
  selectUploadFiles,
} from '../../redux/slices/uploadFilesSlice';
import { UploadArea } from '../uploadArea/uploadArea';
import { LinkOfUpload } from '../LinkOfUpload/LinkOfUpload';
import { Label } from '../Label/Label';

function Form() {
  const dispatch = useDispatch();
  const { files, isUpload } = useSelector(selectUploadFiles);

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
    const data = { ...letter, files: files };
    console.log(data);
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
      <Label label="От кого">
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
      </Label>
      <Label label="Кому">
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
      </Label>
      <Label label="Тема письма">
        <Input
          type="text"
          register={register}
          name="subject"
          placeholder="Тема письма"
          error={errors.subject}
        />
      </Label>
      <Label label="Сообщение">
        <Textarea
          name="message.text"
          placeholder="Напишите что-нибудь..."
          register={register}
        />
      </Label>
      {!!files.length && (
        <ul className={classes.upload__list}>
          {files.map((file, index) => {
            const indexPoint = file.name.lastIndexOf('.');
            const [name, format] = [
              file.name.slice(0, indexPoint + 1),
              file.name.slice(indexPoint),
            ];
            return (
              <li key={index}>
                <div className={classes.upload__file}>
                  <div>
                    <i className="icon-paperclip"></i>
                    <p>{name}</p>
                    <span>{format}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(removeFile(file.name))}
                  >
                    <i className="icon-trash"></i>Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <LinkOfUpload />
      <Button type="submit" label="Отправить" disabled={!isValid} />
      {isUpload && <UploadArea />}
    </form>
  );
}
export { Form };
