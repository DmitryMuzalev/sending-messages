function Label({ label, children }) {
  return (
    <label>
      <span>{label}</span>
      {children}
    </label>
  );
}
export { Label };
