export default function MonthlySpendingSummary() {
  return (
    <>
      <h3 className="text-[var(--medium-brown)]">Total this month</h3>
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">$478.33</p>
        <div className="text-right leading-none">
          <p className="font-bold">+2.4%</p>
          <p className="text-[var(--medium-brown)]">from last month</p>
        </div>
      </div>
    </>
  );
}
