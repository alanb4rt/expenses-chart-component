export default function BarChart({ day, amount, maxAmount }) {
  const amountPercentage = (amount / maxAmount) * 100;

  const isMaxAmount = amount === maxAmount;

  return (
    <div className="flex-1 flex flex-col gap-1 text-center">
      <div className="h-full flex flex-col justify-end gap-1 w-full">
        <div
          className="group relative w-full px-1 sm:px-2"
          style={{ height: `${amountPercentage.toFixed(2)}%` }}
        >
          <div className="hidden group-hover:block absolute inset-x-0 -top-8 w-full min-w-fit text-sm text-white py-1 bg-[var(--dark-brown)] rounded">
            ${amount}
          </div>
          <div
            className={`group-hover:opacity-60 cursor-pointer w-full h-full rounded ${
              isMaxAmount ? "bg-[var(--cyan)]" : "bg-[var(--soft-red)]"
            }`}
          ></div>
        </div>
      </div>
      <p className="text-[var(--medium-brown)]">{day}</p>
    </div>
  );
}
