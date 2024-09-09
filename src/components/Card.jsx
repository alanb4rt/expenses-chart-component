export default function Card({ children, className }) {
  return <div className={`p-8 rounded-2xl ${className}`}>{children}</div>;
}
