import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import classes from './Input.module.scss';
import { clsx } from 'clsx';

function Input({ name, type, placeholder, register, error, ...inputProps }) {
  const styles = clsx(classes.field, error && classes.field_error);

  return (
    <div className={styles}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        {...inputProps}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
export { Input };
