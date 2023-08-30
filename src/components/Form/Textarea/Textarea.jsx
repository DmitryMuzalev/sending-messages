import classes from './Textarea.module.scss';

function Textarea({ name, placeholder, register, ...textareaProps }) {
  return (
    <textarea
      className={classes.textarea}
      name={name}
      placeholder={placeholder}
      {...register(name)}
      {...textareaProps}
    />
  );
}
export { Textarea };
