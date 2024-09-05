import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-screen-sm mx-auto p-8">
          <div className="flex flex-col gap-6">
            <Header />
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
