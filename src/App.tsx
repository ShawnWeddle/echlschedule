import MonthWrapper from "./components/MonthWrapper";
import { ECHLmap } from "./components/Map";

function App() {
  return (
    <main className="min-h-screen">
      <div className="bg-pink-600 sm:bg-green-600 md:bg-yellow-400 lg:bg-red-600 xl:bg-purple-600">
        WIDTH
      </div>
      <MonthWrapper />
      <ECHLmap />
    </main>
  );
}

export default App;
