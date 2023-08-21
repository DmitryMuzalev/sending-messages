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
