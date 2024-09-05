export default function BarChart({ day, amount }) {
  return (
    <div className="flex-1 flex flex-col gap-1 text-center">
      <p>{amount}</p>
      <p>{day}</p>
    </div>
  );
}
