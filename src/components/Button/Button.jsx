function Button({ label, type, disabled }) {
  return (
    <button
      className="btn"
      type={type}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );
}
export { Button };
