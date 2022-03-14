export default function SubmitButton({ children, onClick }) {
  return <button type="submit" onClick={onClick}>{children}</button>;
}