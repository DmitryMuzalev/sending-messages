import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validation';
import { Button } from '../Button/Button';
import classes from './Form.module.scss';
import { Textarea } from '../Textarea/Textarea';
//import { useSelector } from 'react-redux';
//import { selectUploadFiles } from '../../redux/slices/uploadFilesSlice';
//import { UploadArea } from '../uploadArea/uploadArea';
//import { LinkOfUpload } from '../LinkOfUpload/LinkOfUpload';
import { Label } from '../Label/Label';
import { useState } from 'react';
//import { useState } from 'react';

function Form() {
  // const { isUpload } = useSelector(selectUploadFiles);
  const [files, setFiles] = useState([]);

  const handleUploadFiles = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFiles([...e.target.files]);
    }
  };

  console.log(files);
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
      {/*      <LinkOfUpload />*/}

      {!!files.length && (
        <ul className={classes.upload__list}>
          {files.map((file) => {
            const format = file.name.match(/\.[0-9a-z]+$/i)[0];
            console.log(format);
            return (
              <li key={file.name}>
                <div className={classes.upload__file}>
                  <p>
                    <i className="icon-paperclip"></i>
                    {file.name}
                  </p>
                  <button>
                    <i className="icon-trash"></i> Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <input
        type="file"
        name="files"
        accept=".png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .zip, .rar, .7zip"
        multiple
        onChange={handleUploadFiles}
      />

      <Button type="submit" label="Отправить" disabled={!isValid} />

      {/*   {isUpload && (
        <UploadArea register={register} setSelectedFile={setSelectedFile} />
      )}*/}
    </form>
  );
}
export { Form };
