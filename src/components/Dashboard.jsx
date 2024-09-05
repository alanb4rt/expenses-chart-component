import WeeklySpendingBarChart from "./WeeklySpendingBarChart";

export default function Dashboard() {
  return (
    <div className="bg-white p-8 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Spending - Last 7 days</h2>
      <WeeklySpendingBarChart />
      <p>Total this month</p>
      <p>$478.33</p>
      <p>+2.4%</p>
      <p>from last month</p>
    </div>
  );
}
