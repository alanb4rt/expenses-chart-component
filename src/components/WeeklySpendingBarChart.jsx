import data from "../data/data.json";
import BarChart from "./BarChart";

export default function WeeklySpendingBarChart() {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  return (
    <div className="flex justify-between h-44 mt-12">
      {data.map((element, index) => (
        <BarChart
          key={index}
          day={element.day}
          amount={element.amount}
          maxAmount={maxAmount}
        />
      ))}
    </div>
  );
}
