import * as Yup from 'yup';
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

const DEFAULT_MAX_SIZE_IN_BYTES = 1048576 * 5; // 5Мб
export const validationFileSize = (name, size) => {
  const maxSizeInBytes = DEFAULT_MAX_SIZE_IN_BYTES;
  if (size > maxSizeInBytes) {
    alert(
      `Ошибка при загрузки файла с именем: ${name}. Файл должен быть до 5 МБ.`
    );
    return false;
  }
  return true;
};
