import classes from './Form.module.scss';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import { validationSchema } from '../../validation';
import {
  removeFiles,
  selectUploadFiles,
} from '../../redux/slices/uploadFilesSlice';

import { Label } from './Label/Label';

import { Input } from './Input/Input';
import { Textarea } from './Textarea/Textarea';
import { Button } from '../Button/Button';

import { LinkOfUpload } from '../FilePicker/LinkOfUpload';
import { ListUploadedFiles } from '../FilePicker/ListUploadedFiles';
import { UploadArea } from '../FilePicker/UploadArea';
import { addMessage } from '../../redux/slices/sentLettersSlice';

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
    const data = { ...letter, files: files, date: new Date() };
    dispatch(addMessage(data));
    dispatch(removeFiles());
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
      {!!files.length && <ListUploadedFiles />}
      <LinkOfUpload />
      <Button type="submit" label="Отправить" disabled={!isValid} />
      {isUpload && <UploadArea />}
    </form>
  );
}
export { Form };
