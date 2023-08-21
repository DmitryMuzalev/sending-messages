function ErrorMessage({ message }) {
  return (
    <span
      style={{
        lineHeight: '1.563rem',
        color: 'var(--red)',
        paddingLeft: '0.625rem',
      }}
    >
      {message}
    </span>
  );
}
export { ErrorMessage };
