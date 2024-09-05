import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-screen-sm mx-auto p-8">
          <div className="flex flex-col gap-6">
            <Header />
            <div className="bg-white p-8 rounded-2xl">
              <p>Spending - Last 7 days</p>
              <p>mon</p>
              <p>tue</p>
              <p>wed</p>
              <p>thu</p>
              <p>fri</p>
              <p>sat</p>
              <p>sun</p>
              <p>Total this month</p>
              <p>$478.33</p>
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
