import * as Yup from 'yup';
import { destructFileName } from './functions';

//_Validation for form fields:
const emailFieldValidScheme = Yup.string()
  .required('Поле "Email" не может быть пустым')
  .matches(
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    'Проверьте правильность ввода e-mail адреса'
  );

const nameFieldValidScheme = Yup.string().required(
  'Поле "Имя" не может быть пустым'
);

const subjectFieldValidScheme = Yup.string().required(
  'Поле "Тема письма" не может быть пустым'
);

export const validationSchema = Yup.object({
  from: Yup.object({
    name: nameFieldValidScheme,
    email: emailFieldValidScheme,
  }),
  to: Yup.object({
    name: nameFieldValidScheme,
  }),
  mca: Yup.array().of(emailFieldValidScheme),
  subject: subjectFieldValidScheme,
});

//_Validation of uploaded files:
export const validationUploadedFiles = (file, validFormats, maxSize) => {
  const [name, format] = destructFileName(file.name);

  if (!validFormats.includes(format)) {
    alert(
      `Ошибка при загрузки файла с именем: ${name}. Формат данного файла не поддерживается.`
    );
    return false;
  }

  if (file.size >= maxSize) {
    alert(
      `Ошибка при загрузки файла с именем: ${name}. Файл должен быть до 5 МБ.`
    );
    return false;
  }

  return true;
};
