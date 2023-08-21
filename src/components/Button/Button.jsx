import classes from './Button.module.scss';

function Button({ label, type, disabled }) {
  return (
    <button className={classes.btn} type={type} disabled={disabled}>
      {label}
    </button>
  );
}
export { Button };