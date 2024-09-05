import data from "../data/data.json";
import BarChart from "./BarChart";

export default function WeeklySpendingBarChart() {
  return (
    <div className="flex justify-between gap-2">
      {data.map((element, index) => (
        <BarChart key={index} day={element.day} amount={element.amount} />
      ))}
    </div>
  );
}
