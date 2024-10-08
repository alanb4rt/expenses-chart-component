import Card from "./Card";
import MonthlySpendingSummary from "./MonthlySpendingSummary";
import WeeklySpendingBarChart from "./WeeklySpendingBarChart";

export default function Dashboard() {
  return (
    <main>
      <Card className="bg-[var(--very-pale-orange)]">
        <h2 className="text-2xl font-bold tracking-wide mb-4">
          Spending - Last 7 days
        </h2>
        <WeeklySpendingBarChart />
        <hr className="border-[var(--cream)] my-8" />
        <MonthlySpendingSummary />
      </Card>
    </main>
  );
}
