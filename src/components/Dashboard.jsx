import MonthlySpendingSummary from "./MonthlySpendingSummary";
import WeeklySpendingBarChart from "./WeeklySpendingBarChart";

export default function Dashboard() {
  return (
    <div className="bg-[var(--very-pale-orange)] p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Spending - Last 7 days</h2>
      <WeeklySpendingBarChart />
      <hr className="border-[var(--cream)] my-4" />
      <MonthlySpendingSummary />
    </div>
  );
}
